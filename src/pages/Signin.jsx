import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Signin() {
    return (
        <>
            <Navbar />

            <main className="pt-20 text-center bg-[#080808] min-h-screen">
                {/* <h1 className="text-4xl font-bold">Sign Up Page</h1> */}
                <main class="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                    {/* blobs  */}
                    <div class="absolute inset-0 overflow-hidden pointer-events-none z-0">
                        <div class="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#FF6B35]/10 rounded-full blur-3xl animate-float">
                        </div>
                        <div
                            class="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-[#E85D04]/10 rounded-full blur-3xl animate-float-delayed">
                        </div>
                    </div>

                    <div class="max-w-2xl w-full relative z-10 animate-fade-in">

                        {/* Step Indicator  */}
                        <div class="flex justify-between mb-8 relative">
                            {/* Progress Bar  */}
                            <div class="absolute top-1/2 left-0 right-0 h-1 bg-[#2A2A2A] -translate-y-1/2 rounded-full z-0"></div>
                            {/* Active Bar */}
                            <div id="progress-bar"
                                class="absolute top-1/2 left-0 h-1 bg-[#FF6B35] -translate-y-1/2 rounded-full z-0 transition-all duration-300 w-0">
                            </div>

                            <div class="relative z-10 flex flex-col items-center step-indicator" data-target="1">
                                <div
                                    class="w-10 h-10 rounded-full bg-[#FF6B35] text-white flex items-center justify-center font-bold shadow-[0_4px_12px_rgba(255,107,53,0.3)] transition-colors duration-300"
                                    id="step-1-icon">1</div>
                                <span class="text-xs font-bold text-[#FF6B35] mt-2 uppercase tracking-wide" id="step-1-text">Account</span>
                            </div>
                            <div class="relative z-10 flex flex-col items-center step-indicator" data-target="2">
                                <div
                                    class="w-10 h-10 rounded-full bg-[#1C1C1C] border-2 border-[#3A3A3A] text-[#71717A] flex items-center justify-center font-bold transition-colors duration-300"
                                    id="step-2-icon">2</div>
                                <span class="text-xs font-semibold text-[#71717A] mt-2 uppercase tracking-wide"
                                    id="step-2-text">Preferences</span>
                            </div>
                            <div class="relative z-10 flex flex-col items-center step-indicator" data-target="3">
                                <div
                                    class="w-10 h-10 rounded-full bg-[#1C1C1C] border-2 border-[#3A3A3A] text-[#71717A] flex items-center justify-center font-bold transition-colors duration-300"
                                    id="step-3-icon">3</div>
                                <span class="text-xs font-semibold text-[#71717A] mt-2 uppercase tracking-wide"
                                    id="step-3-text">Confirm</span>
                            </div>
                        </div>

                        {/* Form Card  */}
                        <div
                            class="bg-[#151515] rounded-[16px] border border-[#2A2A2A] shadow-[0_16px_40px_rgba(0,0,0,0.6)] p-8 sm:p-10 w-full relative">
                            <div class="text-center mb-8">
                                <h1 class="text-2xl font-bold text-[#F5F5F5] tracking-tight mb-2" id="form-title">Create Account</h1>
                                <p class="text-sm text-[#A1A1AA]" id="form-subtitle">Step 1 of 3</p>
                            </div>

                            <form id="signup-form" onsubmit="event.preventDefault(); nextStep();" class="space-y-6">

                                {/* STEP 1: ACCOUNT DETAILS  */}
                                <div id="step-1-content" class="block animate-slide-up">
                                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                                        <div>
                                            <label class="block text-sm font-semibold text-[#D4D4D8] mb-1.5">First Name</label>
                                            <input type="text" id="first-name" required placeholder="First Name"
                                                class="w-full bg-[#1C1C1C] border border-[#3A3A3A] rounded-[10px] px-4 py-3 text-sm text-[#F5F5F5] placeholder-[#71717A] transition-all duration-[250ms] focus:outline-none focus:border-[#FF6B35] focus:ring-4 focus:ring-[#FF6B35]/15 shadow-sm" />
                                        </div>
                                        <div>
                                            <label class="block text-sm font-semibold text-[#D4D4D8] mb-1.5">Last Name</label>
                                            <input type="text" id="last-name" required placeholder="Last Name"
                                                class="w-full bg-[#1C1C1C] border border-[#3A3A3A] rounded-[10px] px-4 py-3 text-sm text-[#F5F5F5] placeholder-[#71717A] transition-all duration-[250ms] focus:outline-none focus:border-[#FF6B35] focus:ring-4 focus:ring-[#FF6B35]/15 shadow-sm" />
                                        </div>
                                    </div>
                                    <div class="mb-5">
                                        <label class="block text-sm font-semibold text-[#D4D4D8] mb-1.5">Email Address</label>
                                        <input type="email" id="email" required placeholder="user@example.com"
                                            class="w-full bg-[#1C1C1C] border border-[#3A3A3A] rounded-[10px] px-4 py-3 text-sm text-[#F5F5F5] placeholder-[#71717A] transition-all duration-[250ms] focus:outline-none focus:border-[#FF6B35] focus:ring-4 focus:ring-[#FF6B35]/15 shadow-sm" />
                                    </div>
                                    <div class="mb-5">
                                        <label class="block text-sm font-semibold text-[#D4D4D8] mb-1.5">Username</label>
                                        <div class="relative">
                                            <span class="absolute left-4 top-1/2 -translate-y-1/2 text-[#71717A] font-medium">@</span>
                                            <input type="text" id="username" required placeholder="username"
                                                class="w-full bg-[#1C1C1C] border border-[#3A3A3A] rounded-[10px] pl-8 pr-4 py-3 text-sm text-[#F5F5F5] placeholder-[#71717A] transition-all duration-[250ms] focus:outline-none focus:border-[#FF6B35] focus:ring-4 focus:ring-[#FF6B35]/15 shadow-sm" />
                                        </div>
                                    </div>
                                    <div class="mb-5">
                                        <label class="block text-sm font-semibold text-[#D4D4D8] mb-1.5">Password</label>
                                        <input type="password" required placeholder="••••••••"
                                            class="w-full bg-[#1C1C1C] border border-[#3A3A3A] rounded-[10px] px-4 py-3 text-sm text-[#F5F5F5] placeholder-[#71717A] transition-all duration-[250ms] focus:outline-none focus:border-[#FF6B35] focus:ring-4 focus:ring-[#FF6B35]/15 shadow-sm" />
                                    </div>
                                    <div class="mb-5">
                                        <label class="block text-sm font-semibold text-[#D4D4D8] mb-1.5">Confirm Password</label>
                                        <input type="password" required placeholder="••••••••"
                                            class="w-full bg-[#1C1C1C] border border-[#3A3A3A] rounded-[10px] px-4 py-3 text-sm text-[#F5F5F5] placeholder-[#71717A] transition-all duration-[250ms] focus:outline-none focus:border-[#FF6B35] focus:ring-4 focus:ring-[#FF6B35]/15 shadow-sm" />
                                    </div>
                                </div>

                                {/* STEP 2: PREFERENCES  */}
                                <div id="step-2-content" class="hidden animate-slide-up">
                                    <h3 class="text-sm font-bold text-[#F5F5F5] mb-4">Select your favorite genres (up to 5)</h3>
                                    <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8" id="genre-container">
                                        {/* Selected  */}
                                        <div onclick="toggleGenre(this)" data-genre="Action"
                                            class="genre-option active border-2 border-[#FF6B35] bg-[#FF6B351A] text-[#FF6B35] rounded-[10px] py-3 text-center cursor-pointer font-bold text-sm transition-all shadow-[0_2px_8px_rgba(255,107,53,0.2)] flex items-center justify-center gap-2">
                                            <i class="fa-solid fa-check text-xs"></i> Action
                                        </div>
                                        <div onclick="toggleGenre(this)" data-genre="Comedy"
                                            class="genre-option active border-2 border-[#FF6B35] bg-[#FF6B351A] text-[#FF6B35] rounded-[10px] py-3 text-center cursor-pointer font-bold text-sm transition-all shadow-[0_2px_8px_rgba(255,107,53,0.2)] flex items-center justify-center gap-2">
                                            <i class="fa-solid fa-check text-xs"></i> Comedy
                                        </div>
                                        <div onclick="toggleGenre(this)" data-genre="Sci-Fi"
                                            class="genre-option active border-2 border-[#FF6B35] bg-[#FF6B351A] text-[#FF6B35] rounded-[10px] py-3 text-center cursor-pointer font-bold text-sm transition-all shadow-[0_2px_8px_rgba(255,107,53,0.2)] flex items-center justify-center gap-2">
                                            <i class="fa-solid fa-check text-xs"></i> Sci-Fi
                                        </div>
                                        {/* Unselected  */}
                                        <div onclick="toggleGenre(this)" data-genre="Drama"
                                            class="genre-option border border-[#3A3A3A] bg-[#1C1C1C] text-[#A1A1AA] hover:border-[#71717A] hover:bg-[#242424] rounded-[10px] py-3 text-center cursor-pointer font-medium text-sm transition-all flex items-center justify-center gap-2">
                                            <i class="fa-solid fa-check text-xs hidden"></i> Drama
                                        </div>
                                        <div onclick="toggleGenre(this)" data-genre="Thriller"
                                            class="genre-option border border-[#3A3A3A] bg-[#1C1C1C] text-[#A1A1AA] hover:border-[#71717A] hover:bg-[#242424] rounded-[10px] py-3 text-center cursor-pointer font-medium text-sm transition-all flex items-center justify-center gap-2">
                                            <i class="fa-solid fa-check text-xs hidden"></i> Thriller
                                        </div>
                                        <div onclick="toggleGenre(this)" data-genre="Horror"
                                            class="genre-option border border-[#3A3A3A] bg-[#1C1C1C] text-[#A1A1AA] hover:border-[#71717A] hover:bg-[#242424] rounded-[10px] py-3 text-center cursor-pointer font-medium text-sm transition-all flex items-center justify-center gap-2">
                                            <i class="fa-solid fa-check text-xs hidden"></i> Horror
                                        </div>
                                        <div onclick="toggleGenre(this)" data-genre="Romance"
                                            class="genre-option border border-[#3A3A3A] bg-[#1C1C1C] text-[#A1A1AA] hover:border-[#71717A] hover:bg-[#242424] rounded-[10px] py-3 text-center cursor-pointer font-medium text-sm transition-all flex items-center justify-center gap-2">
                                            <i class="fa-solid fa-check text-xs hidden"></i> Romance
                                        </div>
                                        <div onclick="toggleGenre(this)" data-genre="Animation"
                                            class="genre-option border border-[#3A3A3A] bg-[#1C1C1C] text-[#A1A1AA] hover:border-[#71717A] hover:bg-[#242424] rounded-[10px] py-3 text-center cursor-pointer font-medium text-sm transition-all flex items-center justify-center gap-2">
                                            <i class="fa-solid fa-check text-xs hidden"></i> Animation
                                        </div>
                                        <div onclick="toggleGenre(this)" data-genre="Documentary"
                                            class="genre-option border border-[#3A3A3A] bg-[#1C1C1C] text-[#A1A1AA] hover:border-[#71717A] hover:bg-[#242424] rounded-[10px] py-3 text-center cursor-pointer font-medium text-sm transition-all flex items-center justify-center gap-2">
                                            <i class="fa-solid fa-check text-xs hidden"></i> Documentary
                                        </div>
                                    </div>

                                    <h3 class="text-sm font-bold text-[#F5F5F5] mb-4">Email Notifications</h3>
                                    <div class="space-y-3">
                                        <label class="flex items-center gap-3 cursor-pointer group">
                                            <div
                                                class="w-5 h-5 rounded-[6px] border-2 border-[#FF6B35] bg-[#FF6B35] text-white flex items-center justify-center text-xs transition-colors">
                                                <i class="fa-solid fa-check"></i></div>
                                            <span class="text-sm font-medium text-[#D4D4D8] group-hover:text-[#F5F5F5]">New releases in my
                                                genres</span>
                                        </label>
                                        <label class="flex items-center gap-3 cursor-pointer group">
                                            <div
                                                class="w-5 h-5 rounded-[6px] border-2 border-[#FF6B35] bg-[#FF6B35] text-white flex items-center justify-center text-xs transition-colors">
                                                <i class="fa-solid fa-check"></i></div>
                                            <span class="text-sm font-medium text-[#D4D4D8] group-hover:text-[#F5F5F5]">Weekly
                                                recommendations</span>
                                        </label>
                                        <label class="flex items-center gap-3 cursor-pointer group">
                                            <div
                                                class="w-5 h-5 rounded-[6px] border-2 border-[#3A3A3A] bg-[#1C1C1C] group-hover:border-[#71717A] transition-colors">
                                            </div>
                                            <span class="text-sm font-medium text-[#D4D4D8] group-hover:text-[#F5F5F5]">Watchlist reminders</span>
                                        </label>
                                    </div>
                                </div>

                                {/* STEP 3: CONFIRM  */}
                                <div id="step-3-content" class="hidden animate-slide-up">
                                    <div class="bg-[#1C1C1C] border border-[#2A2A2A] rounded-[12px] p-1 mb-6">
                                        <div class="flex items-center p-3 border-b border-[#2A2A2A]">
                                            <span class="w-24 text-xs font-bold text-[#71717A] uppercase tracking-wide">Name</span>
                                            <span class="text-sm font-semibold text-[#F5F5F5]" id="confirm-name"></span>
                                        </div>
                                        <div class="flex items-center p-3 border-b border-[#2A2A2A]">
                                            <span class="w-24 text-xs font-bold text-[#71717A] uppercase tracking-wide">Email</span>
                                            <span class="text-sm font-semibold text-[#F5F5F5]" id="confirm-email"></span>
                                        </div>
                                        <div class="flex items-center p-3 border-b border-[#2A2A2A]">
                                            <span class="w-24 text-xs font-bold text-[#71717A] uppercase tracking-wide">Username</span>
                                            <span class="text-sm font-semibold text-[#F5F5F5]" id="confirm-username"></span>
                                        </div>
                                        <div class="flex items-center p-3">
                                            <span class="w-24 text-xs font-bold text-[#71717A] uppercase tracking-wide">Genres</span>
                                            <span class="text-sm font-semibold text-[#F5F5F5]" id="confirm-genres"></span>
                                        </div>
                                    </div>

                                    <label class="flex items-start gap-3 cursor-pointer group mb-2">
                                        {/* <div
                                            class="w-5 h-5 rounded-[6px] border-2 border-[#3A3A3A] bg-[#1C1C1C] group-hover:border-[#FF6B35] transition-colors mt-0.5 flex-shrink-0"
                                            id="terms-checkbox"
                                            onclick="this.classList.toggle('bg-[#FF6B35]'); this.classList.toggle('border-[#FF6B35]'); this.innerHTML = this.innerHTML === '' ? '<i class=\'fa-solid fa-check text-white text-xs flex items-center justify-center h-full w-full\'></i>' : ''"
                                        >
                                        </div> */}
                                        <span class="text-sm text-[#A1A1AA] leading-relaxed">I agree to the <Link href="#"
                                            class="font-bold text-[#FF6B35] hover:underline">Terms of Service</Link> and <Link href="#"
                                                class="font-bold text-[#FF6B35] hover:underline">Privacy Policy</Link>.</span>
                                    </label>
                                </div>

                                {/* Buttons  */}
                                <div class="flex gap-4 pt-4 border-t border-[#2A2A2A]">
                                    <button type="button" id="back-btn" onclick="prevStep()"
                                        class="hidden px-6 py-3.5 bg-[#1C1C1C] border border-[#3A3A3A] text-[#D4D4D8] hover:bg-[#242424] hover:border-[#FF6B35] hover:text-[#FF6B35] text-sm font-bold rounded-[10px] transition-all duration-[250ms] shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
                                        Back
                                    </button>
                                    <button type="submit" id="next-btn"
                                        class="flex-1 bg-[#FF6B35] hover:bg-[#E85D04] active:bg-[#C2410C] text-white font-bold py-3.5 px-4 rounded-[10px] transition-all duration-[250ms] shadow-[0_8px_24px_rgba(255,107,53,0.25)] hover:shadow-[0_20px_50px_rgba(255,107,53,0.35)] hover:-translate-y-[2px] active:translate-y-0">
                                        Continue <i class="fa-solid fa-arrow-right ml-1 text-xs"></i>
                                    </button>
                                </div>
                            </form>

                            <p class="mt-8 text-center text-sm text-[#A1A1AA]">
                                Already have an account?
                                <Link to="/login" class="font-bold text-[#FF6B35] hover:text-[#E85D04] transition-colors"> Log in</Link>
                            </p>
                        </div>
                    </div>
                </main>
            </main>

            <Footer />
        </>
    );
}

export default Signin;