import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import BottomNav from "../../components/BottomNav/BottomNav";
import SearchBar from "../../components/SearchBar/SearchBar";
import MovieCard from "../../components/MovieCard/MovieCard";
import moviesData from "../../data/movies.json";

function Watchlist() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("Recently Added");
  const [viewMode, setViewMode] = useState("grid"); // 'grid' | 'list'
  const [watchlistItems, setWatchlistItems] = useState(moviesData.slice(0, 6));

  const handleRemove = (id) => {
    setWatchlistItems((prev) => prev.filter((item) => item.id !== id));
  };

  const filteredItems = watchlistItems.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    movie.genre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedItems = [...filteredItems].sort((a, b) => {
    if (sortOption === "Rating High to Low") return parseFloat(b.rating || 0) - parseFloat(a.rating || 0);
    if (sortOption === "Release Year") return parseInt(b.year || 0, 10) - parseInt(a.year || 0, 10);
    if (sortOption === "Title A-Z") return a.title.localeCompare(b.title);
    return 0; // Recently Added default
  });

  return (
    <div className="min-h-screen bg-void pt-20 pb-24 md:pb-12 text-zinc-100">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Watchlist Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">My Watchlist</h1>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
              Keep track of titles you want to watch next.
            </p>
          </div>

          {watchlistItems.length > 0 && (
            <button
              type="button"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-ember bg-ember/15 border border-ember/30 px-3.5 py-1.5 rounded-full hover:bg-ember hover:text-white transition-all cursor-pointer"
              onClick={() => setWatchlistItems([])}
            >
              <i className="fa-solid fa-trash-can text-[10px]"></i> Clear All
            </button>
          )}
        </div>

        {/* Search, Sort & View Controls */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-6">
          <div className="flex-1">
            <SearchBar
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onClear={() => setSearchTerm("")}
              placeholder="Search in your watchlist..."
            />
          </div>

          <div className="flex items-center gap-2.5">
            <select
              className="h-12 bg-surface border border-border-default rounded-xl text-xs sm:text-sm text-zinc-300 font-medium px-4 outline-none cursor-pointer transition-colors"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              aria-label="Sort watchlist"
            >
              <option value="Recently Added">Sort by: Recently Added</option>
              <option value="Rating High to Low">Sort by: Rating (High to Low)</option>
              <option value="Release Year">Sort by: Release Year</option>
              <option value="Title A-Z">Sort by: Title (A-Z)</option>
            </select>

            <div className="flex items-center h-12 bg-surface border border-border-default rounded-xl p-1 gap-1">
              <button
                type="button"
                className={`w-9 h-9 flex items-center justify-center rounded-lg text-sm transition-all cursor-pointer ${
                  viewMode === "grid" ? "bg-charcoal text-ember" : "text-zinc-500 hover:text-white"
                }`}
                onClick={() => setViewMode("grid")}
                aria-label="Grid view"
              >
                <i className="fa-solid fa-grip"></i>
              </button>
              <button
                type="button"
                className={`w-9 h-9 flex items-center justify-center rounded-lg text-sm transition-all cursor-pointer ${
                  viewMode === "list" ? "bg-charcoal text-ember" : "text-zinc-500 hover:text-white"
                }`}
                onClick={() => setViewMode("list")}
                aria-label="List view"
              >
                <i className="fa-solid fa-list"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Content Section: Grid View or List View or Empty State */}
        {sortedItems.length > 0 ? (
          viewMode === "grid" ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-5">
              {sortedItems.map((movie) => (
                <div key={movie.id} className="relative group">
                  <MovieCard
                    id={movie.id}
                    image={movie.image}
                    title={movie.title}
                    genre={movie.genre}
                    rating={movie.rating}
                    year={movie.year}
                  />
                  <button
                    type="button"
                    className="absolute top-2 left-2 z-10 w-7 h-7 flex items-center justify-center rounded-lg bg-cherry/85 text-white hover:bg-cherry shadow-md transition-all text-xs cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      handleRemove(movie.id);
                    }}
                    title="Remove from watchlist"
                    aria-label={`Remove ${movie.title}`}
                  >
                    <i className="fa-solid fa-xmark"></i>
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              {sortedItems.map((movie) => (
                <div
                  key={movie.id}
                  className="flex gap-4 bg-surface border border-border-default rounded-xl p-3.5 transition-all hover:border-ember hover:bg-elevated"
                >
                  <Link to={`/movie/${movie.id}`} className="w-20 sm:w-24 aspect-2/3 rounded-lg overflow-hidden shrink-0 bg-charcoal">
                    <img src={movie.image} alt={movie.title} className="w-full h-full object-cover" />
                  </Link>

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h2 className="text-sm sm:text-base font-bold text-white">{movie.title}</h2>
                      <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-400 mt-1">
                        <span className="text-amber-glow font-bold">⭐ {movie.rating}</span>
                        <span>•</span>
                        <span>{movie.year || "2026"}</span>
                        <span>•</span>
                        <span>{movie.runtime || "2h 15m"}</span>
                        <span>•</span>
                        <span>{movie.genre}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5 mt-3">
                      <Link
                        to={`/movie/${movie.id}`}
                        className="inline-flex items-center gap-1.5 bg-ember hover:bg-ember-burnt text-white px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all"
                      >
                        <i className="fa-solid fa-play text-[9px]"></i> Watch Now
                      </Link>

                      <button
                        type="button"
                        className="inline-flex items-center gap-1.5 bg-cherry/15 hover:bg-cherry text-cherry hover:text-white border border-cherry/30 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer"
                        onClick={() => handleRemove(movie.id)}
                      >
                        <i className="fa-regular fa-trash-can text-xs"></i> Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )
        ) : (
          /* Empty Watchlist State */
          <div className="flex flex-col items-center justify-center text-center p-12 bg-charcoal border border-dashed border-border-strong rounded-2xl gap-3 my-6">
            <div className="w-16 h-16 rounded-full bg-ember/15 border border-ember/30 flex items-center justify-center text-ember text-2xl mb-1">
              <i className="fa-solid fa-clapperboard"></i>
            </div>
            <h3 className="text-lg font-bold text-white">Your Watchlist is Empty</h3>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-sm leading-relaxed">
              You haven&apos;t saved any movies to your watchlist yet. Browse trending titles, discoveries, and genres to start building your personal watchlist!
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
              <Link
                to="/movies"
                className="inline-flex items-center gap-2 bg-ember hover:bg-ember-burnt text-white px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold shadow-[0_4px_16px_rgba(255,107,53,0.3)] transition-all"
              >
                <span>Explore Movies</span>
                <i className="fa-solid fa-arrow-right text-xs"></i>
              </Link>
              <button
                type="button"
                className="inline-flex items-center gap-2 bg-surface hover:bg-elevated border border-border-default text-white px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer"
                onClick={() => setWatchlistItems(moviesData.slice(0, 6))}
              >
                <span>Reset Demo Watchlist</span>
              </button>
            </div>
          </div>
        )}
      </main>

      <BottomNav />
    </div>
  );
}

export default Watchlist;
