import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MovieCard from "../components/MovieCard";
import moviesData from "../data/movies.json";

function Profile() {
    return (
        <>
            <Navbar />
            <main className="pt-20 pb-16 bg-[#080808] min-h-screen">

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="relative bg-[#151515] rounded-t-[16px] border border-[#2A2A2A] shadow-[0_2px_8px_rgba(0,0,0,0.5)] overflow-hidden">

                        <div className="h-32 sm:h-40 bg-gradient-to-br from-[#3A1708] via-[#1A0D07] to-[#0D0D0D] relative">

                            <div className="absolute -top-10 -right-10 w-56 h-56 bg-[#FF6B35]/15 rounded-full blur-3xl"></div>

                            <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-[#E85D04]/15 rounded-full blur-2xl"></div>

                        </div>

                        <div className="px-6 sm:px-8 pb-6 -mt-14 relative z-10">

                            <div className="flex flex-col sm:flex-row items-start sm:items-end gap-5">

                                {/* avt */}
                                <div className="relative flex-shrink-0">

                                    <div className="w-[100px] h-[100px] rounded-full border-4 border-[#151515] bg-[#FF6B351A] shadow-[0_8px_24px_rgba(255,107,53,0.2)] flex items-center justify-center overflow-hidden">

                                        <i className="fa-solid fa-user text-3xl text-[#FF6B35]"></i>

                                    </div>

                                    <button
                                        className="absolute bottom-0 right-0 w-8 h-8 bg-[#FF6B35] hover:bg-[#E85D04] text-white rounded-full flex items-center justify-center shadow-[0_2px_8px_rgba(255,107,53,0.3)] transition-all duration-300 hover:scale-110"
                                        aria-label="Edit Avatar"
                                    >
                                        <i className="fa-solid fa-pen text-[10px]"></i>
                                    </button>

                                </div>

                                {/* u-info */}
                                <div className="flex-1 min-w-0 pt-2">

                                    <h1 className="text-2xl sm:text-[28px] font-black text-[#FFFFFF] tracking-tight mb-1">
                                        Alex Johnson
                                    </h1>

                                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-3">

                                        <span className="text-sm text-[#A1A1AA]">
                                            alex@example.com
                                        </span>

                                        <span className="text-[#3A3A3A]">|</span>

                                        <span className="text-sm text-[#A1A1AA]">
                                            <i className="fa-regular fa-calendar mr-1 text-xs text-[#71717A]"></i>
                                            Member since Jan 2024
                                        </span>

                                    </div>

                                    <div className="flex flex-wrap gap-2">

                                        <span className="inline-flex items-center px-2.5 py-1 text-[11px] font-semibold bg-[#C1121F1A] text-[#C1121F] rounded-full border border-[#C1121F]/20">
                                            <i className="fa-solid fa-explosion mr-1 text-[9px]"></i>
                                            Action
                                        </span>

                                        <span className="inline-flex items-center px-2.5 py-1 text-[11px] font-semibold bg-[#60A5FA]/10 text-[#60A5FA] rounded-full border border-[#60A5FA]/20">
                                            <i className="fa-solid fa-rocket mr-1 text-[9px]"></i>
                                            Sci-Fi
                                        </span>

                                        <span className="inline-flex items-center px-2.5 py-1 text-[11px] font-semibold bg-[#A1A1AA]/10 text-[#A1A1AA] rounded-full border border-[#A1A1AA]/20">
                                            <i className="fa-solid fa-masks-theater mr-1 text-[9px]"></i>
                                            Drama
                                        </span>

                                    </div>

                                </div>

                                <button
                                    className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-[#1C1C1C] border border-[#3A3A3A] text-[#D4D4D8] hover:bg-[#242424] hover:border-[#FF6B35] hover:text-[#FF6B35] text-sm font-semibold rounded-[10px] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                                >
                                    <i className="fa-solid fa-pen-to-square text-xs"></i>
                                    Edit Profile
                                </button>

                            </div>

                        </div>

                    </div>

                    {/* stats */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 border border-t-0 border-[#2A2A2A] rounded-b-[16px] bg-[#151515] shadow-[0_2px_8px_rgba(0,0,0,0.4)] overflow-hidden mb-8">

                        <div className="p-5 text-center border-r border-[#2A2A2A] cursor-pointer hover:bg-[#FF6B351A] transition-all duration-300">

                            <div className="text-[28px] font-black text-[#FFFFFF] tracking-tight">
                                42
                            </div>

                            <div className="text-[11px] font-semibold text-[#71717A] tracking-widest uppercase mt-1">
                                Watchlist
                            </div>

                        </div>

                        <div className="p-5 text-center border-r border-[#2A2A2A] cursor-pointer hover:bg-[#FF6B351A] transition-all duration-300">

                            <div className="text-[28px] font-black text-[#FFFFFF] tracking-tight">
                                18
                            </div>

                            <div className="text-[11px] font-semibold text-[#71717A] tracking-widest uppercase mt-1">
                                Reviews
                            </div>

                        </div>

                        <div className="p-5 text-center border-r border-[#2A2A2A] border-t sm:border-t-0 cursor-pointer hover:bg-[#FF6B351A] transition-all duration-300">

                            <div className="text-[28px] font-black text-[#FF6B35] tracking-tight">
                                96
                            </div>

                            <div className="text-[11px] font-semibold text-[#71717A] tracking-widest uppercase mt-1">
                                Ratings
                            </div>

                        </div>

                        <div className="p-5 text-center border-t sm:border-t-0 cursor-pointer hover:bg-[#FF6B351A] transition-all duration-300">

                            <div className="text-[28px] font-black text-[#FFFFFF] tracking-tight">
                                7
                            </div>

                            <div className="text-[11px] font-semibold text-[#71717A] tracking-widest uppercase mt-1">
                                Followers
                            </div>

                        </div>

                    </div>

                    <div className="grid lg:grid-cols-[1fr_340px] gap-8">

                        {/* recent activity*/}
                        <div className="bg-[#151515] rounded-[16px] border border-[#2A2A2A] shadow-[0_2px_8px_rgba(0,0,0,0.4)] p-6">

                            <div className="flex items-center gap-3 mb-5">

                                <div className="w-1.5 h-6 bg-[#FF6B35] rounded-full"></div>

                                <h2 className="text-base font-bold text-[#F5F5F5] tracking-tight">
                                    Recent Activity
                                </h2>

                            </div>

                            <div className="space-y-0 divide-y divide-[#222222]">

                                {/* 1 */}
                                <div className="flex items-start gap-3.5 py-3.5 first:pt-0">

                                    <div className="w-2 h-2 rounded-full bg-[#FF6B35] mt-1.5 flex-shrink-0 ring-4 ring-[#FF6B351A]"></div>

                                    <div className="flex-1 min-w-0">

                                        <div className="text-[11px] font-semibold text-[#FF6B35] tracking-wide uppercase mb-0.5">
                                            Added to Watchlist
                                        </div>

                                        <div className="text-sm font-bold text-[#F5F5F5]">
                                            The Dark Horizon
                                        </div>

                                    </div>

                                    <span className="text-xs text-[#71717A] flex-shrink-0">
                                        2 hours ago
                                    </span>

                                </div>

                                {/* 2 */}
                                <div className="flex items-start gap-3.5 py-3.5">

                                    <div className="w-2 h-2 rounded-full bg-[#FFB000] mt-1.5 flex-shrink-0 ring-4 ring-[#FFB0001A]"></div>

                                    <div className="flex-1 min-w-0">

                                        <div className="text-[11px] font-semibold text-[#FFB000] tracking-wide uppercase mb-0.5">
                                            Rated
                                        </div>

                                        <div className="text-sm font-bold text-[#F5F5F5]">
                                            Midnight in Paris
                                            <span className="font-normal text-[#A1A1AA]">
                                                {" "}—{" "}
                                                <i className="fa-solid fa-star text-[#FFB000] text-[10px]"></i>
                                                {" "}8/10
                                            </span>
                                        </div>

                                    </div>

                                    <span className="text-xs text-[#71717A] flex-shrink-0">
                                        Yesterday
                                    </span>

                                </div>

                                {/* 3 */}
                                <div className="flex items-start gap-3.5 py-3.5">

                                    <div className="w-2 h-2 rounded-full bg-[#FFC857] mt-1.5 flex-shrink-0 ring-4 ring-[#FFC857]/15"></div>

                                    <div className="flex-1 min-w-0">

                                        <div className="text-[11px] font-semibold text-[#FFC857] tracking-wide uppercase mb-0.5">
                                            Reviewed
                                        </div>

                                        <div className="text-sm font-bold text-[#F5F5F5]">
                                            Echoes of Yesterday
                                        </div>

                                    </div>

                                    <span className="text-xs text-[#71717A] flex-shrink-0">
                                        3 days ago
                                    </span>

                                </div>

                                {/* 4 */}
                                <div className="flex items-start gap-3.5 py-3.5">

                                    <div className="w-2 h-2 rounded-full bg-[#FF6B35] mt-1.5 flex-shrink-0 ring-4 ring-[#FF6B351A]"></div>

                                    <div className="flex-1 min-w-0">

                                        <div className="text-[11px] font-semibold text-[#FF6B35] tracking-wide uppercase mb-0.5">
                                            Added to Watchlist
                                        </div>

                                        <div className="text-sm font-bold text-[#F5F5F5]">
                                            Lunar Colony
                                        </div>

                                    </div>

                                    <span className="text-xs text-[#71717A] flex-shrink-0">
                                        1 week ago
                                    </span>

                                </div>

                                {/* Activity 5 */}
                                <div className="flex items-start gap-3.5 py-3.5 last:pb-0">

                                    <div className="w-2 h-2 rounded-full bg-[#FFB000] mt-1.5 flex-shrink-0 ring-4 ring-[#FFB0001A]"></div>

                                    <div className="flex-1 min-w-0">

                                        <div className="text-[11px] font-semibold text-[#FFB000] tracking-wide uppercase mb-0.5">
                                            Rated
                                        </div>

                                        <div className="text-sm font-bold text-[#F5F5F5]">
                                            Shadow Protocol
                                            <span className="font-normal text-[#A1A1AA]">
                                                {" "}—{" "}
                                                <i className="fa-solid fa-star text-[#FFB000] text-[10px]"></i>
                                                {" "}6/10
                                            </span>
                                        </div>

                                    </div>

                                    <span className="text-xs text-[#71717A] flex-shrink-0">
                                        2 weeks ago
                                    </span>

                                </div>

                            </div>

                        </div>

                        {/* breakdown */}
                        <div className="bg-[#151515] rounded-[16px] border border-[#2A2A2A] shadow-[0_2px_8px_rgba(0,0,0,0.4)] p-6">

                            <div className="flex items-center gap-3 mb-5">

                                <div className="w-1.5 h-6 bg-[#FFC857] rounded-full"></div>

                                <h2 className="text-base font-bold text-[#F5F5F5] tracking-tight">
                                    Genre Breakdown
                                </h2>

                            </div>

                            <div className="space-y-4">

                                <div className="flex items-center gap-3">

                                    <span className="text-xs font-semibold text-[#D4D4D8] w-16 flex-shrink-0">
                                        Action
                                    </span>

                                    <div className="flex-1 h-3.5 bg-[#1C1C1C] rounded-full overflow-hidden">

                                        <div
                                            className="h-full bg-[#C1121F] rounded-full"
                                            style={{ width: "38%" }}
                                        ></div>

                                    </div>

                                    <span className="text-xs font-bold text-[#71717A] w-9 text-right">
                                        38%
                                    </span>

                                </div>

                                <div className="flex items-center gap-3">

                                    <span className="text-xs font-semibold text-[#D4D4D8] w-16 flex-shrink-0">
                                        Sci-Fi
                                    </span>

                                    <div className="flex-1 h-3.5 bg-[#1C1C1C] rounded-full overflow-hidden">

                                        <div
                                            className="h-full bg-[#60A5FA] rounded-full"
                                            style={{ width: "24%" }}
                                        ></div>

                                    </div>

                                    <span className="text-xs font-bold text-[#71717A] w-9 text-right">
                                        24%
                                    </span>

                                </div>

                                <div className="flex items-center gap-3">

                                    <span className="text-xs font-semibold text-[#D4D4D8] w-16 flex-shrink-0">
                                        Drama
                                    </span>

                                    <div className="flex-1 h-3.5 bg-[#1C1C1C] rounded-full overflow-hidden">

                                        <div
                                            className="h-full bg-[#FFC857] rounded-full"
                                            style={{ width: "18%" }}
                                        ></div>

                                    </div>

                                    <span className="text-xs font-bold text-[#71717A] w-9 text-right">
                                        18%
                                    </span>

                                </div>

                                <div className="flex items-center gap-3">

                                    <span className="text-xs font-semibold text-[#D4D4D8] w-16 flex-shrink-0">
                                        Thriller
                                    </span>

                                    <div className="flex-1 h-3.5 bg-[#1C1C1C] rounded-full overflow-hidden">

                                        <div
                                            className="h-full bg-[#E85D04] rounded-full"
                                            style={{ width: "12%" }}
                                        ></div>

                                    </div>

                                    <span className="text-xs font-bold text-[#71717A] w-9 text-right">
                                        12%
                                    </span>

                                </div>

                                <div className="flex items-center gap-3">

                                    <span className="text-xs font-semibold text-[#D4D4D8] w-16 flex-shrink-0">
                                        Other
                                    </span>

                                    <div className="flex-1 h-3.5 bg-[#1C1C1C] rounded-full overflow-hidden">

                                        <div
                                            className="h-full bg-[#A1A1AA] rounded-full"
                                            style={{ width: "8%" }}
                                        ></div>

                                    </div>

                                    <span className="text-xs font-bold text-[#71717A] w-9 text-right">
                                        8%
                                    </span>

                                </div>

                            </div>

                            <div className="mt-6 pt-5 border-t border-[#222222]">

                                <div className="grid grid-cols-2 gap-3">

                                    <div className="bg-[#1C1C1C] rounded-[12px] p-3.5 text-center">

                                        <div className="text-lg font-black text-[#FF6B35]">
                                            8.2
                                        </div>

                                        <div className="text-[10px] font-semibold text-[#71717A] tracking-wider uppercase">
                                            Avg Rating
                                        </div>

                                    </div>

                                    <div className="bg-[#1C1C1C] rounded-[12px] p-3.5 text-center">

                                        <div className="text-lg font-black text-[#F5F5F5]">
                                            156
                                        </div>

                                        <div className="text-[10px] font-semibold text-[#71717A] tracking-wider uppercase">
                                            Total Watched
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                    {/* recently watched */}
                    <div className="mb-8 mt-8">

                        <div className="flex items-center justify-between mb-5">

                            <div className="flex items-center gap-3">

                                <div className="w-1.5 h-6 bg-[#22C55E] rounded-full"></div>

                                <h2 className="text-base font-bold text-[#F5F5F5] tracking-tight">
                                    Recently Watched
                                </h2>

                            </div>

                            <Link
                                to="/movies"
                                className="text-sm text-[#71717A] hover:text-[#FF6B35] font-semibold flex items-center gap-1.5 transition-all duration-300 group"
                            >
                                View All
                                <i className="fa-solid fa-arrow-right text-xs group-hover:translate-x-0.5 transition-transform"></i>
                            </Link>

                        </div>

                        <div className="flex gap-5 overflow-x-auto pb-2">

                            {moviesData.slice(0, 6).map((movie) => (
                                <div key={movie.id} className="flex-shrink-0 w-44">
                                    <MovieCard
                                        image={movie.image}
                                        title={movie.title}
                                        genre={movie.genre}
                                        rating={movie.rating}
                                    />
                                </div>
                            ))}

                        </div>

                    </div>

                </div>

            </main>
            <Footer />
        </>
    );
}

export default Profile;