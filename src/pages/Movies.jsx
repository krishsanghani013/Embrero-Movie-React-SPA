import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MovieCard from "../components/MovieCard";
import moviesData from "../data/movies.json";

function Movies() {
    return (
        <>
            <Navbar />

            <main className="pt-20 pb-8 bg-[#080808] min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="mb-8 animate-fade-in">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-1.5 h-8 bg-[#FF6B35] rounded-full"></div>
                            <h1 className="text-[32px] sm:text-[40px] font-black tracking-tight text-[#F5F5F5]">
                                Search <span className="text-[#FF6B35]">Movies</span>
                            </h1>
                        </div>
                        <p className="text-[#A1A1AA] text-base ml-[18px]">Find movies by title, genre, year, or rating</p>
                    </div>

                    {/* search bar */}
                    <div className="mb-6 animate-slide-up" id="search-section">
                        <div
                            className="flex rounded-[16px] overflow-hidden bg-[#151515] border border-[#2A2A2A] shadow-[0_2px_8px_rgba(0,0,0,0.4)] hover:shadow-[0_8px_24px_rgba(255,107,53,0.1)] transition-all duration-[250ms] ease-[ease] focus-within:border-[#FF6B35] focus-within:shadow-[0_0_0_4px_rgba(255,107,53,0.15)]">
                            <div className="flex items-center pl-5 text-[#71717A]">
                                <i className="fa-solid fa-magnifying-glass text-base"></i>
                            </div>
                            <input type="text" id="movie-search-input"
                                className="search-input flex-1 py-4 px-4 text-[15px] text-[#F5F5F5] placeholder-[#71717A] bg-transparent outline-none border-none font-medium"
                                placeholder="Enter movie title, actor, or keyword..." />
                            <button id="search-submit-btn"
                                className="px-8 py-4 bg-[#FF6B35] hover:bg-[#E85D04] active:bg-[#C2410C] text-white text-sm font-bold tracking-wide transition-all duration-[250ms] ease-[ease] hover:-translate-y-[1px]">
                                <i className="fa-solid fa-magnifying-glass mr-2 text-xs"></i>SEARCH
                            </button>
                        </div>
                    </div>

                    {/* filter */}
                    <div className="mb-8" id="filter-section">

                        <div className="bg-[#151515] rounded-[16px] border border-[#2A2A2A] shadow-[0_2px_8px_rgba(0,0,0,0.4)] p-5 sm:p-6">

                            <div className="flex items-center gap-2 mb-4">
                                <i className="fa-solid fa-sliders text-[#FF6B35] text-sm"></i>
                                <span className="text-sm font-bold text-[#F5F5F5] uppercase">
                                    Filters
                                </span>
                            </div>

                            <div className="flex flex-wrap gap-4 items-end">

                                {/* genre */}
                                <div className="flex-1 min-w-[160px]">

                                    <label className="block text-xs font-semibold text-[#71717A] mb-2 uppercase">
                                        Genre
                                    </label>

                                    <select className="w-full px-4 py-3 border border-[#3A3A3A] rounded-[10px] bg-[#1C1C1C] text-sm text-[#D4D4D8] focus:outline-none focus:border-[#FF6B35]">

                                        <option>All Genres</option>
                                        <option>Action</option>
                                        <option>Comedy</option>
                                        <option>Drama</option>
                                        <option>Thriller</option>
                                        <option>Sci-Fi</option>
                                        <option>Horror</option>
                                        <option>Romance</option>
                                        <option>Animation</option>

                                    </select>

                                </div>

                                {/* year */}
                                <div className="flex-1 min-w-[140px]">

                                    <label className="block text-xs font-semibold text-[#71717A] mb-2 uppercase">
                                        Year
                                    </label>

                                    <select className="w-full px-4 py-3 border border-[#3A3A3A] rounded-[10px] bg-[#1C1C1C] text-sm text-[#D4D4D8] focus:outline-none focus:border-[#FF6B35]">

                                        <option>All Years</option>
                                        <option>2025</option>
                                        <option>2024</option>
                                        <option>2023</option>
                                        <option>2022</option>
                                        <option>2021</option>
                                        <option>2020</option>

                                    </select>

                                </div>

                                {/* rating */}
                                <div className="flex-1 min-w-[140px]">

                                    <label className="block text-xs font-semibold text-[#71717A] mb-2 uppercase">
                                        Rating
                                    </label>

                                    <select className="w-full px-4 py-3 border border-[#3A3A3A] rounded-[10px] bg-[#1C1C1C] text-sm text-[#D4D4D8] focus:outline-none focus:border-[#FF6B35]">

                                        <option>Any Rating</option>
                                        <option>9+ / 10</option>
                                        <option>8+ / 10</option>
                                        <option>7+ / 10</option>
                                        <option>6+ / 10</option>
                                        <option>5+ / 10</option>

                                    </select>

                                </div>

                                {/* buttons */}
                                <div className="flex gap-2">

                                    <button className="px-5 py-3 bg-[#FF6B35] text-white rounded-[10px] hover:bg-[#E85D04] font-semibold transition-all duration-[250ms]">
                                        Apply
                                    </button>

                                    <button className="px-5 py-3 border border-[#3A3A3A] rounded-[10px] hover:bg-[#1C1C1C] text-[#D4D4D8] transition-all duration-[250ms]">
                                        Clear
                                    </button>

                                </div>

                            </div>

                        </div>

                    </div>

                    {/* genre chips */}
                    <div className="mb-8 animate-slide-up-delay-2" id="genre-chips-section">
                        <div className="flex flex-wrap gap-2.5">
                            <button className="genre-chip active px-4 py-2 text-sm font-semibold bg-[#FF6B35] text-white rounded-full shadow-[0_2px_8px_rgba(255,107,53,0.3)] transition-all duration-[250ms] ease-[ease]">All</button>
                            <button className="genre-chip px-4 py-2 text-sm font-medium bg-[#1C1C1C] text-[#A1A1AA] border border-[#2A2A2A] rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.3)] hover:border-[#FF6B35] hover:text-[#FF6B35] hover:bg-[#FF6B351A] transition-all duration-[250ms] ease-[ease]">
                                <i className="fa-solid fa-explosion mr-1.5 text-xs text-[#C1121F]"></i>Action</button>
                            <button className="genre-chip px-4 py-2 text-sm font-medium bg-[#1C1C1C] text-[#A1A1AA] border border-[#2A2A2A] rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.3)] hover:border-[#FF6B35] hover:text-[#FF6B35] hover:bg-[#FF6B351A] transition-all duration-[250ms] ease-[ease]">
                                <i className="fa-solid fa-face-laugh-squint mr-1.5 text-xs text-[#FFB000]"></i>Comedy</button>
                            <button className="genre-chip px-4 py-2 text-sm font-medium bg-[#1C1C1C] text-[#A1A1AA] border border-[#2A2A2A] rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.3)] hover:border-[#FF6B35] hover:text-[#FF6B35] hover:bg-[#FF6B351A] transition-all duration-[250ms] ease-[ease]">
                                <i className="fa-solid fa-masks-theater mr-1.5 text-xs text-[#A1A1AA]"></i>Drama</button>
                            <button className="genre-chip px-4 py-2 text-sm font-medium bg-[#1C1C1C] text-[#A1A1AA] border border-[#2A2A2A] rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.3)] hover:border-[#FF6B35] hover:text-[#FF6B35] hover:bg-[#FF6B351A] transition-all duration-[250ms] ease-[ease]">
                                <i className="fa-solid fa-user-secret mr-1.5 text-xs text-[#D4D4D8]"></i>Thriller</button>
                            <button className="genre-chip px-4 py-2 text-sm font-medium bg-[#1C1C1C] text-[#A1A1AA] border border-[#2A2A2A] rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.3)] hover:border-[#FF6B35] hover:text-[#FF6B35] hover:bg-[#FF6B351A] transition-all duration-[250ms] ease-[ease]">
                                <i className="fa-solid fa-rocket mr-1.5 text-xs text-[#60A5FA]"></i>Sci-Fi</button>
                            <button className="genre-chip px-4 py-2 text-sm font-medium bg-[#1C1C1C] text-[#A1A1AA] border border-[#2A2A2A] rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.3)] hover:border-[#FF6B35] hover:text-[#FF6B35] hover:bg-[#FF6B351A] transition-all duration-[250ms] ease-[ease]">
                                <i className="fa-solid fa-ghost mr-1.5 text-xs text-[#A1A1AA]"></i>Horror</button>
                            <button className="genre-chip px-4 py-2 text-sm font-medium bg-[#1C1C1C] text-[#A1A1AA] border border-[#2A2A2A] rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.3)] hover:border-[#FF6B35] hover:text-[#FF6B35] hover:bg-[#FF6B351A] transition-all duration-[250ms] ease-[ease]">
                                <i className="fa-solid fa-heart mr-1.5 text-xs text-[#FF6B35]"></i>Romance</button>
                            <button className="genre-chip px-4 py-2 text-sm font-medium bg-[#1C1C1C] text-[#A1A1AA] border border-[#2A2A2A] rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.3)] hover:border-[#FF6B35] hover:text-[#FF6B35] hover:bg-[#FF6B351A] transition-all duration-[250ms] ease-[ease]">
                                <i className="fa-solid fa-wand-magic-sparkles mr-1.5 text-xs text-[#22C55E]"></i>Animation</button>
                            <button className="genre-chip px-4 py-2 text-sm font-medium bg-[#1C1C1C] text-[#A1A1AA] border border-[#2A2A2A] rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.3)] hover:border-[#FF6B35] hover:text-[#FF6B35] hover:bg-[#FF6B351A] transition-all duration-[250ms] ease-[ease]">
                                <i className="fa-solid fa-camera-retro mr-1.5 text-xs text-[#FFB000]"></i>Documentary</button>
                        </div>
                    </div>

                    {/* result */}
                    <div
                        className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 pb-4 border-b border-[#2A2A2A]">
                        <div className="flex items-center gap-3 mb-3 sm:mb-0">
                            <span className="text-sm text-[#A1A1AA]">Showing{" "}
                                <strong className="text-[#F5F5F5]" id="results-range">1–18</strong> of{" "}
                                <strong className="text-[#F5F5F5]" id="results-total">142</strong> results
                            </span>
                            <span id="active-filter-badge"
                                className="hidden items-center gap-1 px-2.5 py-0.5 text-[11px] font-bold bg-[#FF6B351A] text-[#FF6B35] rounded-full border border-[#FF6B35]/30">
                                <span id="active-filter-text">Action</span>
                                <button className="ml-1 hover:text-[#C1121F] transition-colors">
                                    <i className="fa-solid fa-xmark text-[10px]"></i>
                                </button>
                            </span>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1 bg-[#151515] rounded-[10px] p-0.5">
                                <button id="grid-view-btn"
                                    className="view-btn active w-8 h-8 flex items-center justify-center rounded-[8px] text-[#A1A1AA] transition-all duration-[250ms] ease-[ease]"
                                    aria-label="Grid view">
                                    <i className="fa-solid fa-grid-2 text-sm"></i>
                                </button>
                                <button id="list-view-btn"
                                    className="view-btn w-8 h-8 flex items-center justify-center rounded-[8px] text-[#A1A1AA] transition-all duration-[250ms] ease-[ease]"
                                    aria-label="List view">
                                    <i className="fa-solid fa-list text-sm"></i>
                                </button>
                            </div>
                            <div className="flex items-center gap-2">
                                <select id="sort-select"
                                    className="px-3 py-2 bg-[#1C1C1C] border border-[#3A3A3A] rounded-[10px] text-sm text-[#D4D4D8] cursor-pointer hover:border-[#FF6B35] transition-all duration-[250ms] ease-[ease] focus:border-[#FF6B35] focus:shadow-[0_0_0_4px_rgba(255,107,53,0.15)] outline-none">
                                    <option>Relevance</option>
                                    <option>Rating</option>
                                    <option>Year</option>
                                    <option>Title</option>
                                    <option>Popularity</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* grid */}
                    <div className="mb-12" id="movies-grid-container">
                        <div className="movies-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5" id="movies-grid">
                            {moviesData.map((movie) => (
                                <MovieCard
                                    key={movie.id}
                                    title={movie.title}
                                    genre={movie.genre}
                                    rating={movie.rating}
                                    image={movie.image}
                                />
                            ))}
                        </div>
                    </div>
                    
                </div>
            </main>

            <Footer />
        </>
    );
}

export default Movies;