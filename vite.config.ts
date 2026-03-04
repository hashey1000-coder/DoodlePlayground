import { jsxLocPlugin } from "@builder.io/vite-plugin-jsx-loc";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig, type Plugin } from "vite";

/**
 * Vite dev server plugin that proxies elgoog.im pages and injects auto-play JS.
 * Mirrors the proxy logic in server/index.ts for development mode.
 */
function elgoogProxyPlugin(): Plugin {
  return {
    name: 'elgoog-proxy',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (!req.url?.startsWith('/elgoog/')) return next();

        const gamePath = req.url.replace('/elgoog/', '').split('?')[0].replace(/\/+$/, '');
        if (!gamePath) { res.statusCode = 400; res.end('Missing game path'); return; }

        const safeEnd = (body: string, status = 200) => {
          if (res.writableEnded || res.destroyed) return;
          res.statusCode = status;
          res.end(body);
        };

        try {
          const url = `https://elgoog.im/${gamePath}${gamePath.endsWith('/') ? '' : '/'}`;
          const resp = await fetch(url, {
            headers: {
              'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
              'Accept': 'text/html',
            },
          });
          if (!resp.ok) { safeEnd('Failed to load game', 502); return; }

          let html = await resp.text();

          // Add <base> so relative URLs resolve to elgoog.im
          html = html.replace('<head>', '<head>\n<base href="https://elgoog.im/">');
          // Fix CF rocket-loader script types
          html = html.replace(/type="[a-f0-9]+-text\/javascript"/g, 'type="text/javascript"');
          html = html.replace(/type="[a-f0-9]+-module"/g, 'type="module"');
          // Remove CF scripts that interfere
          html = html.replace(/<script[^>]*rocket-loader[^>]*><\/script>/g, '');
          html = html.replace(/<script[^>]*data-cf-settings[^>]*><\/script>/g, '');

          // Inject auto-play script
          const slug = gamePath.replace(/\/+$/, '');
          const autoPlayScript = `<script>(function(){try{history.replaceState(null,'','/${slug}/');}catch(e){}function a(){var b=document.querySelector('.easter-egg-CTA__button');if(b){b.click();}else if(typeof window.init_current_page==='function'){window.init_current_page();var v=document.querySelector('.viewport');if(v){v.classList.add('visible','prepare-transition');}var l=document.querySelector('.easter-egg-landing');if(l){l.style.display='none';}}}if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',function(){setTimeout(a,300);});}else{setTimeout(a,300);}})();</script>`;
          html = html.replace('</body>', autoPlayScript + '</body>');

          if (!res.writableEnded && !res.destroyed) {
            res.setHeader('Content-Type', 'text/html; charset=utf-8');
            res.setHeader('Cache-Control', 'no-cache');
            res.end(html);
          }
        } catch (err) {
          console.error('[elgoog-proxy]', err instanceof Error ? err.message : err);
          safeEnd('Proxy error', 502);
        }
      });
    },
  };
}

/**
 * Vite dev server plugin that proxies Google Doodle /logos/ pages.
 * Strips the CSP frame-ancestors header so games can be embedded in iframes.
 * Adds a <base> tag so relative resources (JS/CSS/images) resolve to Google's servers.
 */
function googleDoodleProxyPlugin(): Plugin {
  return {
    name: 'google-doodle-proxy',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (!req.url?.startsWith('/google-doodle/')) return next();

        let gamePath = req.url.replace('/google-doodle/', '').split('?')[0];
        if (!gamePath) { res.statusCode = 400; res.end('Missing game path'); return; }

        // Normalize: if the path has no file extension, append .html
        // (browsers/Vite may strip .html via clean-URL redirects)
        const lastSegment = gamePath.split('/').pop() || '';
        if (!lastSegment.includes('.')) gamePath += '.html';

        const safeEnd = (body: string, status = 200) => {
          if (res.writableEnded || res.destroyed) return;
          res.statusCode = status;
          res.end(body);
        };

        try {
          const url = `https://www.google.com/logos/${gamePath}`;
          const resp = await fetch(url, {
            headers: {
              'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
              'Accept': 'text/html',
            },
          });
          if (!resp.ok) { safeEnd('Failed to load game', resp.status); return; }

          let html = await resp.text();

          // Add <base> so relative URLs resolve to the game's directory on Google
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
          // Many doodles show a CTA overlay that must be clicked before the game starts.
          // Setting id='fpdoodle' hides it (opacity:0), so we auto-click it.
          const autoClickCta = `<script>(function(){function c(){var e=document.getElementById('ctaCanvas');if(e){e.click();e.dispatchEvent(new MouseEvent('mousedown',{bubbles:true}));e.dispatchEvent(new MouseEvent('mouseup',{bubbles:true}));}else{var b=document.querySelector('#ctaRoot, .cta');if(b){b.click();}}}if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',function(){setTimeout(c,800);});}else{setTimeout(c,800);}})();</script>`;
          // Insert right before </head> or </body>
          if (html.includes('</head>')) {
            html = html.replace('</head>', fullscreenStyle + fullscreenScript + '</head>');
          } else {
            html = html.replace('</body>', fullscreenStyle + fullscreenScript + '</body>');
          }
          // Append auto-click at the very end — many Google doodles lack </body>
          html += autoClickCta;

          // Rewrite ALL /logos/ absolute paths to full Google URLs.
          // This is critical because CSS url(), dynamically-created script.src,
          // and other references to /logos/... would otherwise resolve to
          // localhost (the proxy origin) and 404.
          html = html.replace(/(["'(=])\/(logos\/)/g, '$1https://www.google.com/$2');

          // Also rewrite protocol-relative //www.google.com/ links and
          // /search?q= links to full Google URLs so they don't navigate
          // the iframe to our site.
          html = html.replace(/(["'(=])\/search\?/g, '$1https://www.google.com/search?');

          // Serve without CSP frame-ancestors (by not forwarding Google's headers)
          if (!res.writableEnded && !res.destroyed) {
            res.setHeader('Content-Type', 'text/html; charset=utf-8');
            res.setHeader('Cache-Control', 'no-cache');
            res.end(html);
          }
        } catch (err) {
          console.error('[google-doodle-proxy]', err instanceof Error ? err.message : err);
          safeEnd('Proxy error', 502);
        }
      });
    },
  };
}

/**
 * Redirect /logos/* requests to Google's servers.
 * Google Doodle JS (loaded cross-origin from google.com) injects CSS with
 * absolute paths like url(/logos/2022/tharp/rc1/sprite.png). The <base> tag
 * only helps relative URLs, so absolute /logos/ paths resolve to localhost
 * and 404. This redirect sends the browser straight to Google.
 */
function googleLogosRedirectPlugin(): Plugin {
  return {
    name: 'google-logos-redirect',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (!req.url?.startsWith('/logos/')) return next();
        const googleUrl = `https://www.google.com${req.url}`;
        res.writeHead(302, { Location: googleUrl });
        res.end();
      });
    },
  };
}

const plugins = [react(), tailwindcss(), jsxLocPlugin(), elgoogProxyPlugin(), googleDoodleProxyPlugin(), googleLogosRedirectPlugin()];

export default defineConfig({
  plugins,
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  envDir: path.resolve(import.meta.dirname),
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
    target: 'es2020',
    cssCodeSplit: true,
    modulePreload: {
      polyfill: false, // Modern browsers support modulepreload natively
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Vendor: React core in its own chunk (rarely changes → long cache)
          if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/')) {
            return 'react-vendor';
          }
          // Radix UI components in one chunk
          if (id.includes('node_modules/@radix-ui/')) {
            return 'radix-ui';
          }
          // Icons
          if (id.includes('node_modules/lucide-react/')) {
            return 'icons';
          }
          // Charts/carousel (only used on some pages)
          if (id.includes('node_modules/recharts/') || id.includes('node_modules/embla-carousel')) {
            return 'charts-carousel';
          }
          // Confetti (only triggered on interaction)
          if (id.includes('node_modules/canvas-confetti/')) {
            return 'confetti';
          }
        },
      },
    },
    // Translations are now lazy-loaded, so chunks should be much smaller
    chunkSizeWarningLimit: 1000,
  },
  server: {
    port: 3000,
    strictPort: false, // Will find next available port if 3000 is busy
    host: true,
    allowedHosts: [
      "localhost",
      "127.0.0.1",
    ],
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
