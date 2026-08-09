import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TrendingMovies from "../components/TrendingMovies";
import PopularMovies from "../components/PopularMovies";
import TopRatedMovies from "../components/TopRatedMovies";
import UpcomingMovies from "../components/UpcomingMovies";

import heroPoster from "../assets/images/hero-poster.jpg";

function Home() {
    return (
        <>
            <Navbar />

            <main>

                {/* hero section */}
                <section
                    id="hero-section"
                    className="relative w-full min-h-[600px] overflow-hidden bg-gradient-to-br from-[#080808] via-[#0D0D0D] to-[#1A0D07]"
                >

                    <div className="absolute inset-0 overflow-hidden">

                        <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#FF6B35]/10 rounded-full blur-3xl"></div>

                        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-[#E85D04]/10 rounded-full blur-3xl"></div>

                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#FFB000]/5 rounded-full blur-3xl"></div>

                    </div>

                    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[600px] flex items-center">

                        <div className="flex flex-col lg:flex-row items-center gap-12 w-full">

                            {/* left */}
                            <div className="flex-1 max-w-xl">

                                <span className="inline-block px-3 py-1 text-xs font-bold uppercase bg-[#FF6B351A] text-[#FF6B35] rounded-full mb-5">
                                    <i className="fa-solid fa-sparkles mr-2 text-[#FFB000]"></i>
                                    Featured Film
                                </span>

                                <h1 className="text-5xl lg:text-6xl font-black text-[#FFFFFF] mb-4 leading-tight">
                                    Spider Man :
                                    <span className="text-[#FF6B35]"> Brand New Day</span>
                                </h1>

                                <p className="text-[#A1A1AA] text-lg leading-relaxed mb-6">
                                    A gripping tale of survival and redemption in a world
                                    teetering on the edge of collapse. One soldier must
                                    confront his past to save what remains of humanity.
                                </p>

                                <div className="flex flex-wrap gap-3 mb-7">

                                    <span className="px-3 py-2 bg-[#1C1C1C] border border-[#2A2A2A] rounded-full text-sm text-[#D4D4D8]">
                                        ⭐ 8.7 / 10
                                    </span>

                                    <span className="px-3 py-2 bg-[#1C1C1C] border border-[#2A2A2A] rounded-full text-sm text-[#D4D4D8]">
                                        2024
                                    </span>

                                    <span className="px-3 py-2 bg-[#1C1C1C] border border-[#2A2A2A] rounded-full text-sm text-[#D4D4D8]">
                                        2h 28m
                                    </span>

                                    <span className="px-3 py-2 bg-[#1C1C1C] border border-[#2A2A2A] rounded-full text-sm text-[#D4D4D8]">
                                        Action
                                    </span>

                                </div>

                                {/* buttons */}
                                <div className="flex gap-4">

                                    <Link
                                        to="/movie-details"
                                        className="px-7 py-3 bg-[#FF6B35] text-white rounded-lg hover:bg-[#E85D04] font-semibold transition-all duration-[250ms] shadow-[0_8px_24px_rgba(255,107,53,0.3)] hover:shadow-[0_16px_40px_rgba(255,107,53,0.4)] hover:-translate-y-[2px]"
                                    >
                                        <i className="fa-solid fa-play mr-2"></i>
                                        Watch Now
                                    </Link>

                                    <button
                                        className="px-7 py-3 bg-[#1C1C1C] border border-[#3A3A3A] text-[#D4D4D8] rounded-lg hover:bg-[#242424] hover:border-[#FF6B35] hover:text-[#FF6B35] font-semibold transition-all duration-[250ms]"
                                    >
                                        <i className="fa-regular fa-heart mr-2"></i>
                                        Add to Favorites
                                    </button>

                                </div>

                            </div>

                            {/* right ps */}
                            <div className="hidden lg:flex flex-1 justify-end">

                                <div className="w-[380px] h-[500px] rounded-3xl overflow-hidden border border-[#3A3A3A] shadow-[0_24px_60px_rgba(255,107,53,0.2)] bg-cover bg-center">

                                    <img
                                        src="https://media.themoviedb.org/t/p/w440_and_h660_face/iPOn6DinuVyLY17YM9mKuPofV08.jpg"
                                        alt="The Dark Horizon"
                                        className="w-full h-full"
                                    />

                                </div>

                            </div>

                        </div>

                    </div>

                </section>

                {/* movie sections */}
                <div className="bg-[#080808]">
                    <TrendingMovies />

                    <PopularMovies />

                    <TopRatedMovies />

                    <UpcomingMovies />
                </div>

            </main>

            <Footer />

        </>
    );
}

export default Home;