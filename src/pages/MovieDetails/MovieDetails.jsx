import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import BottomNav from "../../components/BottomNav/BottomNav";
import MovieRow from "../../components/MovieRow/MovieRow";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import moviesData from "../../data/movies.json";

function MovieDetails() {
  const { movieId, id } = useParams();
  const currentId = parseInt(movieId || id, 10) || 1;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentId]);

  const movie = moviesData.find((m) => m.id === currentId) || moviesData[0];

  const [inWatchlist, setInWatchlist] = useState(false);
  const [toastMsg, setToastMsg] = useState("");

  const showToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(""), 3000);
  };

  const handleWatchlistToggle = () => {
    setInWatchlist(!inWatchlist);
    showToast(
      !inWatchlist
        ? `Added "${movie.title}" to Watchlist!`
        : `Removed "${movie.title}" from Watchlist`
    );
  };

  const castList = movie.cast || [
    { name: "Tom Holland", role: "Peter Parker", image: "https://media.themoviedb.org/t/p/w132_and_h132_face/xKBAaPIa1c7tzZD3Y0MhBLv4hPE.jpg" },
    { name: "Sadie Sink", role: "Jean Grey", image: "https://media.themoviedb.org/t/p/w132_and_h132_face/92FddzBfK50XOUbtwjqHPraoGHy.jpg" },
    { name: "Tramell Tillman", role: "William Metzger", image: "https://media.themoviedb.org/t/p/w132_and_h132_face/bEA15zMnkcXlRroYjKrFUWiiK7y.jpg" },
    { name: "Zendaya", role: "Michelle Jones", image: "https://media.themoviedb.org/t/p/w132_and_h132_face/rBtEEt2slgeWkc26OniMmZmsvaA.jpg" },
    { name: "Jacob Batalon", role: "Ned Leeds", image: "https://media.themoviedb.org/t/p/w132_and_h132_face/yX5nFz1yvW8s24p5qF9LwT6qjX2.jpg" },
  ];

  const similarMovies = moviesData
    .filter((m) => m.id !== movie.id && (m.genre === movie.genre || m.genres?.includes(movie.genre)))
    .slice(0, 8);

  const fallbackSimilar = similarMovies.length > 0 ? similarMovies : moviesData.slice(1, 9);
  const ratingsBreakdown = movie.ratingsBreakdown || { "5": 82, "4": 12, "3": 4, "2": 1, "1": 1 };

  return (
    <div className="min-h-screen bg-void pb-24 md:pb-12 text-zinc-100">
      <Navbar />

      <main>
        {/* Large Movie Hero Section */}
        <section
          className="relative w-full min-h-110 sm:min-h-125 lg:min-h-135 bg-cover bg-center mt-14 border-b border-border-subtle flex items-end"
          style={{
            backgroundImage: `url(${movie.backdrop || movie.image})`,
          }}
        >
          <div className="absolute inset-0 bg-linear-to-b from-void/30 via-void/80 to-void"></div>

          <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-10 flex flex-col sm:flex-row items-start sm:items-end gap-5 sm:gap-8">
            <div className="w-32 sm:w-44 md:w-52 aspect-2/3 rounded-xl overflow-hidden border-2 border-border-strong shadow-2xl shrink-0 bg-charcoal">
              <img
                src={movie.image}
                alt={movie.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 flex flex-col gap-2.5">
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                {movie.title}
              </h1>
              {movie.tagline && <p className="text-xs sm:text-sm italic text-ember font-medium">{movie.tagline}</p>}

              <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 text-xs text-zinc-300">
                <div className="flex items-center gap-1 text-amber-glow font-bold text-sm">
                  <i className="fa-solid fa-star text-xs"></i>
                  <span>{movie.rating} / 10</span>
                </div>
                <span className="px-2.5 py-1 bg-surface border border-border-default rounded-full text-xs">
                  {movie.genre}
                </span>
                <span className="px-2.5 py-1 bg-surface border border-border-default rounded-full text-xs">
                  {movie.year || "2026"}
                </span>
                <span className="px-2.5 py-1 bg-surface border border-border-default rounded-full text-xs">
                  {movie.runtime || "2h 15m"}
                </span>
                <span className="px-2.5 py-1 bg-surface border border-border-default rounded-full text-xs">
                  {movie.language || "English"}
                </span>
              </div>

              <p className="text-xs sm:text-sm leading-relaxed text-zinc-400 max-w-3xl mt-1">
                {movie.overview}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 mt-3">
                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-2 bg-ember hover:bg-ember-burnt text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-[0_4px_16px_rgba(255,107,53,0.35)] transition-all cursor-pointer"
                  onClick={() => showToast(`Playing "${movie.title}"...`)}
                  id="details-watch-now"
                >
                  <i className="fa-solid fa-play text-xs"></i>
                  <span>Watch Now</span>
                </button>

                <button
                  type="button"
                  className={`inline-flex items-center justify-center gap-2 bg-surface hover:bg-elevated border border-border-default hover:border-ember px-5 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                    inWatchlist ? "text-ember border-ember" : "text-zinc-300"
                  }`}
                  onClick={handleWatchlistToggle}
                  id="details-add-watchlist"
                >
                  <i className={inWatchlist ? "fa-solid fa-bookmark" : "fa-regular fa-bookmark"}></i>
                  <span>{inWatchlist ? "In Watchlist" : "Add to Watchlist"}</span>
                </button>

                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-2 bg-surface hover:bg-elevated border border-border-default hover:border-ember text-zinc-300 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer"
                  onClick={() => showToast("Opening trailer preview...")}
                >
                  <i className="fa-solid fa-film"></i>
                  <span>Trailer</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Content Sections */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-8">
          {/* Movie Information Grid */}
          <section>
            <SectionHeader title="Movie Details &amp; Production" seeAllLink={null} />
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 bg-surface border border-border-default rounded-xl p-4 sm:p-5">
              <div className="flex flex-col gap-0.5">
                <span className="text-[10px] sm:text-[11px] font-bold text-zinc-500 uppercase tracking-wider">Director</span>
                <span className="text-xs sm:text-sm font-semibold text-white">{movie.director || "Destin Daniel Cretton"}</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[10px] sm:text-[11px] font-bold text-zinc-500 uppercase tracking-wider">Budget</span>
                <span className="text-xs sm:text-sm font-semibold text-white">{movie.budget || "$200 Million"}</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[10px] sm:text-[11px] font-bold text-zinc-500 uppercase tracking-wider">Status</span>
                <span className="text-xs sm:text-sm font-semibold text-white">{movie.status || "Released"}</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[10px] sm:text-[11px] font-bold text-zinc-500 uppercase tracking-wider">Release Date</span>
                <span className="text-xs sm:text-sm font-semibold text-white">{movie.releaseDate || "2026"}</span>
              </div>
              <div className="flex flex-col gap-0.5 col-span-2">
                <span className="text-[10px] sm:text-[11px] font-bold text-zinc-500 uppercase tracking-wider">Production Company</span>
                <span className="text-xs sm:text-sm font-semibold text-white">{movie.production || "Embrero Studios, Marvel Entertainment"}</span>
              </div>
              <div className="flex flex-col gap-0.5 col-span-2">
                <span className="text-[10px] sm:text-[11px] font-bold text-zinc-500 uppercase tracking-wider">Genres</span>
                <span className="text-xs sm:text-sm font-semibold text-white">
                  {movie.genres ? movie.genres.join(", ") : movie.genre}
                </span>
              </div>
            </div>
          </section>

          {/* Ratings Breakdown */}
          <section>
            <SectionHeader title="Audience Rating Breakdown" seeAllLink={null} />
            <div className="bg-surface border border-border-default rounded-xl p-4 sm:p-5">
              {Object.entries(ratingsBreakdown)
                .reverse()
                .map(([star, pct]) => (
                  <div key={star} className="flex items-center gap-3 mb-2.5">
                    <span className="text-xs text-zinc-400 w-12 shrink-0">{star} Stars</span>
                    <div className="flex-1 h-2 bg-charcoal rounded-full overflow-hidden">
                      <div
                        className="h-full bg-linear-to-r from-amber-glow to-ember rounded-full"
                        style={{ width: `${pct}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-zinc-500 w-9 text-right shrink-0">{pct}%</span>
                  </div>
                ))}
            </div>
          </section>

          {/* Cast Section */}
          <section>
            <SectionHeader title="Top Billed Cast" seeAllLink={null} />
            <div className="flex gap-3 sm:gap-4 overflow-x-auto pb-3 scrollbar-hide">
              {castList.map((actor, idx) => (
                <div
                  key={idx}
                  className="shrink-0 w-28 sm:w-32 bg-surface border border-border-default rounded-xl p-3 flex flex-col items-center text-center gap-2 transition-all hover:border-ember hover:-translate-y-1"
                >
                  <img
                    src={actor.image || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&auto=format&fit=crop&q=80"}
                    alt={actor.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-border-default bg-charcoal"
                  />
                  <span className="text-xs font-bold text-white leading-tight line-clamp-1">{actor.name}</span>
                  <span className="text-[10px] text-zinc-500 leading-tight line-clamp-1">{actor.role}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Similar Movies */}
          <MovieRow
            title="Similar Movies"
            badge="Recommended"
            seeAllLink="/movies"
            movies={fallbackSimilar}
          />
        </div>
      </main>

      {/* Interactive Visual Toast */}
      {toastMsg && (
        <div className="fixed bottom-20 md:bottom-8 right-6 z-50 bg-surface border border-ember text-white px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2.5 text-xs sm:text-sm font-semibold animate-bounce">
          <i className="fa-solid fa-circle-check text-ember"></i>
          <span>{toastMsg}</span>
        </div>
      )}

      <BottomNav />
    </div>
  );
}

export default MovieDetails;
