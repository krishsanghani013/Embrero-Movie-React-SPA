import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import BottomNav from "../../components/BottomNav/BottomNav";
import MovieRow from "../../components/MovieRow/MovieRow";
import {
  getTrendingMovies,
  getPopularMovies,
  getUpcomingMovies,
} from "../../services/tmdbApi";

function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    async function fetchMovies() {
      try {
        setLoading(true);
        setError("");

        const [trending, popular, upcoming] = await Promise.all([
          getTrendingMovies(),
          getPopularMovies(),
          getUpcomingMovies(),
        ]);

        setTrendingMovies(trending);
        setPopularMovies(popular);
        setUpcomingMovies(upcoming);
      } catch (err) {
        setError("Failed to load movies.");
      } finally {
        setLoading(false);
      }
    }

    fetchMovies();
  }, []);

  // Hero featured movies list from trending movies
  const heroMovies = trendingMovies.slice(0, 4);
  const currentHero = heroMovies[activeSlide] || heroMovies[0];

  const heroBackdrop = currentHero?.backdrop_path
    ? `https://image.tmdb.org/t/p/original${currentHero.backdrop_path}`
    : currentHero?.poster_path
    ? `https://image.tmdb.org/t/p/original${currentHero.poster_path}`
    : "";

  const heroRating = currentHero?.vote_average
    ? currentHero.vote_average.toFixed(1)
    : "";

  const heroYear = currentHero?.release_date
    ? currentHero.release_date.split("-")[0]
    : "2026";

  return (
    <div className="min-h-screen bg-void pb-24 md:pb-12 text-zinc-100">
      <Navbar />

      <main id="home-main">
        {loading ? (
          <div className="min-h-[70vh] flex flex-col items-center justify-center gap-3 text-center px-4">
            <div className="w-10 h-10 border-3 border-ember border-t-transparent rounded-full animate-spin"></div>
            <p className="text-zinc-300 text-base font-medium">Loading movies...</p>
          </div>
        ) : error ? (
          <div className="min-h-[70vh] flex flex-col items-center justify-center gap-3 text-center px-4">
            <i className="fa-solid fa-circle-exclamation text-3xl text-cherry"></i>
            <p className="text-zinc-300 text-base font-semibold">{error}</p>
          </div>
        ) : (
          <>
            {/* Hero Section */}
            {currentHero && (
              <section
                className="relative w-full min-h-105 sm:min-h-120 lg:min-h-140 flex items-end bg-noir bg-cover bg-center border-b border-border-subtle mt-14 transition-all duration-300"
                style={{
                  backgroundImage: heroBackdrop ? `url(${heroBackdrop})` : undefined,
                }}
              >
                <div className="absolute inset-0 bg-linear-to-b from-void/30 via-void/75 to-void"></div>

                <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12 flex flex-col gap-3 sm:gap-4">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-ember bg-ember/15 border border-ember/30 px-3 py-1 rounded-full self-start">
                    <i className="fa-solid fa-fire"></i> Featured Premiere
                  </span>

                  <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight max-w-2xl">
                    {currentHero?.title}
                  </h1>

                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-zinc-300">
                    {heroRating && (
                      <span className="text-amber-glow font-bold flex items-center gap-1">
                        <i className="fa-solid fa-star text-xs"></i> {heroRating} / 10
                      </span>
                    )}
                    {heroRating && <span className="text-zinc-500">•</span>}
                    <span>Trending</span>
                    <span className="text-zinc-500">•</span>
                    <span>{heroYear}</span>
                  </div>

                  {currentHero?.overview && (
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-2xl line-clamp-2 sm:line-clamp-3">
                      {currentHero.overview}
                    </p>
                  )}

                  <div className="flex items-center gap-3 mt-2">
                    <Link
                      to={`/movie/${currentHero?.id}`}
                      className="inline-flex items-center justify-center gap-2 bg-ember hover:bg-ember-burnt text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-[0_4px_16px_rgba(255,107,53,0.35)] hover:-translate-y-0.5 transition-all"
                      id="hero-watch-btn"
                    >
                      <i className="fa-solid fa-play text-xs"></i>
                      <span>Watch Now</span>
                    </Link>

                    <Link
                      to={`/movie/${currentHero?.id}`}
                      className="inline-flex items-center justify-center gap-2 bg-surface hover:bg-elevated border border-border-default hover:border-ember text-zinc-300 hover:text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all"
                      id="hero-info-btn"
                    >
                      <i className="fa-solid fa-circle-info text-xs"></i>
                      <span>More Info</span>
                    </Link>
                  </div>

                  {/* Slider Indicators */}
                  {heroMovies.length > 1 && (
                    <div className="flex items-center gap-2 mt-2" aria-label="Hero carousel pagination">
                      {heroMovies.map((item, idx) => (
                        <button
                          key={item.id}
                          type="button"
                          className={`h-1.5 rounded-full transition-all cursor-pointer ${
                            activeSlide === idx
                              ? "w-7 bg-ember shadow-[0_0_8px_rgba(255,107,53,0.7)]"
                              : "w-1.5 bg-white/30 hover:bg-white/60"
                          }`}
                          onClick={() => setActiveSlide(idx)}
                          aria-label={`Go to slide ${idx + 1}`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* Movie Sections Matching Wireframe */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
              <MovieRow
                title="Trending Movies"
                badge="🔥 Hot"
                seeAllLink="/movies"
                movies={trendingMovies}
              />

              <MovieRow
                title="Popular Movies"
                seeAllLink="/movies"
                movies={popularMovies}
              />

              <MovieRow
                title="Upcoming Movies"
                badge="Soon"
                seeAllLink="/movies"
                movies={upcomingMovies}
              />
            </div>
          </>
        )}
      </main>

      <BottomNav />
    </div>
  );
}

export default Home;
