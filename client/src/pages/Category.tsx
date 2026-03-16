import { useMemo } from "react";
import { Link, useParams } from "wouter";
import { ChevronLeft, Play, Heart } from "lucide-react";
import { GAMES, CATEGORIES } from "@/data/games";
import { useGameTranslate } from "@/data/gameTranslations";
import { useT } from "@/contexts/LanguageContext";
import AnimatedCard from "@/components/AnimatedCard";
import TiltCard from "@/components/TiltCard";
import BlurImage from "@/components/BlurImage";
import { useFavourites } from "@/hooks/useFavourites";
import { prefetchGameUrl } from "@/lib/utils";
import { useHead } from "@/hooks/useHead";

export default function Category() {
  const { slug } = useParams<{ slug: string }>();
  const t = useT();
  const gt = useGameTranslate();
  const { toggleFavourite, isFavourite } = useFavourites();

  const category = CATEGORIES.find((c) => c.id === slug);

  const games = useMemo(
    () => GAMES.filter((g) => g.category === slug),
    [slug],
  );

  useHead({
    title: category
      ? `${t(`category.${slug}` as any)} Games — Doodle Playground`
      : "Category — Doodle Playground",
    description: `Play the best ${category ? t(`category.${slug}` as any) : slug} Google Doodle games. ${games.length} games free to play in your browser.`,
    routePath: `/category/${slug}/`,
  });

  if (!category || games.length === 0) {
    return (
      <div className="min-h-screen bg-slate-50/50 dark:bg-slate-950">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-16 text-center">
          <div className="text-5xl mb-4">😕</div>
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-2">
            Category not found
          </h2>
          <Link href="/">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-600 text-white rounded-full text-sm font-medium hover:bg-teal-700 transition-colors">
              <ChevronLeft className="w-4 h-4" />
              Back to all games
            </span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50/50 dark:bg-slate-950">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-6">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-4 text-sm">
          <Link href="/">
            <span className="flex items-center gap-1 text-teal-600 hover:text-teal-700 transition-colors font-medium cursor-pointer">
              <ChevronLeft className="w-4 h-4" />
              {t('nav.allGames')}
            </span>
          </Link>
          <span className="text-slate-300 dark:text-slate-600">/</span>
          <span className="text-slate-600 dark:text-slate-300 font-medium capitalize">
            {t(`category.${slug}` as any)}
          </span>
        </div>

        {/* Header */}
        <div className="mb-6 flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-900/40 flex items-center justify-center text-2xl shrink-0">
            {category.emoji}
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
              {t(`category.${slug}` as any)} Games
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              {games.length} games available
            </p>
          </div>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
          {games.map((game, i) => (
            <AnimatedCard key={game.slug} index={i % 10}>
              <TiltCard
                className="group relative h-full"
                onMouseEnter={() => prefetchGameUrl(game.iframeUrl)}
              >
                <Link href={`/play/${game.slug}/`} className="block h-full">
                  <div
                    className="relative overflow-hidden rounded-2xl bg-slate-900 ring-1 ring-slate-200 dark:ring-white/10
                      transition-all duration-300 ease-out
                      hover:ring-teal-400/50 dark:hover:ring-teal-500/40
                      hover:shadow-lg hover:shadow-teal-500/10 dark:hover:shadow-teal-500/20
                      h-full aspect-[3/4]"
                  >
                    <BlurImage
                      src={game.thumbnail}
                      alt={gt(game).title}
                      priority={i < 10}
                      aspectClass=""
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />

                    {/* Play overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-11 h-11 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center border border-white/20 shadow-xl scale-75 group-hover:scale-100 transition-transform duration-300">
                        <Play className="w-4 h-4 text-white fill-white ml-0.5" />
                      </div>
                    </div>

                    {/* New badge */}
                    {game.isNew && (
                      <div className="absolute top-2 left-2 z-10">
                        <span className="text-[8px] font-bold px-1.5 py-0.5 rounded-full bg-emerald-500 text-white shadow-sm">
                          {t('common.new').toUpperCase()}
                        </span>
                      </div>
                    )}

                    {/* Info overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <h3 className="font-bold text-white leading-tight mb-1 drop-shadow-md text-xs line-clamp-2">
                        {gt(game).title}
                      </h3>
                      {game.difficulty && (
                        <span
                          className={`text-[8px] font-semibold px-1 py-0.5 rounded-md border border-white/10 ${
                            game.difficulty === "easy"
                              ? "bg-green-500/20 text-green-300"
                              : game.difficulty === "medium"
                              ? "bg-amber-500/20 text-amber-300"
                              : "bg-red-500/20 text-red-300"
                          }`}
                        >
                          {t(`difficulty.${game.difficulty}` as any)}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>

                {/* Favourite button */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleFavourite(game.slug);
                  }}
                  className={`absolute top-2 right-2 z-20 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-200 shadow-sm ${
                    isFavourite(game.slug)
                      ? "bg-rose-500 text-white !opacity-100"
                      : "bg-black/30 backdrop-blur-sm text-white/70 hover:text-rose-400 border border-white/15 opacity-0 group-hover:opacity-100"
                  }`}
                  aria-label={
                    isFavourite(game.slug)
                      ? t('home.removeFromFavourites' as any)
                      : t('home.addToFavourites' as any)
                  }
                >
                  <Heart className={`w-3 h-3 ${isFavourite(game.slug) ? "fill-white" : ""}`} />
                </button>
              </TiltCard>
            </AnimatedCard>
          ))}
        </div>

        {/* Back link at the bottom */}
        <div className="mt-10 text-center">
          <Link href="/">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-600 text-white rounded-full text-sm font-medium hover:bg-teal-700 transition-colors cursor-pointer">
              <ChevronLeft className="w-4 h-4" />
              {t('nav.allGames')}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
