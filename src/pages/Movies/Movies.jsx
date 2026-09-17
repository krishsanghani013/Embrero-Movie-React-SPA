import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import BottomNav from "../../components/BottomNav/BottomNav";
import MovieCard from "../../components/MovieCard/MovieCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import moviesData from "../../data/movies.json";

function Movies() {
  const [search, setSearch] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [selectedYear, setSelectedYear] = useState("All");
  const [selectedRating, setSelectedRating] = useState("All");
  const [sortBy, setSortBy] = useState("Rating");

  const filteredMovies = moviesData.filter((movie) => {
    const matchesSearch =
      movie.title.toLowerCase().includes(search.toLowerCase()) ||
      movie.genre.toLowerCase().includes(search.toLowerCase());
    const matchesGenre =
      selectedGenre === "All" ||
      movie.genre.toLowerCase() === selectedGenre.toLowerCase() ||
      movie.genres?.some((g) => g.toLowerCase() === selectedGenre.toLowerCase());
    const matchesYear =
      selectedYear === "All" || (movie.year && movie.year.toString() === selectedYear);
    const matchesRating =
      selectedRating === "All" || (movie.rating && parseFloat(movie.rating) >= parseFloat(selectedRating));

    return matchesSearch && matchesGenre && matchesYear && matchesRating;
  });

  const sortedMovies = [...filteredMovies].sort((a, b) => {
    if (sortBy === "Rating") return parseFloat(b.rating || 0) - parseFloat(a.rating || 0);
    if (sortBy === "Title") return a.title.localeCompare(b.title);
    if (sortBy === "Year") return parseInt(b.year || 0, 10) - parseInt(a.year || 0, 10);
    return 0;
  });

  return (
    <div className="min-h-screen bg-void pt-20 pb-24 md:pb-12 text-zinc-100">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white mb-1">Explore Movies</h1>
          <p className="text-xs sm:text-sm text-zinc-400">
            Browse our complete catalog of premiere releases, blockbusters, and classics.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col gap-3 bg-surface border border-border-default rounded-xl p-4 mb-6">
          <div className="w-full">
            <SearchBar
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onClear={() => setSearch("")}
              placeholder="Filter catalog by title or keyword..."
            />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            <div className="flex flex-col gap-1">
              <label htmlFor="genre-select" className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">
                Genre
              </label>
              <select
                id="genre-select"
                className="h-10 px-3 bg-charcoal border border-border-default rounded-lg text-xs text-zinc-300 outline-none cursor-pointer transition-colors"
                value={selectedGenre}
                onChange={(e) => setSelectedGenre(e.target.value)}
              >
                <option value="All">All Genres</option>
                <option value="Action">Action</option>
                <option value="Adventure">Adventure</option>
                <option value="Sci-Fi">Sci-Fi</option>
                <option value="Drama">Drama</option>
                <option value="Comedy">Comedy</option>
                <option value="Thriller">Thriller</option>
                <option value="Crime">Crime</option>
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="year-select" className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">
                Year
              </label>
              <select
                id="year-select"
                className="h-10 px-3 bg-charcoal border border-border-default rounded-lg text-xs text-zinc-300 outline-none cursor-pointer transition-colors"
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
              >
                <option value="All">All Years</option>
                <option value="2026">2026</option>
                <option value="2025">2025</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2020">2020 &amp; Older</option>
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="rating-select" className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">
                Rating
              </label>
              <select
                id="rating-select"
                className="h-10 px-3 bg-charcoal border border-border-default rounded-lg text-xs text-zinc-300 outline-none cursor-pointer transition-colors"
                value={selectedRating}
                onChange={(e) => setSelectedRating(e.target.value)}
              >
                <option value="All">All Ratings</option>
                <option value="8.0">8.0+ Stars</option>
                <option value="7.0">7.0+ Stars</option>
                <option value="6.0">6.0+ Stars</option>
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="sort-select" className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">
                Sort By
              </label>
              <select
                id="sort-select"
                className="h-10 px-3 bg-charcoal border border-border-default rounded-lg text-xs text-zinc-300 outline-none cursor-pointer transition-colors"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="Rating">Rating (High to Low)</option>
                <option value="Year">Release Year</option>
                <option value="Title">Title (A-Z)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Metadata */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs text-zinc-400">
            Showing {sortedMovies.length} {sortedMovies.length === 1 ? "movie" : "movies"}
          </span>

          {(search || selectedGenre !== "All" || selectedYear !== "All" || selectedRating !== "All") && (
            <button
              type="button"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-ember hover:underline cursor-pointer"
              onClick={() => {
                setSearch("");
                setSelectedGenre("All");
                setSelectedYear("All");
                setSelectedRating("All");
              }}
            >
              <i className="fa-solid fa-rotate-left text-[10px]"></i> Reset Filters
            </button>
          )}
        </div>

        {/* Movies Grid or Empty State */}
        {sortedMovies.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-5">
            {sortedMovies.map((movie) => (
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
        ) : (
          <div className="flex flex-col items-center justify-center text-center p-12 bg-charcoal border border-dashed border-border-strong rounded-2xl gap-3 my-6">
            <div className="w-16 h-16 rounded-full bg-ember/15 border border-ember/30 flex items-center justify-center text-ember text-2xl mb-1">
              <i className="fa-solid fa-filter-circle-xmark"></i>
            </div>
            <h3 className="text-lg font-bold text-white">No Movies Match Criteria</h3>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-sm leading-relaxed">
              Try broadening your filter criteria or clearing your search term to see more titles.
            </p>
            <button
              type="button"
              className="mt-2 inline-flex items-center gap-2 bg-ember hover:bg-ember-burnt text-white px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold shadow-[0_4px_16px_rgba(255,107,53,0.3)] transition-all cursor-pointer"
              onClick={() => {
                setSearch("");
                setSelectedGenre("All");
                setSelectedYear("All");
                setSelectedRating("All");
              }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </main>

      <BottomNav />
    </div>
  );
}

export default Movies;
