import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MovieCard from "../components/MovieCard";
import moviesData from "../data/movies.json";

function Watchlist() {
    return (
        <>
            <Navbar />

            <main className="pt-16 pb-24 bg-[#080808] min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">

                    {/* Header  */}
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b-2 border-[#FF6B35] pb-6 mb-8 gap-4">
                        <div>
                            <h1 className="text-3xl sm:text-4xl font-black text-[#FFFFFF] tracking-tight mb-2 uppercase">My Watchlist</h1>
                            <div className="text-sm font-semibold text-[#A1A1AA] tracking-wide uppercase"><span>{moviesData.length}</span> Movies Saved</div>
                        </div>
                        <div className="flex items-center gap-3">
                            {/* <button
                                className="px-3 py-2 text-xs font-semibold text-[#A1A1AA] bg-[#151515] border border-[#2A2A2A] border-dashed rounded-[8px] hover:bg-[#1C1C1C] hover:text-[#D4D4D8] transition-all duration-[250ms] ease-[ease]">
                                Toggle Empty State <i className="fa-solid fa-rotate text-[10px] ml-1"></i>
                            </button> */}
                            <div className="relative">
                                <select
                                    className="appearance-none bg-[#1C1C1C] border border-[#3A3A3A] text-[#D4D4D8] text-xs font-semibold rounded-[10px] pl-4 pr-8 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#FF6B35]/20 focus:border-[#FF6B35] transition-all duration-[250ms] ease-[ease] shadow-[0_2px_8px_rgba(0,0,0,0.3)] cursor-pointer">
                                    <option>Sort: Date Added</option>
                                    <option>Sort: Title A-Z</option>
                                    <option>Sort: Rating</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#71717A]">
                                    <i className="fa-solid fa-chevron-down text-[10px]"></i>
                                </div>
                            </div>
                            <button
                                className="px-4 py-2.5 bg-[#1C1C1C] border border-[#3A3A3A] text-[#D4D4D8] hover:bg-[#C1121F1A] hover:border-[#C1121F] hover:text-[#C1121F] text-xs font-bold rounded-[10px] transition-all duration-[250ms] ease-[ease] shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
                                Clear All
                            </button>
                        </div>
                    </div>

                    {/* Stats Grid  */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 bg-[#151515] border border-[#2A2A2A] rounded-[16px] p-5 shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
                        <div className="bg-[#1C1C1C] border border-[#2A2A2A] rounded-[12px] p-4 text-center shadow-sm">
                            <div className="text-[10px] font-bold text-[#71717A] tracking-widest uppercase mb-1.5">Total Movies</div>
                            <div className="text-2xl font-black text-[#FFFFFF]">{moviesData.length}</div>
                        </div>
                        <div className="bg-[#1C1C1C] border border-[#2A2A2A] rounded-[12px] p-4 text-center shadow-sm">
                            <div className="text-[10px] font-bold text-[#71717A] tracking-widest uppercase mb-1.5">Total Runtime</div>
                            <div className="text-2xl font-black text-[#FFFFFF]">~18h 42m</div>
                        </div>
                        <div className="bg-[#1C1C1C] border border-[#2A2A2A] rounded-[12px] p-4 text-center shadow-sm">
                            <div className="text-[10px] font-bold text-[#71717A] tracking-widest uppercase mb-1.5">Avg Rating</div>
                            <div className="text-2xl font-black text-[#FF6B35]">7.8 <span className="text-sm font-semibold text-[#71717A]">/ 10</span></div>
                        </div>
                        <div className="bg-[#1C1C1C] border border-[#2A2A2A] rounded-[12px] p-4 text-center shadow-sm">
                            <div className="text-[10px] font-bold text-[#71717A] tracking-widest uppercase mb-1.5">Genres</div>
                            <div className="text-2xl font-black text-[#FFFFFF]">5 <span className="text-sm font-semibold text-[#71717A]">Different</span></div>
                        </div>
                    </div>

                    {/* Empty State (Hidden by default)  */}
                    <div className="hidden flex-col items-center justify-center py-20 bg-[#151515] border-2 border-dashed border-[#3A3A3A] rounded-[24px]">
                        <div className="w-24 h-24 bg-[#1C1C1C] border border-[#2A2A2A] rounded-full flex items-center justify-center mb-6 shadow-[0_8px_24px_rgba(0,0,0,0.4)] relative">
                            <i className="fa-regular fa-bookmark text-4xl text-[#71717A]"></i>
                            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#1C1C1C] border border-[#2A2A2A] rounded-full flex items-center justify-center shadow-sm">
                                <i className="fa-solid fa-question text-[#FF6B35] text-sm"></i>
                            </div>
                        </div>
                        <h2 className="text-xl font-bold text-[#F5F5F5] tracking-tight mb-2 uppercase">Watchlist is Empty</h2>
                        <p className="text-sm text-[#A1A1AA] mb-1 font-medium">You haven't added any movies yet.</p>
                        <p className="text-xs text-[#71717A] mb-8 font-medium">Browse our catalog and click the heart icon to save movies here.</p>
                        <Link to="/movies" className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#FF6B35] hover:bg-[#E85D04] active:bg-[#C2410C] text-white text-sm font-bold rounded-[10px] transition-all duration-[250ms] ease-[ease] hover:shadow-[0_20px_50px_rgba(255,107,53,0.3)] hover:-translate-y-[2px] active:translate-y-0">
                            Browse Movies <i className="fa-solid fa-arrow-right text-xs"></i>
                        </Link>
                    </div>

                    {/* Movies Grid */}
                    <div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">

                            {moviesData.map((movie) => (
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

                </div>
            </main>

            <Footer />
        </>
    );
}

export default Watchlist;