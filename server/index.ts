import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import compression from "compression";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Fetches an elgoog.im page and modifies it to auto-click the play button.
 * elgoog.im pages have a landing article page with a CTA "Play the Easter Egg Now!"
 * button. This proxy fetches the page, fixes resource URLs, removes Cloudflare
 * rocket-loader obfuscation, and injects a script to auto-click the CTA button.
 */
async function proxyElgoogPage(gamePath: string): Promise<string | null> {
  const url = `https://elgoog.im/${gamePath}${gamePath.endsWith('/') ? '' : '/'}`;
  try {
    const resp = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml',
        'Accept-Language': 'en-US,en;q=0.9',
      },
    });
    if (!resp.ok) return null;
    let html = await resp.text();

    // 1. Add <base> tag so all relative URLs (CSS, JS, images) resolve to elgoog.im
    html = html.replace('<head>', '<head>\n<base href="https://elgoog.im/">');

    // 2. Fix Cloudflare Rocket Loader: convert obfuscated script types back to normal
    //    CF changes type="text/javascript" to type="<hex>-text/javascript" and defers loading
    html = html.replace(/type="[a-f0-9]+-text\/javascript"/g, 'type="text/javascript"');
    html = html.replace(/type="[a-f0-9]+-module"/g, 'type="module"');

    // 3. Remove Cloudflare rocket-loader and challenge scripts (they interfere when proxied)
    html = html.replace(/<script[^>]*rocket-loader[^>]*><\/script>/g, '');
    html = html.replace(/<script[^>]*data-cf-settings[^>]*><\/script>/g, '');

    // 4. Inject auto-play script: fix pathname for game init + auto-click the CTA button
    const autoPlayScript = `
<script>
(function() {
  // Fix pathname so elgoog's JS can determine which game to initialize
  try { history.replaceState(null, '', '/${gamePath.replace(/\/+$/, '')}/'); } catch(e) {}

  function autoPlay() {
    var btn = document.querySelector('.easter-egg-CTA__button');
    if (btn) {
      btn.click();
    } else {
      // Fallback: if button not found, try to init the game directly
      if (typeof window.init_current_page === 'function') {
        window.init_current_page();
        var vp = document.querySelector('.viewport');
        if (vp) { vp.classList.add('visible', 'prepare-transition'); }
        var landing = document.querySelector('.easter-egg-landing');
        if (landing) { landing.style.display = 'none'; }
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() { setTimeout(autoPlay, 300); });
  } else {
    setTimeout(autoPlay, 300);
  }
})();
</script>`;
    html = html.replace('</body>', autoPlayScript + '\n</body>');

    return html;
  } catch {
    return null;
  }
}

/**
 * Fetches a Google Doodle /logos/ page and strips CSP frame-ancestors
 * so it can be embedded in an iframe on our site.
 * Adds a <base> tag so relative resources (JS/CSS/images) resolve to Google's servers.
 */
async function proxyGoogleDoodlePage(gamePath: string): Promise<string | null> {
  // Normalize: if the path has no file extension, append .html
  const lastSegment = gamePath.split('/').pop() || '';
  if (!lastSegment.includes('.')) gamePath += '.html';

  const url = `https://www.google.com/logos/${gamePath}`;
  try {
    const resp = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml',
        'Accept-Language': 'en-US,en;q=0.9',
      },
    });
    if (!resp.ok) return null;
    let html = await resp.text();

    // Add <base> tag so all relative URLs resolve to the game's directory on Google
    const baseDir = gamePath.substring(0, gamePath.lastIndexOf('/') + 1);
    const baseTag = `<base href="https://www.google.com/logos/${baseDir}">`;
    if (html.includes('<head>')) {
      html = html.replace('<head>', `<head>\n${baseTag}`);
    } else if (html.includes('<html')) {
      html = html.replace(/<html([^>]*)>/, `<html$1>\n<head>${baseTag}</head>`);
    } else {
      html = `<head>${baseTag}</head>\n${html}`;
    }

    // Inject CSS + JS to make the game fill the entire iframe.
    // Older doodles (pre-2017) only have #fpdoodle styles for full-page mode,
    // but when embedded in an iframe they set id="sdoodles" on <html>.
    // We force id="fpdoodle" and add universal fullscreen overrides.
    const fullscreenStyle = `<style>html,body{margin:0;padding:0;width:100%;height:100%;overflow:hidden;background:#000}#hplogo{width:100%!important;height:100%!important;max-width:100vw!important;max-height:100vh!important}#hplogo canvas,#hpcanvas{width:100%!important;height:100%!important}#ctaRoot{opacity:1!important;pointer-events:auto!important}</style>`;
    const fullscreenScript = `<script>document.documentElement.id='fpdoodle';</script>`;
    // Auto-click the CTA play button after the game loads.
    const autoClickCta = `<script>(function(){function c(){var e=document.getElementById('ctaCanvas');if(e){e.click();e.dispatchEvent(new MouseEvent('mousedown',{bubbles:true}));e.dispatchEvent(new MouseEvent('mouseup',{bubbles:true}));}else{var b=document.querySelector('#ctaRoot, .cta');if(b){b.click();}}}if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',function(){setTimeout(c,800);});}else{setTimeout(c,800);}})();</script>`;
    if (html.includes('</head>')) {
      html = html.replace('</head>', fullscreenStyle + fullscreenScript + '</head>');
    } else {
      html = html.replace('</body>', fullscreenStyle + fullscreenScript + '</body>');
    }
    // Append auto-click at the very end — many Google doodles lack </body>
    html += autoClickCta;

    // Rewrite ALL /logos/ absolute paths to full Google URLs.
    // CSS url(), dynamically-created script.src, and other references to
    // /logos/... would otherwise resolve to localhost and 404.
    html = html.replace(/(["'(=])\/(logos\/)/g, '$1https://www.google.com/$2');

    // Also rewrite /search?q= links to full Google URLs so they don't
    // navigate the iframe to our site.
    html = html.replace(/(["'(=])\/search\?/g, '$1https://www.google.com/search?');

    return html;
  } catch {
    return null;
  }
}

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Gzip / Brotli compression
  app.use(compression());

  // Security + performance headers
  app.use((_req, res, next) => {
    res.setHeader("X-Content-Type-Options", "nosniff");
    res.setHeader("X-Frame-Options", "SAMEORIGIN");
    res.setHeader("X-XSS-Protection", "1; mode=block");
    res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
    // Permissions-Policy: disable unused browser features
    res.setHeader("Permissions-Policy", "camera=(), microphone=(), geolocation=(), interest-cohort=()");
    // Vary on encoding for correct CDN caching
    res.setHeader("Vary", "Accept-Encoding");
    next();
  });

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  // Immutable cache for hashed assets (JS, CSS, images)
  app.use(
    "/assets",
    express.static(path.join(staticPath, "assets"), {
      maxAge: "1y",
      immutable: true,
    })
  );

  // Long cache for thumbnail images (content-addressed)
  app.use(
    "/thumbnails",
    express.static(path.join(staticPath, "thumbnails"), {
      maxAge: "30d",
      immutable: true,
    })
  );

  // elgoog proxy pages — serve pre-built static files first (no X-Frame-Options)
  app.use(
    "/elgoog",
    express.static(path.join(staticPath, "elgoog"), {
      maxAge: "1h",
      setHeaders(res) {
        // Allow iframe embedding for elgoog proxy pages
        res.removeHeader("X-Frame-Options");
      },
    })
  );

  // Google Doodle proxy pages — serve pre-built static files first (no X-Frame-Options)
  app.use(
    "/google-doodle",
    express.static(path.join(staticPath, "google-doodle"), {
      maxAge: "1h",
      extensions: ["html"],
      setHeaders(res) {
        // Allow iframe embedding for google doodle proxy pages
        res.removeHeader("X-Frame-Options");
      },
    })
  );

  // Redirect /logos/* to Google — Google Doodle JS injects CSS with
  // absolute url(/logos/...) paths that would otherwise 404 on our host.
  app.get('/logos/:path(*)', (req, res) => {
    res.redirect(302, `https://www.google.com/logos/${req.params.path}`);
  });

  // Short cache for other static files (sitemap, robots.txt)
  app.use(express.static(staticPath, {
    maxAge: "1h",
    setHeaders(res, filePath) {
      // HTML pages: short cache + stale-while-revalidate for instant loads
      if (filePath.endsWith('.html')) {
        res.setHeader('Cache-Control', 'public, max-age=300, stale-while-revalidate=86400');
      }
    }
  }));

  // ── elgoog.im live proxy fallback (server mode only) ──
  // If pre-built static files don't exist, fetch from elgoog.im on-the-fly.
  app.get('/elgoog/:path(*)', async (req, res, next) => {
    const gamePath = req.params.path?.replace(/\/+$/, '');
    if (!gamePath) return next();

    const html = await proxyElgoogPage(gamePath);
    if (!html) return next();

    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.removeHeader('X-Frame-Options');
    res.send(html);
  });

  // ── Google Doodle /logos/ proxy ──
  // Google added CSP frame-ancestors to all /logos/ pages, blocking iframe embedding.
  // This proxy fetches the page and serves it without the restrictive CSP header.
  app.get('/google-doodle/:path(*)', async (req, res, next) => {
    const gamePath = req.params.path;
    if (!gamePath) return next();

    const html = await proxyGoogleDoodlePage(gamePath);
    if (!html) return next();

    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.removeHeader('X-Frame-Options');
    res.send(html);
  });

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    // Set cache headers for HTML fallback
    res.setHeader('Cache-Control', 'public, max-age=300, stale-while-revalidate=86400');
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
