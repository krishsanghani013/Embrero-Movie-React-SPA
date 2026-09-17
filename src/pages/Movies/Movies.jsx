import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import BottomNav from "../../components/BottomNav/BottomNav";
import MovieCard from "../../components/MovieCard/MovieCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import moviesData from "../../data/movies.json";

function Movies() {
  const [search, setSearch] = useState("");

  const filteredMovies = moviesData.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase()) ||
    movie.genre.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#080808] pt-[106px] pb-16">
      <Navbar />

      <main className="max-w-7xl mx-auto p-4 sm:p-6">
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">Explore Movies</h1>
          <p className="text-xs sm:text-sm text-[#A1A1AA] mt-1">
            Browse our complete catalog of trending releases, blockbusters, and classics.
          </p>
        </div>

        <div className="mb-6">
          <SearchBar
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onClear={() => setSearch("")}
            placeholder="Filter catalog by title or genre..."
          />
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
      </main>

      <BottomNav />
    </div>
  );
}

export default Movies;
