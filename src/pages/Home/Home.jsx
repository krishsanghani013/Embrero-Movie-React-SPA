import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import BottomNav from "../../components/BottomNav/BottomNav";
import MovieRow from "../../components/MovieRow/MovieRow";
import moviesData from "../../data/movies.json";

function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  // Hero featured movies list from mock data
  const heroMovies = moviesData.slice(0, 4);
  const currentHero = heroMovies[activeSlide] || heroMovies[0];

  // Movie rows data slices
  const trendingMovies = moviesData.slice(0, 8);
  const popularMovies = moviesData.slice(4, 12);
  const upcomingMovies = moviesData.slice(8, 16);

  return (
    <div className="min-h-screen bg-[#080808] pb-16">
      <Navbar />

      <main id="home-main">
        {/* Hero Section */}
        <section
          className="relative w-full min-h-[380px] md:min-h-[500px] flex items-end bg-[#0D0D0D] bg-cover bg-center border-b border-[#222222] mt-[98px]"
          style={{
            backgroundImage: `url(${currentHero?.backdrop || currentHero?.image})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/75 to-[#080808]/30"></div>

          <div className="relative z-10 max-w-7xl mx-auto w-full p-4 sm:p-6 md:p-8 flex flex-col gap-3 md:gap-4">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#FF6B35] bg-[#FF6B35]/15 border border-[#FF6B35]/30 px-2.5 py-1 rounded-full self-start">
              <i className="fa-solid fa-fire"></i> Featured Premiere
            </span>

            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white leading-tight tracking-tight max-w-2xl">
              {currentHero?.title}
            </h1>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-[#D4D4D8]">
              <span className="text-[#FFB000] font-bold flex items-center gap-1">
                <i className="fa-solid fa-star text-xs"></i> {currentHero?.rating} / 10
              </span>
              <span className="text-[#71717A]">•</span>
              <span>{currentHero?.genre}</span>
              <span className="text-[#71717A]">•</span>
              <span>{currentHero?.year || "2026"}</span>
              <span className="text-[#71717A]">•</span>
              <span>{currentHero?.runtime || "2h 15m"}</span>
            </div>

            <div className="flex items-center gap-3 mt-1.5">
              <Link
                to={`/movie/${currentHero?.id}`}
                className="inline-flex items-center justify-center gap-2 bg-[#FF6B35] hover:bg-[#E85D04] text-white px-5 py-2.5 rounded-lg text-sm font-bold shadow-[0_4px_16px_rgba(255,107,53,0.3)] transition-all hover:-translate-y-0.5"
                id="hero-watch-btn"
              >
                <i className="fa-solid fa-play text-xs"></i>
                <span>Watch Now</span>
              </Link>

              <Link
                to={`/movie/${currentHero?.id}`}
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 border border-[#3A3A3A] hover:border-[#FF6B35] text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all"
                id="hero-info-btn"
              >
                <i className="fa-solid fa-circle-info text-xs"></i>
                <span>More Info</span>
              </Link>
            </div>

            {/* Slider Indicators */}
            <div className="flex items-center gap-2 mt-3">
              {heroMovies.map((item, idx) => (
                <button
                  key={item.id}
                  type="button"
                  className={`h-2 transition-all rounded-full cursor-pointer ${
                    activeSlide === idx ? "w-6 bg-[#FF6B35]" : "w-2 bg-white/30 hover:bg-white/50"
                  }`}
                  onClick={() => setActiveSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Movie Sections Matching Wireframe */}
        <div className="max-w-7xl mx-auto p-4 sm:p-6 md:p-8">
          <MovieRow
            title="Trending Now"
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
      </main>

      <BottomNav />
    </div>
  );
}

export default Home;
