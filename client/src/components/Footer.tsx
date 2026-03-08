import { Link } from "wouter";
import { Gamepad2, Heart } from "lucide-react";
import { useT } from "@/contexts/LanguageContext";
import { GAMES } from "@/data/games";
import { useGameTranslate } from "@/data/gameTranslations";

// Design: Clean, informative footer with sitemap links for SEO and navigation
// Categories match the CATEGORIES array in games.ts

const CATEGORY_LINKS = [
  { labelKey: "footer.popularGames", href: "/" },
  { labelKey: "category.classic", href: "/?category=classic" },
  { labelKey: "category.arcade", href: "/?category=arcade" },
  { labelKey: "category.puzzle", href: "/?category=puzzle" },
  { labelKey: "category.sports", href: "/?category=sports" },
  { labelKey: "category.creative", href: "/?category=creative" },
  { labelKey: "category.educational", href: "/?category=educational" },
  { labelKey: "category.seasonal", href: "/?category=seasonal" },
  { labelKey: "category.adventure", href: "/?category=adventure" },
];

const QUICK_LINKS = [
  { labelKey: "nav.aToZ", href: "/games" },
  { labelKey: "nav.daily", href: "/daily" },
  { labelKey: "nav.leaderboard", href: "/top-rated" },
  { labelKey: "common.seeAll", href: "/" },
  { labelKey: "nav.about", href: "/about" },
  { labelKey: "nav.contact", href: "/contact" },
  { labelKey: "nav.privacy", href: "/privacy" },
];

const POPULAR_GAME_SLUGS = [
  "pacman",
  "google-solitaire",
  "atari-breakout",
  "halloween",
  "google-interland",
  "google-tetris",
  "google-2048",
  "zerg-rush",
];

export default function Footer() {
  const t = useT();
  const gt = useGameTranslate();
  const popularGames = POPULAR_GAME_SLUGS.map(slug => GAMES.find(g => g.slug === slug)).filter(Boolean) as typeof GAMES;
  return (
    <footer className="bg-slate-900 text-slate-400 mt-8 md:mt-16">
      {/* Top brand strip — centered */}
      <div className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col items-center text-center">
          <Link href="/">
            <div className="flex items-center gap-2 mb-3 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center shadow-lg">
                <Gamepad2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-bold text-white text-lg">Doodle</span>
                <span className="text-teal-400 font-bold text-lg">Playground</span>
              </div>
            </div>
          </Link>
          <p className="text-slate-400 text-sm leading-relaxed max-w-md mb-3">
            {t('footer.taglineDesc')}
          </p>
          <div className="flex items-center gap-1.5 text-xs text-slate-500">
            <span>{t('footer.madeWith')}</span>
            <Heart className="w-3 h-3 text-rose-400 fill-rose-400" />
            <span>{t('footer.forGameLovers')}</span>
          </div>
        </div>
      </div>

      {/* Link columns — 3-col centered */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-center sm:text-left">
          {/* Categories */}
          <div>
            <h3 className="text-white font-semibold text-xs mb-4 uppercase tracking-widest">{t('footer.categories')}</h3>
            <ul className="space-y-2">
              {CATEGORY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-slate-400 hover:text-teal-400 transition-colors text-sm cursor-pointer">
                      {t(link.labelKey as any)}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links + Popular Games merged */}
          <div>
            <h3 className="text-white font-semibold text-xs mb-4 uppercase tracking-widest">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-slate-400 hover:text-teal-400 transition-colors text-sm cursor-pointer">
                      {t(link.labelKey as any)}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Games */}
          <div className="col-span-2 sm:col-span-1">
            <h3 className="text-white font-semibold text-xs mb-4 uppercase tracking-widest">{t('footer.popularGames')}</h3>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-2">
              {popularGames.map((game) => (
                <li key={game.slug}>
                  <Link href={`/play/${game.slug}/`}>
                    <span className="text-slate-400 hover:text-teal-400 transition-colors text-sm cursor-pointer">
                      {gt(game).title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar — compact */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-slate-500 text-xs">
            {t('footer.copyright', { year: new Date().getFullYear() })}
          </p>
          <div className="flex items-center gap-4 text-xs text-slate-500">
            <Link href="/games/">
              <span className="hover:text-slate-300 transition-colors cursor-pointer">{t('nav.aToZ')}</span>
            </Link>
            <span className="text-slate-700">•</span>
            <Link href="/privacy/">
              <span className="hover:text-slate-300 transition-colors cursor-pointer">{t('nav.privacy')}</span>
            </Link>
            <span className="text-slate-700">•</span>
            <Link href="/contact/">
              <span className="hover:text-slate-300 transition-colors cursor-pointer">{t('nav.contact')}</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
