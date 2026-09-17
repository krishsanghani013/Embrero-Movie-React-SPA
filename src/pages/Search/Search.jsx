import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import BottomNav from "../../components/BottomNav/BottomNav";
import SearchBar from "../../components/SearchBar/SearchBar";
import MovieCard from "../../components/MovieCard/MovieCard";
import moviesData from "../../data/movies.json";

function Search() {
  const [query, setQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");

  const popularSearches = [
    "Spider-Man",
    "Dhurandhar",
    "Inception",
    "Interstellar",
    "The Dark Knight",
    "Action",
    "Sci-Fi",
  ];

  const filterOptions = ["All", "Action", "Adventure", "Sci-Fi", "Drama", "Animation", "Crime", "Comedy"];

  const filteredMovies = moviesData.filter((movie) => {
    const matchesQuery = query
      ? movie.title.toLowerCase().includes(query.toLowerCase()) ||
        movie.genre.toLowerCase().includes(query.toLowerCase())
      : true;
    const matchesFilter =
      activeFilter === "All" ||
      movie.genre.toLowerCase() === activeFilter.toLowerCase() ||
      movie.genres?.some((g) => g.toLowerCase() === activeFilter.toLowerCase());
    return matchesQuery && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-void pt-20 pb-24 md:pb-12 text-zinc-100">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white mb-1">Search &amp; Discover</h1>
          <p className="text-xs sm:text-sm text-zinc-400">
            Find movies by title, actors, directors, or curated categories.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex items-center gap-3 mb-5">
          <div className="flex-1">
            <SearchBar
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onClear={() => setQuery("")}
              placeholder="Search for movie titles, actors, genres..."
            />
          </div>

          <button
            type="button"
            className={`inline-flex items-center justify-center gap-2 h-12 px-4 rounded-xl text-xs sm:text-sm font-semibold shrink-0 transition-all cursor-pointer ${
              showFilters
                ? "bg-ember/15 border border-ember text-ember"
                : "bg-surface border border-border-default text-zinc-300 hover:border-ember hover:text-ember"
            }`}
            onClick={() => setShowFilters(!showFilters)}
            aria-label="Toggle filters"
            id="search-filter-btn"
          >
            <i className="fa-solid fa-sliders"></i>
            <span>Filters</span>
          </button>
        </div>

        {/* Filter Chips Panel */}
        {showFilters && (
          <div className="bg-surface border border-border-default rounded-xl p-3.5 mb-6 flex flex-wrap gap-2 animate-fadeIn">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                type="button"
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold cursor-pointer transition-all ${
                  activeFilter === filter
                    ? "bg-ember text-white shadow-[0_0_10px_rgba(255,107,53,0.4)]"
                    : "bg-charcoal border border-border-subtle text-zinc-400 hover:bg-elevated hover:text-white"
                }`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        )}

        {/* Popular Searches */}
        <section className="mb-7">
          <h2 className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
            <i className="fa-solid fa-fire text-ember"></i> Popular Searches
          </h2>
          <div className="flex flex-wrap gap-2">
            {popularSearches.map((term) => (
              <button
                key={term}
                type="button"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-surface border border-border-default rounded-lg text-xs sm:text-sm text-zinc-300 hover:border-ember hover:text-ember hover:-translate-y-0.5 transition-all cursor-pointer"
                onClick={() => setQuery(term)}
              >
                <i className="fa-solid fa-arrow-trend-up text-[10px] text-zinc-500"></i>
                <span>{term}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Search Results Grid or Empty / No-Results States */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base sm:text-lg font-bold text-white">
              {query ? `Results for "${query}"` : "Browse Movies"}
            </h2>
            <span className="text-xs text-zinc-400">
              Showing {filteredMovies.length} {filteredMovies.length === 1 ? "movie" : "movies"}
            </span>
          </div>

          {filteredMovies.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-5">
              {filteredMovies.map((movie) => (
                <MovieCard
                  key={movie.id}
                  id={movie.id}
                  image={movie.image}
                  title={movie.title}
                  genre={movie.genre}
                  rating={movie.rating}
                  year={movie.year}
                />
              ))}
            </div>
          ) : query ? (
            /* No Results State */
            <div className="flex flex-col items-center justify-center text-center p-12 bg-charcoal border border-dashed border-border-strong rounded-2xl gap-3 my-6">
              <div className="w-16 h-16 rounded-full bg-ember/15 border border-ember/30 flex items-center justify-center text-ember text-2xl mb-1">
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
              <h3 className="text-lg font-bold text-white">No Movies Found</h3>
              <p className="text-xs sm:text-sm text-zinc-400 max-w-sm leading-relaxed">
                We couldn&apos;t find any matches for &quot;<span className="text-ember font-bold">{query}</span>&quot;. Try checking for spelling errors or searching for a different keyword or genre.
              </p>
              <button
                type="button"
                className="mt-2 inline-flex items-center gap-2 bg-ember hover:bg-ember-burnt text-white px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold shadow-[0_4px_16px_rgba(255,107,53,0.3)] transition-all cursor-pointer"
                onClick={() => {
                  setQuery("");
                  setActiveFilter("All");
                }}
              >
                <i className="fa-solid fa-rotate-left text-xs"></i>
                <span>Clear Search &amp; Filters</span>
              </button>
            </div>
          ) : (
            /* Empty Filter State */
            <div className="flex flex-col items-center justify-center text-center p-12 bg-charcoal border border-dashed border-border-strong rounded-2xl gap-3 my-6">
              <div className="w-16 h-16 rounded-full bg-ember/15 border border-ember/30 flex items-center justify-center text-ember text-2xl mb-1">
                <i className="fa-solid fa-film"></i>
              </div>
              <h3 className="text-lg font-bold text-white">No Titles in this Category</h3>
              <p className="text-xs sm:text-sm text-zinc-400 max-w-sm leading-relaxed">
                There are currently no titles matching the selected filter. Try selecting &quot;All&quot; to see the entire collection.
              </p>
              <button
                type="button"
                className="mt-2 inline-flex items-center gap-2 bg-surface hover:bg-elevated border border-border-default text-white px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer"
                onClick={() => setActiveFilter("All")}
              >
                <span>Reset Filter</span>
              </button>
            </div>
          )}
        </section>
      </main>

      <BottomNav />
    </div>
  );
}

export default Search;
