import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Login() {
    return (
        <>
            <Navbar />

            <main className="pt-20 text-center bg-[#080808] min-h-screen">
                <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                    {/* blobs  */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B35]/10 rounded-full blur-3xl animate-float"></div>
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E85D04]/10 rounded-full blur-3xl animate-float-delayed"></div>
                    </div>

                    <div
                        className="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8 lg:gap-16 items-center relative z-10 animate-fade-in">

                        {/* left   */}
                        <div
                            className="bg-[#151515] rounded-[16px] border border-[#2A2A2A] shadow-[0_16px_40px_rgba(0,0,0,0.5)] p-8 sm:p-10 w-full max-w-md mx-auto">
                            <div className="text-center mb-8">
                                <div
                                    className="inline-flex w-12 h-12 bg-[#FF6B351A] text-[#FF6B35] rounded-[12px] items-center justify-center mb-4 shadow-[0_2px_8px_rgba(255,107,53,0.2)]">
                                    <i className="fa-solid fa-right-to-bracket text-xl"></i>
                                </div>
                                <h1 className="text-2xl font-bold text-[#F5F5F5] tracking-tight mb-2">Welcome Back</h1>
                                <p className="text-sm text-[#A1A1AA]">Access your Movie Explorer account</p>
                            </div>

                            <form onsubmit="event.preventDefault(); window.location.href='index.html';" className="space-y-5">
                                <div>
                                    <label for="email" className="block text-sm font-semibold text-[#D4D4D8] mb-1.5">Email Address</label>
                                    <input type="email" id="email" required placeholder="user@example.com"
                                        className="w-full bg-[#1C1C1C] border border-[#3A3A3A] rounded-[10px] px-4 py-3 text-sm text-[#F5F5F5] placeholder-[#71717A] transition-all duration-[250ms] ease-[ease] focus:outline-none focus:border-[#FF6B35] focus:ring-4 focus:ring-[#FF6B35]/15 shadow-sm" />
                                </div>

                                <div>
                                    <div className="flex items-center justify-between mb-1.5">
                                        <label for="password" className="block text-sm font-semibold text-[#D4D4D8]">Password</label>
                                        <Link to="#" className="text-xs font-semibold text-[#FF6B35] hover:text-[#E85D04] transition-colors">Forgot
                                            password?</Link>
                                    </div>
                                    <input type="password" id="password" required placeholder="••••••••"
                                        className="w-full bg-[#1C1C1C] border border-[#3A3A3A] rounded-[10px] px-4 py-3 text-sm text-[#F5F5F5] placeholder-[#71717A] transition-all duration-[250ms] ease-[ease] focus:outline-none focus:border-[#FF6B35] focus:ring-4 focus:ring-[#FF6B35]/15 shadow-sm" />
                                </div>

                                <button type="submit"
                                    className="w-full bg-[#FF6B35] hover:bg-[#E85D04] active:bg-[#C2410C] text-white font-bold py-3.5 px-4 rounded-[10px] transition-all duration-[250ms] ease-[ease] shadow-[0_8px_24px_rgba(255,107,53,0.25)] hover:shadow-[0_20px_50px_rgba(255,107,53,0.35)] hover:-translate-y-[2px] active:translate-y-0 mt-2">
                                    Sign In <i className="fa-solid fa-arrow-right ml-1 text-xs"></i>
                                </button>
                            </form>

                            <div className="mt-8 flex items-center gap-4">
                                <div className="flex-1 h-px bg-[#2A2A2A]"></div>
                                <span className="text-xs font-semibold text-[#71717A] uppercase tracking-wider">Or continue with</span>
                                <div className="flex-1 h-px bg-[#2A2A2A]"></div>
                            </div>

                            <div className="mt-6 grid grid-cols-2 gap-4">
                                <button
                                    className="flex items-center justify-center gap-2 bg-[#1C1C1C] border border-[#3A3A3A] hover:border-[#FF6B35] hover:bg-[#242424] text-[#D4D4D8] font-semibold py-2.5 px-4 rounded-[10px] transition-all duration-[250ms] ease-[ease] shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
                                    <i className="fa-brands fa-google text-[#FF6B35]"></i> <span className="text-xs">Google</span>
                                </button>
                                <button
                                    className="flex items-center justify-center gap-2 bg-[#1C1C1C] border border-[#3A3A3A] hover:border-[#FF6B35] hover:bg-[#242424] text-[#D4D4D8] font-semibold py-2.5 px-4 rounded-[10px] transition-all duration-[250ms] ease-[ease] shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
                                    <i className="fa-brands fa-github text-[#F5F5F5]"></i> <span className="text-xs">GitHub</span>
                                </button>
                            </div>

                            <p className="mt-8 text-center text-sm text-[#A1A1AA]">
                                Don't have an account?
                                <a href="signin.html" className="font-bold text-[#FF6B35] hover:text-[#E85D04] transition-colors"> Sign up</a>
                            </p>
                        </div>

                        {/* right */}
                        <div
                            className="hidden lg:block bg-[#151515]/60 backdrop-blur-md rounded-[16px] border border-[#2A2A2A] shadow-[0_8px_24px_rgba(0,0,0,0.4)] p-8 h-fit animate-slide-up">
                            <h3 className="text-sm font-bold text-[#F5F5F5] uppercase tracking-widest mb-6 border-b border-[#2A2A2A] pb-3">Why
                                Join Us?</h3>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div
                                        className="w-10 h-10 rounded-[10px] bg-[#FF6B351A] text-[#FF6B35] flex items-center justify-center flex-shrink-0">
                                        <i className="fa-solid fa-wand-magic-sparkles"></i>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-[#F5F5F5] mb-1">Personalized Recommendations</h4>
                                        <p className="text-xs text-[#A1A1AA] leading-relaxed">Discover movies tailored precisely to your unique taste
                                            and viewing history.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div
                                        className="w-10 h-10 rounded-[10px] bg-[#FFB0001A] text-[#FFB000] flex items-center justify-center flex-shrink-0">
                                        <i className="fa-solid fa-list-check"></i>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-[#F5F5F5] mb-1">Track Your Watchlist</h4>
                                        <p className="text-xs text-[#A1A1AA] leading-relaxed">Save movies to your watchlist and never forget what you
                                            wanted to see.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div
                                        className="w-10 h-10 rounded-[10px] bg-[#22C55E]/10 text-[#22C55E] flex items-center justify-center flex-shrink-0">
                                        <i className="fa-solid fa-star"></i>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-[#F5F5F5] mb-1">Rate & Review Movies</h4>
                                        <p className="text-xs text-[#A1A1AA] leading-relaxed">Share your opinions with the community and build your
                                            critic profile.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div
                                        className="w-10 h-10 rounded-[10px] bg-[#C1121F1A] text-[#C1121F] flex items-center justify-center flex-shrink-0">
                                        <i className="fa-solid fa-bell"></i>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-[#F5F5F5] mb-1">Get Notifications</h4>
                                        <p className="text-xs text-[#A1A1AA] leading-relaxed">Be the first to know when highly anticipated movies hit
                                            the theaters.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </main>

            <Footer />
        </>
    );
}

export default Login;