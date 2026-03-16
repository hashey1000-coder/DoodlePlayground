/**
 * Online Games — /online-games
 * Dedicated page for the curated collection of 20 free online classic games
 * (Tetris, Pong, 2048, Flappy Bird, Space Invaders, etc.)
 */
import { useState, useMemo, useCallback, useRef, useEffect } from "react";
import { Link, useLocation } from "wouter";
import {
  Search, Play, Heart, ArrowLeft, Gamepad2, X,
  ChevronDown, ChevronUp, ArrowUpDown, ChevronLeft, ChevronRight
} from "lucide-react";
import { GAMES, ALL_TAGS } from "@/data/games";
import { useFavourites } from "@/hooks/useFavourites";
import TiltCard from "@/components/TiltCard";
import AnimatedCard from "@/components/AnimatedCard";
import BlurImage from "@/components/BlurImage";
import { useT } from "@/contexts/LanguageContext";
import { useGameTranslate } from "@/data/gameTranslations";
import { prefetchGameUrl } from "@/lib/utils";
import { useHead } from "@/hooks/useHead";

const ONLINE_GAMES = GAMES.filter((g) => g.category === "online");
const GAMES_PER_PAGE = 20;

function getLikeCount(slug: string): number {
  try {
    const stored = localStorage.getItem(`game-votes-${slug}`);
    if (stored) {
      const parsed = JSON.parse(stored);
      return parsed.likes || 0;
    }
    return 0;
  } catch {
    return 0;
  }
}

// Tags that appear in the online games collection
const ONLINE_TAGS = ALL_TAGS.filter((tag) =>
  ONLINE_GAMES.some((g) => g.tags.includes(tag.id))
);

export default function OnlineGames() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<"default" | "a-z" | "highest-rated" | "difficulty-easy" | "difficulty-hard">("default");
  const [showSortMenu, setShowSortMenu] = useState(false);
  const [showTagPanel, setShowTagPanel] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [favPulse, setFavPulse] = useState(false);
  const sortMenuRef = useRef<HTMLDivElement>(null);
  const gameGridRef = useRef<HTMLDivElement>(null);
  const pulseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [, navigate] = useLocation();

  const t = useT();
  const gt = useGameTranslate();
  const { favourites, toggleFavourite, isFavourite } = useFavourites();

  useHead({
    title: "Online Games — Play Free Classic Browser Games | Doodle Playground",
    description:
      "Play 20 free classic browser games — Tetris, Pong, 2048, Flappy Bird, Space Invaders, Asteroids, Connect Four, Reversi, and more. No download required.",
    routePath: "/online-games/",
  });

  // Close sort menu on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (sortMenuRef.current && !sortMenuRef.current.contains(e.target as Node)) {
        setShowSortMenu(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const toggleTag = (tagId: string) => {
    setActiveTags((prev) =>
      prev.includes(tagId) ? prev.filter((t) => t !== tagId) : [...prev, tagId]
    );
  };

  const clearTags = () => setActiveTags([]);

  const filteredGames = useMemo(() => {
    let games = ONLINE_GAMES;

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      games = games.filter((g) => {
        const translated = gt(g);
        return (
          g.title.toLowerCase().includes(q) ||
          g.description.toLowerCase().includes(q) ||
          translated.title.toLowerCase().includes(q) ||
          translated.description.toLowerCase().includes(q)
        );
      });
    }

    if (activeTags.length > 0) {
      games = games.filter((g) =>
        activeTags.every((tag) => g.tags.includes(tag))
      );
    }

    if (sortBy === "a-z") {
      games = [...games].sort((a, b) =>
        gt(a).title.localeCompare(gt(b).title)
      );
    } else if (sortBy === "highest-rated") {
      games = [...games].sort(
        (a, b) => getLikeCount(b.slug) - getLikeCount(a.slug)
      );
    } else if (sortBy === "difficulty-easy") {
      const order = { easy: 0, medium: 1, hard: 2 };
      games = [...games].sort(
        (a, b) => order[a.difficulty] - order[b.difficulty]
      );
    } else if (sortBy === "difficulty-hard") {
      const order = { easy: 2, medium: 1, hard: 0 };
      games = [...games].sort(
        (a, b) => order[a.difficulty] - order[b.difficulty]
      );
    }

    return games;
  }, [searchQuery, activeTags, sortBy, gt]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, activeTags, sortBy]);

  const totalPages = Math.ceil(filteredGames.length / GAMES_PER_PAGE);
  const paginatedGames = filteredGames.slice(
    (currentPage - 1) * GAMES_PER_PAGE,
    currentPage * GAMES_PER_PAGE
  );

  const handleToggleFavourite = useCallback(
    (slug: string) => {
      const wasNotFav = !isFavourite(slug);
      toggleFavourite(slug);
      if (wasNotFav) {
        setFavPulse(true);
        if (pulseTimer.current) clearTimeout(pulseTimer.current);
        pulseTimer.current = setTimeout(() => setFavPulse(false), 800);
      }
    },
    [toggleFavourite, isFavourite]
  );

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const difficultyLabel = (d: string) => {
    if (d === "easy") return t("difficulty.easy");
    if (d === "medium") return t("difficulty.medium");
    return t("difficulty.hard");
  };

  const difficultyColour = (d: string) => {
    if (d === "easy")   return "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40";
    if (d === "medium") return "text-amber-600   dark:text-amber-400   bg-amber-50   dark:bg-amber-950/40";
    return                     "text-rose-600    dark:text-rose-400    bg-rose-50    dark:bg-rose-950/40";
  };

  const sortLabels: Record<string, string> = {
    default:          t("home.sortDefault" as any)         || "Featured",
    "a-z":            t("home.sortAZ"      as any)         || "A–Z",
    "highest-rated":  t("home.sortRated"   as any)         || "Highest Rated",
    "difficulty-easy": "Easiest First",
    "difficulty-hard": "Hardest First",
  };

  return (
    <div className="min-h-screen bg-slate-50/50 dark:bg-slate-950">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-8">

        {/* ── Back link ── */}
        <Link href="/">
          <span className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-violet-600 font-medium mb-6 transition-colors cursor-pointer">
            <ArrowLeft className="w-4 h-4" />
            {t("nav.allGames")}
          </span>
        </Link>

        {/* ── Hero header ── */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 p-8 md:p-12 mb-10">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-white/5 -translate-y-1/3 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-56 h-56 rounded-full bg-white/5 translate-y-1/3 pointer-events-none" />
          <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center">
                  <Gamepad2 className="w-5 h-5 text-white" />
                </div>
                <span className="text-white/80 text-xs font-semibold tracking-widest uppercase">
                  Free Online Games
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-black text-white mb-3 leading-tight">
                Online Games 🌐
              </h1>
              <p className="text-white/80 text-base md:text-lg max-w-lg leading-relaxed">
                20 classic browser games — from Tetris and Pong to 2048 and Flappy Bird.
                No downloads, no sign-ups. Just play.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-3 shrink-0">
              {ONLINE_GAMES.slice(0, 6).map((g) => (
                <Link key={g.slug} href={`/play/${g.slug}/`}>
                  <div
                    className="w-14 h-14 md:w-16 md:h-16 rounded-xl overflow-hidden cursor-pointer hover:scale-110 transition-transform shadow-lg shadow-black/20"
                    onMouseEnter={() => prefetchGameUrl(g.iframeUrl)}
                  >
                    <BlurImage
                      src={g.thumbnail}
                      alt={g.title}
                      aspectClass="aspect-square"
                      width={64}
                      height={64}
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ── Controls row: search + sort + tags ── */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-6">
          {/* Search */}
          <form onSubmit={handleSearchSubmit} className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search games…"
              className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm text-slate-700 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100 dark:focus:ring-violet-900/30 transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </form>

          {/* Tags toggle */}
          <button
            onClick={() => setShowTagPanel((p) => !p)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-medium transition-all ${
              activeTags.length > 0
                ? "border-violet-400 bg-violet-50 dark:bg-violet-950/40 text-violet-700 dark:text-violet-300"
                : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:border-slate-300"
            }`}
          >
            <span>🏷</span>
            <span>Tags{activeTags.length > 0 ? ` (${activeTags.length})` : ""}</span>
            {showTagPanel ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>

          {/* Sort */}
          <div className="relative" ref={sortMenuRef}>
            <button
              onClick={() => setShowSortMenu((p) => !p)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm font-medium text-slate-600 dark:text-slate-300 hover:border-slate-300 transition-all whitespace-nowrap"
            >
              <ArrowUpDown className="w-3.5 h-3.5" />
              {sortLabels[sortBy]}
              <ChevronDown className="w-3 h-3 opacity-60" />
            </button>
            {showSortMenu && (
              <div className="absolute right-0 top-full mt-1.5 z-30 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl shadow-lg overflow-hidden min-w-[180px]">
                {Object.entries(sortLabels).map(([key, label]) => (
                  <button
                    key={key}
                    onClick={() => { setSortBy(key as typeof sortBy); setShowSortMenu(false); }}
                    className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                      sortBy === key
                        ? "bg-violet-50 dark:bg-violet-950/40 text-violet-700 dark:text-violet-300 font-medium"
                        : "text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ── Tag panel ── */}
        {showTagPanel && (
          <div className="mb-6 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Filter by tag
              </span>
              {activeTags.length > 0 && (
                <button
                  onClick={clearTags}
                  className="text-xs text-violet-600 hover:text-violet-700 font-medium"
                >
                  Clear all
                </button>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {ONLINE_TAGS.map((tag) => (
                <button
                  key={tag.id}
                  onClick={() => toggleTag(tag.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                    activeTags.includes(tag.id)
                      ? "bg-violet-600 text-white border-violet-600"
                      : "bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-600 hover:border-violet-300"
                  }`}
                >
                  <span>{tag.emoji}</span>
                  {t(tag.labelKey as any) || tag.id}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ── Results count ── */}
        <div className="flex items-center justify-between mb-5">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            {filteredGames.length === ONLINE_GAMES.length
              ? `${ONLINE_GAMES.length} games`
              : `${filteredGames.length} of ${ONLINE_GAMES.length} games`}
          </p>
          {isFavourite("tetris") !== undefined && (
            <Link href="/">
              <span
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-all cursor-pointer ${
                  favPulse
                    ? "bg-rose-100 border-rose-300 text-rose-600 dark:bg-rose-950/40 dark:border-rose-700 dark:text-rose-400"
                    : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-500 hover:border-rose-300"
                }`}
              >
                <Heart className="w-3 h-3" fill={favPulse ? "currentColor" : "none"} />
                {favourites.length} saved
              </span>
            </Link>
          )}
        </div>

        {/* ── Game grid ── */}
        {filteredGames.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-5xl mb-4">🎮</div>
            <p className="text-slate-500 dark:text-slate-400 text-base">
              No games found.{" "}
              <button
                onClick={() => { setSearchQuery(""); clearTags(); }}
                className="text-violet-600 hover:underline"
              >
                Clear filters
              </button>
            </p>
          </div>
        ) : (
          <div
            ref={gameGridRef}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-10"
          >
            {paginatedGames.map((game) => {
              const translated = gt(game);
              const isFav = isFavourite(game.slug);
              return (
                <AnimatedCard key={game.id}>
                  <TiltCard>
                    <Link href={`/play/${game.slug}/`}>
                      <div
                        className="group relative flex flex-col rounded-2xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md hover:shadow-violet-100/40 dark:hover:shadow-violet-900/20 transition-all duration-200 cursor-pointer h-full"
                        onMouseEnter={() => prefetchGameUrl(game.iframeUrl)}
                      >
                        {/* Thumbnail */}
                        <div className="relative aspect-[4/3] overflow-hidden bg-slate-100 dark:bg-slate-800">
                          <BlurImage
                            src={game.thumbnail}
                            alt={translated.title}
                            aspectClass="aspect-[4/3]"
                          />
                          {/* Play overlay */}
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200 flex items-center justify-center">
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 w-12 h-12 rounded-full bg-white/90 shadow-lg flex items-center justify-center">
                              <Play className="w-5 h-5 text-slate-800 ml-0.5" fill="currentColor" />
                            </div>
                          </div>
                          {/* New badge */}
                          {game.isNew && (
                            <div className="absolute top-2 left-2">
                              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-violet-600 text-white shadow-sm">
                                {t("common.new")}
                              </span>
                            </div>
                          )}
                          {/* Favourite button */}
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              handleToggleFavourite(game.slug);
                            }}
                            className={`absolute top-2 right-2 w-7 h-7 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 shadow ${
                              isFav
                                ? "bg-rose-500 opacity-100"
                                : "bg-white/90 hover:bg-rose-50"
                            }`}
                            aria-label={isFav ? t("game.unfavourite") : t("game.favourite")}
                          >
                            <Heart
                              className={`w-3.5 h-3.5 ${isFav ? "text-white" : "text-rose-400"}`}
                              fill={isFav ? "currentColor" : "none"}
                            />
                          </button>
                        </div>

                        {/* Card body */}
                        <div className="p-3 flex flex-col gap-1.5 flex-1">
                          <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 leading-tight line-clamp-1">
                            {translated.title}
                          </h3>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug line-clamp-2 flex-1">
                            {translated.description}
                          </p>
                          <div className="flex items-center justify-between gap-1 mt-auto pt-1">
                            <span
                              className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold ${difficultyColour(game.difficulty)}`}
                            >
                              {difficultyLabel(game.difficulty)}
                            </span>
                            <span
                              className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium border bg-violet-50 dark:bg-violet-950/30 text-violet-600 dark:text-violet-400 border-violet-200 dark:border-violet-800"
                            >
                              🌐 Online
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </TiltCard>
                </AnimatedCard>
              );
            })}
          </div>
        )}

        {/* ── Pagination ── */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 pb-8">
            <button
              onClick={() => {
                setCurrentPage((p) => p - 1);
                gameGridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              disabled={currentPage === 1}
              className="w-9 h-9 rounded-xl flex items-center justify-center border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-violet-600 hover:border-violet-300 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => {
                  setCurrentPage(p);
                  gameGridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className={`w-9 h-9 rounded-xl flex items-center justify-center text-sm font-medium transition-colors ${
                  currentPage === p
                    ? "bg-violet-600 text-white border border-violet-600"
                    : "border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-violet-300 hover:text-violet-600"
                }`}
              >
                {p}
              </button>
            ))}
            <button
              onClick={() => {
                setCurrentPage((p) => p + 1);
                gameGridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              disabled={currentPage === totalPages}
              className="w-9 h-9 rounded-xl flex items-center justify-center border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-violet-600 hover:border-violet-300 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
