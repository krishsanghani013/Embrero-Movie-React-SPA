import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import moviesData from "../data/movies.json";

function MovieDetails() {
    return (
        <>
            <Navbar />

            <main className="pt-24 pb-16 bg-[#080808] min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div
                        className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#71717A] uppercase mb-8 animate-fade-in">
                        <Link to="/" className="hover:text-[#FF6B35] transition-colors duration-[250ms]">Home</Link>
                        <i className="fa-solid fa-chevron-right text-[10px] text-[#3A3A3A]"></i>
                        <Link to="/movies" className="hover:text-[#FF6B35] transition-colors duration-[250ms]">Movies</Link>
                        <i className="fa-solid fa-chevron-right text-[10px] text-[#3A3A3A]"></i>
                        <span className="text-[#D4D4D8]">Spider Man Brand New Day</span>
                    </div>

                    {/* hero */}
                    <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 mb-16">

                        {/* left */}
                        <div className="w-full lg:w-[320px] flex-shrink-0 animate-slide-up">
                            <div
                                className="w-full aspect-[2/3] rounded-[16px] overflow-hidden shadow-[0_16px_40px_rgba(255,107,53,0.15)] border border-[#2A2A2A] relative group bg-[#1C1C1C]">
                                <img src="https://media.themoviedb.org/t/p/w440_and_h660_face/iPOn6DinuVyLY17YM9mKuPofV08.jpg"
                                    alt="Spider Man Brand New Day"
                                    className="w-full h-full object-cover transition-transform duration-[250ms] group-hover:scale-105" />
                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-[#080808]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-[250ms] ease-[ease]">
                                </div>
                            </div>
                        </div>

                        {/* right */}
                        <div className="flex-1 animate-slide-up-delay">

                            <div className="mb-6 pb-6 border-b border-[#2A2A2A]">
                                <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-[#FFFFFF] mb-2">
                                    Spider Man Brand New Day
                                </h1>
                                <p className="text-lg sm:text-xl text-[#A1A1AA] font-medium tracking-wide uppercase">
                                    Even if no one remembers me, I'll keep protecting them.
                                </p>
                            </div>

                            {/* stats */}
                            <div className="flex flex-wrap gap-4 sm:gap-6 mb-8">
                                <div
                                    className="bg-[#151515] border border-[#2A2A2A] rounded-[16px] p-4 flex-1 min-w-[120px] shadow-[0_2px_8px_rgba(0,0,0,0.4)] hover:shadow-[0_8px_24px_rgba(255,107,53,0.1)] transition-all duration-[250ms]">
                                    <div className="text-[10px] font-bold text-[#71717A] tracking-wider uppercase mb-1">Rating</div>
                                    <div className="text-lg font-bold text-[#F5F5F5] flex items-center gap-1.5"><i
                                        className="fa-solid fa-star text-[#FFB000] text-sm"></i> 8.7 / 10</div>
                                </div>
                                <div
                                    className="bg-[#151515] border border-[#2A2A2A] rounded-[16px] p-4 flex-1 min-w-[120px] shadow-[0_2px_8px_rgba(0,0,0,0.4)] hover:shadow-[0_8px_24px_rgba(255,107,53,0.1)] transition-all duration-[250ms]">
                                    <div className="text-[10px] font-bold text-[#71717A] tracking-wider uppercase mb-1">Release Date</div>
                                    <div className="text-lg font-bold text-[#F5F5F5]">Mar 01, 2024</div>
                                </div>
                                <div
                                    className="bg-[#151515] border border-[#2A2A2A] rounded-[16px] p-4 flex-1 min-w-[120px] shadow-[0_2px_8px_rgba(0,0,0,0.4)] hover:shadow-[0_8px_24px_rgba(255,107,53,0.1)] transition-all duration-[250ms]">
                                    <div className="text-[10px] font-bold text-[#71717A] tracking-wider uppercase mb-1">Runtime</div>
                                    <div className="text-lg font-bold text-[#F5F5F5]">2h 46m</div>
                                </div>
                                <div
                                    className="bg-[#151515] border border-[#2A2A2A] rounded-[16px] p-4 flex-1 min-w-[120px] shadow-[0_2px_8px_rgba(0,0,0,0.4)] hover:shadow-[0_8px_24px_rgba(255,107,53,0.1)] transition-all duration-[250ms]">
                                    <div className="text-[10px] font-bold text-[#71717A] tracking-wider uppercase mb-1">Language</div>
                                    <div className="text-lg font-bold text-[#F5F5F5]">English</div>
                                </div>
                            </div>

                            {/* genres  */}
                            <div className="mb-8">
                                <h3 className="text-[11px] font-bold text-[#71717A] tracking-wider uppercase mb-3">Genres</h3>
                                <div className="flex flex-wrap gap-2.5">
                                    <Link to="/movies"
                                        className="px-4 py-2 bg-[#1C1C1C] border border-[#3A3A3A] rounded-[9999px] text-sm font-semibold text-[#D4D4D8] shadow-[0_2px_8px_rgba(0,0,0,0.3)] hover:border-[#FF6B35] hover:text-[#FF6B35] hover:-translate-y-[2px] transition-all duration-[250ms]">Action</Link>
                                    <Link to="/movies"
                                        className="px-4 py-2 bg-[#1C1C1C] border border-[#3A3A3A] rounded-[9999px] text-sm font-semibold text-[#D4D4D8] shadow-[0_2px_8px_rgba(0,0,0,0.3)] hover:border-[#FF6B35] hover:text-[#FF6B35] hover:-translate-y-[2px] transition-all duration-[250ms]">Sci-Fi</Link>
                                    <Link to="/movies"
                                        className="px-4 py-2 bg-[#1C1C1C] border border-[#3A3A3A] rounded-[9999px] text-sm font-semibold text-[#D4D4D8] shadow-[0_2px_8px_rgba(0,0,0,0.3)] hover:border-[#FF6B35] hover:text-[#FF6B35] hover:-translate-y-[2px] transition-all duration-[250ms]">Drama</Link>
                                </div>
                            </div>

                            {/* synopsis  */}
                            <div className="mb-8">
                                <h3
                                    className="text-[11px] font-bold text-[#71717A] tracking-wider uppercase mb-3 pb-2 border-b border-[#2A2A2A]">
                                    Overview / Synopsis</h3>
                                <p className="text-base text-[#D4D4D8] leading-relaxed">
                                    The movie follows an isolated Peter Parker four years after No Way Home as he protects a New York City that no longer remembers him
                                </p>
                            </div>

                            {/* metadata */}
                            <div
                                className="grid grid-cols-2 gap-6 mb-8 bg-[#151515] border border-[#2A2A2A] rounded-[16px] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
                                <div>
                                    <div className="text-[10px] font-bold text-[#71717A] tracking-wider uppercase mb-1">Director</div>
                                    <div className="text-sm font-bold text-[#F5F5F5]">Director</div>
                                </div>
                                <div>
                                    <div className="text-[10px] font-bold text-[#71717A] tracking-wider uppercase mb-1">Budget</div>
                                    <div className="text-sm font-bold text-[#F5F5F5]">$225 Million</div>
                                </div>
                                <div>
                                    <div className="text-[10px] font-bold text-[#71717A] tracking-wider uppercase mb-1">Status</div>
                                    <div className="text-sm font-bold text-[#F5F5F5]">Released</div>
                                </div>
                                <div>
                                    <div className="text-[10px] font-bold text-[#71717A] tracking-wider uppercase mb-1">Production</div>
                                    <div className="text-sm font-bold text-[#F5F5F5]"> Columbia Pictures, Marvel Studios, and Amy Pascal</div>
                                </div>
                            </div>

                            {/* buttons */}
                            <div className="flex flex-wrap gap-4">
                                <button
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-[#FF6B35] hover:bg-[#E85D04] active:bg-[#C2410C] text-white text-sm font-bold rounded-[10px] transition-all duration-[250ms] ease-[ease] hover:shadow-[0_20px_50px_rgba(255,107,53,0.3)] hover:-translate-y-[2px] active:translate-y-0"
                                    data-favorite-btn data-movie-id="dune-2">
                                    <i className="fa-regular fa-heart text-base"></i> Add to Watchlist
                                </button>
                                <button
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-[#1C1C1C] border border-[#3A3A3A] text-[#D4D4D8] hover:bg-[#242424] hover:border-[#FF6B35] hover:text-[#FF6B35] text-sm font-bold rounded-[10px] transition-all duration-[250ms] ease-[ease] shadow-[0_2px_8px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_24px_rgba(255,107,53,0.1)] hover:-translate-y-[2px] active:translate-y-0">
                                    <i className="fa-solid fa-play text-base"></i> Watch Trailer
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* cast */}
                    <section className="mb-16 animate-slide-up-delay-2">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-1.5 h-7 bg-[#FF6B35] rounded-full"></div>
                            <h2 className="text-[22px] sm:text-[26px] font-bold tracking-tight text-[#F5F5F5]">Cast & Crew</h2>
                        </div>
                        <div className="bg-[#151515] border border-[#2A2A2A] rounded-[16px] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
                            <div className="flex gap-6 overflow-x-auto pb-4 cast-scroll">

                                {/* cast 1 */}
                                <div className="flex flex-col items-center w-28 flex-shrink-0 group cursor-pointer">
                                    <div
                                        className="w-24 h-24 rounded-full overflow-hidden mb-3 border-[3px] border-transparent group-hover:border-[#FF6B35] transition-all duration-[250ms] shadow-[0_2px_8px_rgba(0,0,0,0.4)] group-hover:shadow-[0_8px_24px_rgba(255,107,53,0.2)]">
                                        <img src="https://media.themoviedb.org/t/p/w132_and_h132_face/xKBAaPIa1c7tzZD3Y0MhBLv4hPE.jpg" alt="Tom Holland"
                                            className="w-full h-full object-cover transition-transform duration-[250ms] group-hover:scale-110" />
                                    </div>
                                    <div
                                        className="text-sm font-bold text-[#F5F5F5] text-center leading-tight mb-1 group-hover:text-[#FF6B35] transition-colors duration-[250ms]">
                                        Tom Holland</div>
                                    <div className="text-[11px] text-[#71717A] text-center">as Peter Parker</div>
                                </div>

                                {/* cast 2 */}
                                <div className="flex flex-col items-center w-28 flex-shrink-0 group cursor-pointer">
                                    <div
                                        className="w-24 h-24 rounded-full overflow-hidden mb-3 border-[3px] border-transparent group-hover:border-[#FF6B35] transition-all duration-[250ms] shadow-[0_2px_8px_rgba(0,0,0,0.4)] group-hover:shadow-[0_8px_24px_rgba(255,107,53,0.2)]">
                                        <img src="https://media.themoviedb.org/t/p/w132_and_h132_face/92FddzBfK50XOUbtwjqHPraoGHy.jpg" alt="Sadie Sink"
                                            className="w-full h-full object-cover transition-transform duration-[250ms] group-hover:scale-110" />
                                    </div>
                                    <div
                                        className="text-sm font-bold text-[#F5F5F5] text-center leading-tight mb-1 group-hover:text-[#FF6B35] transition-colors duration-[250ms]">
                                        Sadie Sink</div>
                                    <div className="text-[11px] text-[#71717A] text-center">as Jean Grey</div>
                                </div>

                                {/* cast 3 */}
                                <div className="flex flex-col items-center w-28 flex-shrink-0 group cursor-pointer">
                                    <div
                                        className="w-24 h-24 rounded-full overflow-hidden mb-3 border-[3px] border-transparent group-hover:border-[#FF6B35] transition-all duration-[250ms] shadow-[0_2px_8px_rgba(0,0,0,0.4)] group-hover:shadow-[0_8px_24px_rgba(255,107,53,0.2)]">
                                        <img src="https://media.themoviedb.org/t/p/w132_and_h132_face/bEA15zMnkcXlRroYjKrFUWiiK7y.jpg" alt="Tramell Tillman"
                                            className="w-full h-full object-cover transition-transform duration-[250ms] group-hover:scale-110" />
                                    </div>
                                    <div
                                        className="text-sm font-bold text-[#F5F5F5] text-center leading-tight mb-1 group-hover:text-[#FF6B35] transition-colors duration-[250ms]">
                                        Tramell Tillman</div>
                                    <div className="text-[11px] text-[#71717A] text-center">as William 'Bill' Metzger</div>
                                </div>

                                {/* cast 4 
            <div className="flex flex-col items-center w-28 flex-shrink-0 group cursor-pointer">
              <div className="w-24 h-24 rounded-full overflow-hidden mb-3 border-[3px] border-transparent group-hover:border-[#FF6B35] transition-all duration-[250ms] shadow-[0_2px_8px_rgba(0,0,0,0.4)] group-hover:shadow-[0_8px_24px_rgba(255,107,53,0.2)]">
                <img src="https://placehold.co/100x100/1C1C1C/71717A?text=JB" alt="Javier Bardem" className="w-full h-full object-cover transition-transform duration-[250ms] group-hover:scale-110">
              </div>
              <div className="text-sm font-bold text-[#F5F5F5] text-center leading-tight mb-1 group-hover:text-[#FF6B35] transition-colors duration-[250ms]">Javier Bardem</div>
              <div className="text-[11px] text-[#71717A] text-center">as Stilgar</div>
            </div> -->

            {/* Cast 5 
            <div className="flex flex-col items-center w-28 flex-shrink-0 group cursor-pointer">
              <div className="w-24 h-24 rounded-full overflow-hidden mb-3 border-[3px] border-transparent group-hover:border-[#FF6B35] transition-all duration-[250ms] shadow-[0_2px_8px_rgba(0,0,0,0.4)] group-hover:shadow-[0_8px_24px_rgba(255,107,53,0.2)]">
                <img src="https://placehold.co/100x100/1C1C1C/71717A?text=JBr" alt="Josh Brolin" className="w-full h-full object-cover transition-transform duration-[250ms] group-hover:scale-110">
              </div>
              <div className="text-sm font-bold text-[#F5F5F5] text-center leading-tight mb-1 group-hover:text-[#FF6B35] transition-colors duration-[250ms]">Josh Brolin</div>
              <div className="text-[11px] text-[#71717A] text-center">as Gurney Halleck</div>
            </div>  */}

                                {/* cast 6 
            <div className="flex flex-col items-center w-28 flex-shrink-0 group cursor-pointer">
              <div className="w-24 h-24 rounded-full overflow-hidden mb-3 border-[3px] border-transparent group-hover:border-[#FF6B35] transition-all duration-[250ms] shadow-[0_2px_8px_rgba(0,0,0,0.4)] group-hover:shadow-[0_8px_24px_rgba(255,107,53,0.2)]">
                <img src="https://placehold.co/100x100/1C1C1C/71717A?text=AB" alt="Austin Butler" className="w-full h-full object-cover transition-transform duration-[250ms] group-hover:scale-110">
              </div>
              <div className="text-sm font-bold text-[#F5F5F5] text-center leading-tight mb-1 group-hover:text-[#FF6B35] transition-colors duration-[250ms]">Austin Butler</div>
              <div className="text-[11px] text-[#71717A] text-center">as Feyd-Rautha</div>
            </div>  */}

                            </div>
                        </div>
                    </section>

                    {/* rating */}
                    <section className="mb-16 animate-slide-up-delay-3">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-1.5 h-7 bg-[#FF6B35] rounded-full"></div>
                            <h2 className="text-[22px] sm:text-[26px] font-bold tracking-tight text-[#F5F5F5]">Ratings Breakdown</h2>
                        </div>
                        <div className="bg-[#151515] border border-[#2A2A2A] rounded-[16px] p-6 lg:p-10 shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
                            <div className="flex flex-col md:flex-row gap-10 items-center justify-center">

                                <div className="text-center md:text-left flex-shrink-0">
                                    <div className="text-6xl lg:text-7xl font-black text-[#FFFFFF] mb-2 tracking-tight">
                                        8.7<span className="text-2xl text-[#71717A] font-bold tracking-normal"> / 10</span>
                                    </div>
                                    <div className="text-sm font-bold text-[#A1A1AA] tracking-widest uppercase">Based on 12,486 Ratings</div>
                                </div>

                                <div className="w-px h-24 bg-[#2A2A2A] hidden md:block"></div>

                                <div className="w-full max-w-md space-y-3">


                                    <div className="flex items-center gap-3">
                                        <span className="text-sm font-bold text-[#D4D4D8] w-8">5 <i
                                            className="fa-solid fa-star text-[10px] text-[#FFB000]"></i></span>
                                        <div className="flex-1 h-2.5 bg-[#1C1C1C] rounded-full overflow-hidden">
                                            <div className="h-full bg-[#FF6B35] rounded-full rating-bar-fill" style={{ width: '85%' }}></div>
                                        </div>
                                        <span className="text-xs font-semibold text-[#71717A] w-8 text-right">85%</span>
                                    </div>


                                    <div className="flex items-center gap-3">
                                        <span className="text-sm font-bold text-[#D4D4D8] w-8">4 <i
                                            className="fa-solid fa-star text-[10px] text-[#FFB000]"></i></span>
                                        <div className="flex-1 h-2.5 bg-[#1C1C1C] rounded-full overflow-hidden">
                                            <div className="h-full bg-[#FF6B35] rounded-full rating-bar-fill" style={{ width: '10%' }}></div>
                                        </div>
                                        <span className="text-xs font-semibold text-[#71717A] w-8 text-right">10%</span>
                                    </div>


                                    <div className="flex items-center gap-3">
                                        <span className="text-sm font-bold text-[#D4D4D8] w-8">3 <i
                                            className="fa-solid fa-star text-[10px] text-[#FFB000]"></i></span>
                                        <div className="flex-1 h-2.5 bg-[#1C1C1C] rounded-full overflow-hidden">
                                            <div className="h-full bg-[#FF6B35] rounded-full rating-bar-fill" style={{ width: '3%' }}></div>
                                        </div>
                                        <span className="text-xs font-semibold text-[#71717A] w-8 text-right">3%</span>
                                    </div>


                                    <div className="flex items-center gap-3">
                                        <span className="text-sm font-bold text-[#D4D4D8] w-8">2 <i
                                            className="fa-solid fa-star text-[10px] text-[#FFB000]"></i></span>
                                        <div className="flex-1 h-2.5 bg-[#1C1C1C] rounded-full overflow-hidden">
                                            <div className="h-full bg-[#FF6B35] rounded-full rating-bar-fill" style={{ width: '1%' }}></div>
                                        </div>
                                        <span className="text-xs font-semibold text-[#71717A] w-8 text-right">1%</span>
                                    </div>


                                    <div className="flex items-center gap-3">
                                        <span className="text-sm font-bold text-[#D4D4D8] w-8">1 <i
                                            className="fa-solid fa-star text-[10px] text-[#FFB000]"></i></span>
                                        <div className="flex-1 h-2.5 bg-[#1C1C1C] rounded-full overflow-hidden">
                                            <div className="h-full bg-[#FF6B35] rounded-full rating-bar-fill" style={{ width: '1%' }}></div>
                                        </div>
                                        <span className="text-xs font-semibold text-[#71717A] w-8 text-right">1%</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>

                    {/* similar */}
                    <section data-carousel data-animate className="mb-8">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-3">
                                <div className="w-1.5 h-7 bg-[#FF6B35] rounded-full"></div>
                                <h2 className="text-[22px] sm:text-[26px] font-bold tracking-tight text-[#F5F5F5]">Similar Movies</h2>
                            </div>
                            <Link to="/movies"
                                className="text-sm text-[#71717A] hover:text-[#FF6B35] font-semibold transition-all duration-[250ms] ease-[ease] group flex items-center gap-1.5">View
                                All <i
                                    className="fa-solid fa-arrow-right text-xs group-hover:translate-x-0.5 transition-transform duration-[250ms]"></i></Link>
                        </div>

                        <div className="relative group/carousel">
                            <div data-carousel-track
                                className="flex gap-5 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory scroll-smooth">

                                {moviesData.map((movie) => (
                                    <div key={movie.id} className="flex-shrink-0 w-44 sm:w-48 snap-start">
                                        <MovieCard
                                            image={movie.image}
                                            title={movie.title}
                                            genre={movie.genre}
                                            rating={movie.rating}
                                        />
                                    </div>
                                ))}

                            </div>

                            {/* carousel */}
                            <button data-carousel-prev
                                className="absolute top-1/2 -left-4 -translate-y-1/2 w-10 h-10 rounded-full bg-[#1C1C1C] border border-[#2A2A2A] shadow-[0_2px_8px_rgba(0,0,0,0.4)] flex items-center justify-center text-[#D4D4D8] hover:text-[#FF6B35] hover:shadow-[0_8px_24px_rgba(255,107,53,0.15)] opacity-0 group-hover/carousel:opacity-100 transition-all duration-[250ms] ease-[ease] z-10 hover:-translate-y-1/2 hover:scale-105"
                                aria-label="Previous movies">
                                <i className="fa-solid fa-chevron-left text-sm"></i>
                            </button>
                            <button data-carousel-next
                                className="absolute top-1/2 -right-4 -translate-y-1/2 w-10 h-10 rounded-full bg-[#1C1C1C] border border-[#2A2A2A] shadow-[0_2px_8px_rgba(0,0,0,0.4)] flex items-center justify-center text-[#D4D4D8] hover:text-[#FF6B35] hover:shadow-[0_8px_24px_rgba(255,107,53,0.15)] opacity-0 group-hover/carousel:opacity-100 transition-all duration-[250ms] ease-[ease] z-10 hover:-translate-y-1/2 hover:scale-105"
                                aria-label="Next movies">
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