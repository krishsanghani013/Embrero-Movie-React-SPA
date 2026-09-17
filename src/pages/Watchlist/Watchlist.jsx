import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import BottomNav from "../../components/BottomNav/BottomNav";
import SearchBar from "../../components/SearchBar/SearchBar";
import moviesData from "../../data/movies.json";

function Watchlist() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("Recently Added");
  const [watchlistItems, setWatchlistItems] = useState(moviesData.slice(0, 5));

  const handleRemove = (id) => {
    setWatchlistItems((prev) => prev.filter((item) => item.id !== id));
  };

  const filteredItems = watchlistItems.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#080808] pt-[106px] pb-16">
      <Navbar />

      <main className="max-w-4xl mx-auto p-4 sm:p-6">
        {/* Watchlist Header */}
        <div className="flex items-center justify-between mb-5">
          <h1 className="text-xl sm:text-2xl font-extrabold text-white">My Watchlist</h1>
          <button
            type="button"
            className="text-xs sm:text-sm font-semibold text-[#FF6B35] px-3.5 py-1.5 rounded-lg bg-[#FF6B35]/10 border border-[#FF6B35]/30 hover:bg-[#FF6B35] hover:text-white transition-all cursor-pointer"
            id="watchlist-edit-btn"
          >
            Edit
          </button>
        </div>

        {/* Search & Sort Controls */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-6">
          <div className="flex-1">
            <SearchBar
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onClear={() => setSearchTerm("")}
              placeholder="Search in watchlist..."
            />
          </div>

          <select
            className="h-12 bg-[#1C1C1C] border border-[#2A2A2A] rounded-xl text-[#D4D4D8] text-xs sm:text-sm font-medium px-4 outline-none cursor-pointer focus:border-[#FF6B35]"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            aria-label="Sort watchlist"
          >
            <option value="Recently Added">Sort by: Recently Added</option>
            <option value="Rating High to Low">Sort by: Rating (High to Low)</option>
            <option value="Release Year">Sort by: Release Year</option>
            <option value="Title A-Z">Sort by: Title (A-Z)</option>
          </select>
        </div>

        {/* Movie List */}
        <div className="flex flex-col gap-3.5 mb-8">
          {filteredItems.map((movie) => (
            <div
              key={movie.id}
              className="flex gap-3.5 bg-[#1C1C1C] border border-[#2A2A2A] rounded-xl p-3 sm:p-3.5 transition-all hover:bg-[#242424] hover:border-[#3A3A3A]"
            >
              <Link to={`/movie/${movie.id}`} className="w-20 sm:w-24 aspect-[2/3] rounded-lg overflow-hidden shrink-0 bg-[#151515]">
                <img src={movie.image} alt={movie.title} className="w-full h-full object-cover" />
              </Link>

              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="text-sm sm:text-base font-bold text-white">{movie.title}</h2>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-[#A1A1AA] mt-1">
                    <span className="text-[#FFB000] font-bold flex items-center gap-1">
                      <i className="fa-solid fa-star text-[10px]"></i> {movie.rating}
                    </span>
                    <span>•</span>
                    <span>{movie.year || "2026"}</span>
                    <span>•</span>
                    <span>{movie.runtime || "2h 15m"}</span>
                    <span>•</span>
                    <span>{movie.genre}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 mt-2.5">
                  <Link
                    to={`/movie/${movie.id}`}
                    className="inline-flex items-center gap-1.5 bg-[#FF6B35] hover:bg-[#E85D04] text-white px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all"
                  >
                    <i className="fa-solid fa-play text-[9px]"></i>
                    <span>Watch Now</span>
                  </Link>

                  <button
                    type="button"
                    className="inline-flex items-center gap-1.5 bg-[#C1121F]/10 hover:bg-[#C1121F] text-[#C1121F] hover:text-white border border-[#C1121F]/30 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer"
                    onClick={() => handleRemove(movie.id)}
                    aria-label={`Remove ${movie.title} from watchlist`}
                  >
                    <i className="fa-regular fa-trash-can"></i>
                    <span>Remove</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* End of list message matching wireframe */}
        <div className="text-center p-8 bg-[#151515] border border-dashed border-[#3A3A3A] rounded-2xl flex flex-col items-center gap-2.5">
          <i className="fa-solid fa-clapperboard text-3xl text-[#71717A]"></i>
          <h3 className="text-base font-bold text-white">No more movies in your watchlist.</h3>
          <p className="text-xs sm:text-sm text-[#A1A1AA] max-w-sm">
            Explore and add more movies to never run out of great stories to watch!
          </p>
          <Link
            to="/movies"
            className="mt-2 inline-flex items-center gap-2 px-5 py-2.5 bg-[#FF6B35] hover:bg-[#E85D04] text-white rounded-lg text-xs sm:text-sm font-bold transition-all"
          >
            <span>Explore Movies</span>
            <i className="fa-solid fa-arrow-right text-xs"></i>
          </Link>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}

export default Watchlist;
