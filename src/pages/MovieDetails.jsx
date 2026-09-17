import { useState, useEffect, useRef } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MovieCard from "../components/MovieCard";
import moviesData from "../data/movies.json";

function MovieDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const carouselRef = useRef(null);

    // Find the movie by ID or fallback to the first movie if id is not specified
    const movie = id
        ? moviesData.find((m) => m.id === Number(id))
        : moviesData[0];

    // Scroll to top whenever movie ID changes
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [id]);

    // Local state for watchlist and trailer modal
    const [isSaved, setIsSaved] = useState(false);
    const [toastMessage, setToastMessage] = useState("");
    const [showTrailer, setShowTrailer] = useState(false);

    const toggleWatchlist = () => {
        setIsSaved((prev) => {
            const next = !prev;
            setToastMessage(next ? `Added "${movie?.title}" to your Watchlist!` : `Removed from Watchlist`);
            setTimeout(() => setToastMessage(""), 3000);
            return next;
        });
    };

    const scrollCarousel = (direction) => {
        if (carouselRef.current) {
            const scrollAmount = direction === "left" ? -400 : 400;
            carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    // If movie ID is provided in URL but no movie matched
    if (!movie) {
        return (
            <>
                <Navbar />
                <main className="pt-28 pb-20 bg-[#080808] min-h-screen flex items-center justify-center">
                    <div className="text-center px-4 max-w-md">
                        <div className="w-20 h-20 bg-[#1C1C1C] border border-[#2A2A2A] rounded-full flex items-center justify-center mx-auto mb-6 text-[#FF6B35]">
                            <i className="fa-solid fa-film text-3xl"></i>
                        </div>
                        <h1 className="text-3xl font-black text-[#F5F5F5] mb-3">Movie Not Found</h1>
                        <p className="text-[#A1A1AA] text-sm mb-8 leading-relaxed">
                            The movie you are looking for does not exist or has been removed from our catalog.
                        </p>
                        <button
                            onClick={() => navigate("/movies")}
                            className="inline-flex items-center gap-2 px-7 py-3 bg-[#FF6B35] hover:bg-[#E85D04] text-white text-sm font-bold rounded-[10px] transition-all duration-300 hover:shadow-[0_12px_32px_rgba(255,107,53,0.3)]"
                        >
                            <i className="fa-solid fa-arrow-left mr-1"></i>
                            Browse All Movies
                        </button>
                    </div>
                </main>
                <Footer />
            </>
        );
    }

    // Similar movies (same genre prioritized, excluding current movie)
    const similarMovies = moviesData
        .filter((m) => m.id !== movie.id)
        .sort((a, b) => {
            if (a.genre === movie.genre && b.genre !== movie.genre) return -1;
            if (a.genre !== movie.genre && b.genre === movie.genre) return 1;
            return 0;
        });

    const genresList = movie.genres || (movie.genre ? [movie.genre] : ["Cinema"]);
    const ratingsBreakdown = movie.ratingsBreakdown || { "5": 80, "4": 12, "3": 5, "2": 2, "1": 1 };

    return (
        <>
            <Navbar />

            {/* Toast Notification */}
            {toastMessage && (
                <div className="fixed bottom-8 right-8 z-50 bg-[#1C1C1C] border border-[#FF6B35]/60 text-[#F5F5F5] px-5 py-3.5 rounded-[12px] shadow-[0_12px_36px_rgba(0,0,0,0.8)] flex items-center gap-3 animate-fade-in">
                    <i className="fa-solid fa-circle-check text-[#FF6B35] text-lg"></i>
                    <span className="text-sm font-semibold">{toastMessage}</span>
                </div>
            )}

            {/* Trailer Modal */}
            {showTrailer && (
                <div
                    className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
                    onClick={() => setShowTrailer(false)}
                >
                    <div
                        className="relative w-full max-w-4xl bg-[#151515] border border-[#2A2A2A] rounded-[20px] overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.9)]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between px-6 py-4 border-b border-[#2A2A2A] bg-[#1C1C1C]">
                            <div className="flex items-center gap-2.5">
                                <i className="fa-solid fa-circle-play text-[#FF6B35]"></i>
                                <span className="font-bold text-sm text-[#F5F5F5] tracking-wide">
                                    Official Trailer — {movie.title}
                                </span>
                            </div>
                            <button
                                onClick={() => setShowTrailer(false)}
                                className="w-8 h-8 rounded-full bg-[#2A2A2A] hover:bg-[#FF6B35] text-[#A1A1AA] hover:text-white flex items-center justify-center transition-colors"
                            >
                                <i className="fa-solid fa-xmark text-sm"></i>
                            </button>
                        </div>
                        <div className="relative aspect-video w-full bg-[#080808] flex items-center justify-center">
                            <img
                                src={movie.backdrop || movie.image}
                                alt={movie.title}
                                className="w-full h-full object-cover opacity-40 blur-xs"
                            />
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-gradient-to-t from-[#080808] via-transparent to-transparent">
                                <div className="w-16 h-16 rounded-full bg-[#FF6B35] text-white flex items-center justify-center text-xl shadow-[0_0_30px_rgba(255,107,53,0.6)] mb-4 animate-pulse">
                                    <i className="fa-solid fa-play ml-1"></i>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{movie.title}</h3>
                                <p className="text-sm text-[#A1A1AA] max-w-md">
                                    Official HD Trailer & Teaser Footage
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <main className="pt-24 pb-16 bg-[#080808] min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Breadcrumbs */}
                    <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#71717A] uppercase mb-8">
                        <Link to="/" className="hover:text-[#FF6B35] transition-colors duration-[250ms]">
                            Home
                        </Link>
                        <i className="fa-solid fa-chevron-right text-[10px] text-[#3A3A3A]"></i>
                        <Link to="/movies" className="hover:text-[#FF6B35] transition-colors duration-[250ms]">
                            Movies
                        </Link>
                        <i className="fa-solid fa-chevron-right text-[10px] text-[#3A3A3A]"></i>
                        <span className="text-[#D4D4D8] truncate max-w-[200px] sm:max-w-none">
                            {movie.title}
                        </span>
                    </div>

                    {/* Hero Section */}
                    <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 mb-16">

                        {/* Left: Movie Poster with glow effect */}
                        <div className="w-full lg:w-[320px] flex-shrink-0">
                            <div className="relative">
                                {/* Ambient glow behind poster */}
                                <div
                                    className="absolute inset-0 rounded-[20px] blur-2xl opacity-30 bg-cover bg-center -z-10 transform scale-95"
                                    style={{ backgroundImage: `url(${movie.image})` }}
                                ></div>

                                <div className="w-full aspect-[2/3] rounded-[16px] overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.6)] border border-[#2A2A2A] relative group bg-[#1C1C1C]">
                                    <img
                                        src={movie.image}
                                        alt={movie.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                        <span className="text-xs font-semibold text-white/90 bg-black/60 px-3 py-1.5 rounded-full backdrop-blur-md">
                                            {movie.year || "2024"} • {movie.runtime}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Movie Details Information */}
                        <div className="flex-1">

                            {/* Header & Tagline */}
                            <div className="mb-6 pb-6 border-b border-[#2A2A2A]">
                                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#FFFFFF] mb-2 leading-tight">
                                    {movie.title}
                                </h1>
                                {movie.tagline && (
                                    <p className="text-base sm:text-lg text-[#FF6B35] font-medium tracking-wide italic">
                                        "{movie.tagline}"
                                    </p>
                                )}
                            </div>

                            {/* Key Stats Grid */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8">
                                <div className="bg-[#151515] border border-[#2A2A2A] rounded-[16px] p-4 shadow-[0_2px_8px_rgba(0,0,0,0.4)] hover:border-[#FF6B35]/50 transition-all duration-[250ms]">
                                    <div className="text-[10px] font-bold text-[#71717A] tracking-wider uppercase mb-1">Rating</div>
                                    <div className="text-lg font-bold text-[#F5F5F5] flex items-center gap-1.5">
                                        <i className="fa-solid fa-star text-[#FFB000] text-sm"></i>
                                        <span>{movie.rating}</span>
                                        <span className="text-xs text-[#71717A] font-normal">/ 10</span>
                                    </div>
                                </div>

                                <div className="bg-[#151515] border border-[#2A2A2A] rounded-[16px] p-4 shadow-[0_2px_8px_rgba(0,0,0,0.4)] hover:border-[#FF6B35]/50 transition-all duration-[250ms]">
                                    <div className="text-[10px] font-bold text-[#71717A] tracking-wider uppercase mb-1">Release Date</div>
                                    <div className="text-base font-bold text-[#F5F5F5] truncate">{movie.releaseDate || movie.year || "2024"}</div>
                                </div>

                                <div className="bg-[#151515] border border-[#2A2A2A] rounded-[16px] p-4 shadow-[0_2px_8px_rgba(0,0,0,0.4)] hover:border-[#FF6B35]/50 transition-all duration-[250ms]">
                                    <div className="text-[10px] font-bold text-[#71717A] tracking-wider uppercase mb-1">Runtime</div>
                                    <div className="text-base font-bold text-[#F5F5F5]">{movie.runtime || "2h 15m"}</div>
                                </div>

                                <div className="bg-[#151515] border border-[#2A2A2A] rounded-[16px] p-4 shadow-[0_2px_8px_rgba(0,0,0,0.4)] hover:border-[#FF6B35]/50 transition-all duration-[250ms]">
                                    <div className="text-[10px] font-bold text-[#71717A] tracking-wider uppercase mb-1">Language</div>
                                    <div className="text-base font-bold text-[#F5F5F5] truncate">{movie.language || "English"}</div>
                                </div>
                            </div>

                            {/* Genres */}
                            <div className="mb-8">
                                <h3 className="text-[11px] font-bold text-[#71717A] tracking-wider uppercase mb-3">Genres</h3>
                                <div className="flex flex-wrap gap-2.5">
                                    {genresList.map((g, idx) => (
                                        <Link
                                            key={idx}
                                            to="/movies"
                                            className="px-4 py-2 bg-[#1C1C1C] border border-[#3A3A3A] rounded-[9999px] text-sm font-semibold text-[#D4D4D8] shadow-[0_2px_8px_rgba(0,0,0,0.3)] hover:border-[#FF6B35] hover:text-[#FF6B35] hover:-translate-y-[2px] transition-all duration-[250ms]"
                                        >
                                            {g}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Synopsis */}
                            <div className="mb-8">
                                <h3 className="text-[11px] font-bold text-[#71717A] tracking-wider uppercase mb-3 pb-2 border-b border-[#2A2A2A]">
                                    Overview / Synopsis
                                </h3>
                                <p className="text-base text-[#D4D4D8] leading-relaxed font-normal">
                                    {movie.overview || "No overview available for this title."}
                                </p>
                            </div>

                            {/* Production & Director Metadata */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 bg-[#151515] border border-[#2A2A2A] rounded-[16px] p-5 shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
                                <div>
                                    <div className="text-[10px] font-bold text-[#71717A] tracking-wider uppercase mb-1">Director</div>
                                    <div className="text-sm font-bold text-[#F5F5F5] truncate">{movie.director || "Unknown"}</div>
                                </div>
                                <div>
                                    <div className="text-[10px] font-bold text-[#71717A] tracking-wider uppercase mb-1">Budget</div>
                                    <div className="text-sm font-bold text-[#F5F5F5] truncate">{movie.budget || "N/A"}</div>
                                </div>
                                <div>
                                    <div className="text-[10px] font-bold text-[#71717A] tracking-wider uppercase mb-1">Status</div>
                                    <div className="text-sm font-bold text-[#22C55E] flex items-center gap-1.5 truncate">
                                        <span className="w-2 h-2 rounded-full bg-[#22C55E]"></span>
                                        {movie.status || "Released"}
                                    </div>
                                </div>
                                <div>
                                    <div className="text-[10px] font-bold text-[#71717A] tracking-wider uppercase mb-1">Production</div>
                                    <div className="text-sm font-bold text-[#F5F5F5] truncate">{movie.production || "Embrero Studios"}</div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-wrap gap-4">
                                <button
                                    onClick={toggleWatchlist}
                                    className={`inline-flex items-center gap-2 px-8 py-4 text-sm font-bold rounded-[10px] transition-all duration-[250ms] shadow-[0_2px_8px_rgba(0,0,0,0.3)] hover:-translate-y-[2px] active:translate-y-0 ${
                                        isSaved
                                            ? "bg-[#22C55E] text-white hover:bg-[#16A34A] shadow-[0_12px_32px_rgba(34,197,94,0.3)]"
                                            : "bg-[#FF6B35] hover:bg-[#E85D04] active:bg-[#C2410C] text-white hover:shadow-[0_20px_50px_rgba(255,107,53,0.3)]"
                                    }`}
                                >
                                    <i className={`fa-${isSaved ? "solid" : "regular"} fa-heart text-base`}></i>
                                    {isSaved ? "In Watchlist" : "Add to Watchlist"}
                                </button>

                                <button
                                    onClick={() => setShowTrailer(true)}
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-[#1C1C1C] border border-[#3A3A3A] text-[#D4D4D8] hover:bg-[#242424] hover:border-[#FF6B35] hover:text-[#FF6B35] text-sm font-bold rounded-[10px] transition-all duration-[250ms] shadow-[0_2px_8px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_24px_rgba(255,107,53,0.1)] hover:-translate-y-[2px] active:translate-y-0"
                                >
                                    <i className="fa-solid fa-play text-base text-[#FF6B35]"></i>
                                    Watch Trailer
                                </button>
                            </div>

                        </div>
                    </div>

                    {/* Cast & Crew Section */}
                    {movie.cast && movie.cast.length > 0 && (
                        <section className="mb-16">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-1.5 h-7 bg-[#FF6B35] rounded-full"></div>
                                <h2 className="text-[22px] sm:text-[26px] font-bold tracking-tight text-[#F5F5F5]">
                                    Cast & Crew
                                </h2>
                            </div>
                            <div className="bg-[#151515] border border-[#2A2A2A] rounded-[16px] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
                                <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
                                    {movie.cast.map((actor, idx) => (
                                        <div
                                            key={idx}
                                            className="flex flex-col items-center w-28 flex-shrink-0 group cursor-pointer"
                                        >
                                            <div className="w-24 h-24 rounded-full overflow-hidden mb-3 border-[3px] border-transparent group-hover:border-[#FF6B35] transition-all duration-[250ms] shadow-[0_2px_8px_rgba(0,0,0,0.4)] group-hover:shadow-[0_8px_24px_rgba(255,107,53,0.2)] bg-[#1C1C1C]">
                                                <img
                                                    src={actor.image}
                                                    alt={actor.name}
                                                    onError={(e) => {
                                                        e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(actor.name)}&background=1C1C1C&color=FF6B35`;
                                                    }}
                                                    className="w-full h-full object-cover transition-transform duration-[250ms] group-hover:scale-110"
                                                />
                                            </div>
                                            <div className="text-sm font-bold text-[#F5F5F5] text-center leading-tight mb-1 group-hover:text-[#FF6B35] transition-colors duration-[250ms]">
                                                {actor.name}
                                            </div>
                                            <div className="text-[11px] text-[#71717A] text-center line-clamp-2">
                                                {actor.role}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    )}

                    {/* Ratings Breakdown Section */}
                    <section className="mb-16">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-1.5 h-7 bg-[#FF6B35] rounded-full"></div>
                            <h2 className="text-[22px] sm:text-[26px] font-bold tracking-tight text-[#F5F5F5]">
                                Ratings Breakdown
                            </h2>
                        </div>
                        <div className="bg-[#151515] border border-[#2A2A2A] rounded-[16px] p-6 lg:p-10 shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
                            <div className="flex flex-col md:flex-row gap-10 items-center justify-center">

                                <div className="text-center md:text-left flex-shrink-0">
                                    <div className="text-6xl lg:text-7xl font-black text-[#FFFFFF] mb-2 tracking-tight">
                                        {movie.rating}
                                        <span className="text-2xl text-[#71717A] font-bold tracking-normal"> / 10</span>
                                    </div>
                                    <div className="text-sm font-bold text-[#A1A1AA] tracking-widest uppercase">
                                        Based on {movie.totalRatings || "10,000+"} Ratings
                                    </div>
                                </div>

                                <div className="w-px h-24 bg-[#2A2A2A] hidden md:block"></div>

                                <div className="w-full max-w-md space-y-3">
                                    {[5, 4, 3, 2, 1].map((star) => {
                                        const pct = ratingsBreakdown[star.toString()] || 0;
                                        return (
                                            <div key={star} className="flex items-center gap-3">
                                                <span className="text-sm font-bold text-[#D4D4D8] w-8">
                                                    {star} <i className="fa-solid fa-star text-[10px] text-[#FFB000]"></i>
                                                </span>
                                                <div className="flex-1 h-2.5 bg-[#1C1C1C] rounded-full overflow-hidden">
                                                    <div
                                                        className="h-full bg-[#FF6B35] rounded-full transition-all duration-700"
                                                        style={{ width: `${pct}%` }}
                                                    ></div>
                                                </div>
                                                <span className="text-xs font-semibold text-[#71717A] w-10 text-right">
                                                    {pct}%
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>

                            </div>
                        </div>
                    </section>

                    {/* Similar Movies Carousel */}
                    <section className="mb-8">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-3">
                                <div className="w-1.5 h-7 bg-[#FF6B35] rounded-full"></div>
                                <h2 className="text-[22px] sm:text-[26px] font-bold tracking-tight text-[#F5F5F5]">
                                    Similar Movies
                                </h2>
                            </div>
                            <Link
                                to="/movies"
                                className="text-sm text-[#71717A] hover:text-[#FF6B35] font-semibold transition-all duration-[250ms] group flex items-center gap-1.5"
                            >
                                View All
                                <i className="fa-solid fa-arrow-right text-xs group-hover:translate-x-0.5 transition-transform duration-[250ms]"></i>
                            </Link>
                        </div>

                        <div className="relative group/carousel">
                            <div
                                ref={carouselRef}
                                className="flex gap-5 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory scroll-smooth"
                            >
                                {similarMovies.map((simMovie) => (
                                    <div key={simMovie.id} className="flex-shrink-0 w-44 sm:w-48 snap-start">
                                        <MovieCard
                                            id={simMovie.id}
                                            image={simMovie.image}
                                            title={simMovie.title}
                                            genre={simMovie.genre}
                                            rating={simMovie.rating}
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Prev Button */}
                            <button
                                onClick={() => scrollCarousel("left")}
                                className="absolute top-1/2 -left-4 -translate-y-1/2 w-10 h-10 rounded-full bg-[#1C1C1C] border border-[#2A2A2A] shadow-[0_2px_8px_rgba(0,0,0,0.4)] flex items-center justify-center text-[#D4D4D8] hover:text-[#FF6B35] hover:shadow-[0_8px_24px_rgba(255,107,53,0.15)] opacity-0 group-hover/carousel:opacity-100 transition-all duration-[250ms] z-10 hover:scale-105"
                                aria-label="Previous movies"
                            >
                                <i className="fa-solid fa-chevron-left text-sm"></i>
                            </button>

                            {/* Next Button */}
                            <button
                                onClick={() => scrollCarousel("right")}
                                className="absolute top-1/2 -right-4 -translate-y-1/2 w-10 h-10 rounded-full bg-[#1C1C1C] border border-[#2A2A2A] shadow-[0_2px_8px_rgba(0,0,0,0.4)] flex items-center justify-center text-[#D4D4D8] hover:text-[#FF6B35] hover:shadow-[0_8px_24px_rgba(255,107,53,0.15)] opacity-0 group-hover/carousel:opacity-100 transition-all duration-[250ms] z-10 hover:scale-105"
                                aria-label="Next movies"
                            >
                                <i className="fa-solid fa-chevron-right text-sm"></i>
                            </button>
                        </div>
                    </section>

                </div>
            </main>

            <Footer />
        </>
    );
}

export default MovieDetails;