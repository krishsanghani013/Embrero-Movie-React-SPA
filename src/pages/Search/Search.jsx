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
  ];

  const filterOptions = ["All", "Action", "Adventure", "Sci-Fi", "Drama", "Animation", "Crime"];

  const filteredMovies = moviesData.filter((movie) => {
    const matchesQuery = query
      ? movie.title.toLowerCase().includes(query.toLowerCase()) ||
        movie.genre.toLowerCase().includes(query.toLowerCase())
      : true;
    const matchesFilter =
      activeFilter === "All" || movie.genre.toLowerCase() === activeFilter.toLowerCase();
    return matchesQuery && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-[#080808] pt-[106px] pb-16">
      <Navbar />

      <main className="max-w-7xl mx-auto p-4 sm:p-6">
        {/* Search & Filter Bar */}
        <div className="flex items-center gap-3 mb-5">
          <SearchBar
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onClear={() => setQuery("")}
            placeholder="Search for movie, actors ..."
          />

          <button
            type="button"
            className={`flex items-center justify-center gap-2 h-12 px-4 bg-[#1C1C1C] border rounded-xl text-xs sm:text-sm font-semibold shrink-0 transition-all ${
              showFilters
                ? "border-[#FF6B35] text-[#FF6B35] bg-[#FF6B35]/10"
                : "border-[#2A2A2A] text-[#D4D4D8] hover:border-[#FF6B35] hover:text-[#FF6B35]"
            }`}
            onClick={() => setShowFilters(!showFilters)}
            aria-label="Toggle filters"
            id="search-filter-btn"
          >
            <i className="fa-solid fa-sliders"></i>
            <span>Filter</span>
          </button>
        </div>

        {/* Filter Chips Panel */}
        {showFilters && (
          <div className="bg-[#1C1C1C] border border-[#2A2A2A] rounded-xl p-3.5 mb-5 flex flex-wrap gap-2">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                type="button"
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold cursor-pointer transition-all ${
                  activeFilter === filter
                    ? "bg-[#FF6B35] text-white"
                    : "bg-[#151515] text-[#A1A1AA] border border-[#222222] hover:bg-[#242424] hover:text-white"
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
          <h2 className="text-xs font-bold text-[#71717A] uppercase tracking-wider mb-2.5">
            Popular Searches
          </h2>
          <div className="flex flex-wrap gap-2">
            {popularSearches.map((term) => (
              <button
                key={term}
                type="button"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#1C1C1C] border border-[#2A2A2A] rounded-lg text-xs sm:text-sm text-[#D4D4D8] hover:border-[#FF6B35] hover:text-[#FF6B35] transition-all cursor-pointer"
                onClick={() => setQuery(term)}
              >
                <i className="fa-solid fa-arrow-trend-up text-[#71717A] text-[10px]"></i>
                <span>{term}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Search Results Grid */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base sm:text-xl font-bold text-white">Search Results</h2>
            <span className="text-xs text-[#A1A1AA]">
              Showing {filteredMovies.length} movies
            </span>
          </div>

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
        </section>
      </main>

      <BottomNav />
    </div>
  );
}

export default Search;
