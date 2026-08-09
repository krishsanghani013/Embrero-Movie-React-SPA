import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import moviesData from "../data/movies.json";

function PopularMovies() {
    return (
        <section
            id="popular-section"
            className="py-14"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* header */}
                <div className="flex items-center justify-between mb-8">

                    <div className="flex items-center gap-3">

                        <div className="w-1.5 h-7 bg-[#FFB000] rounded-full"></div>

                        <h2 className="text-[22px] sm:text-[26px] font-bold text-[#F5F5F5]">
                            Popular Movies
                        </h2>

                        <span className="hidden sm:inline-flex items-center px-2.5 py-1 text-[10px] font-bold bg-[#FFB0001A] text-[#FFB000] rounded-full">
                            📈 TRENDING
                        </span>

                    </div>

                    <Link
                        to="/movies"
                        className="text-sm font-semibold text-[#71717A] hover:text-[#FF6B35]"
                    >
                        View All
                    </Link>

                </div>

                {/* cards */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">

                    {moviesData.slice(0, 5).map((movie) => (
                        <MovieCard
                            key={movie.id}
                            image={movie.image}
                            title={movie.title}
                            genre={movie.genre}
                            rating={movie.rating}
                        />
                    ))}

                </div>

            </div>
        </section>
    );
}

export default PopularMovies;