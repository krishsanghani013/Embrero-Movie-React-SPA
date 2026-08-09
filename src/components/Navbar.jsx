import { Link, NavLink } from "react-router-dom";

// Shared style builders for nav links
const navLinkClass = ({ isActive }) =>
    isActive
        ? "px-4 py-2 text-sm font-medium text-[#FF6B35] bg-[#FF6B351A] rounded-[10px] transition-all duration-[250ms] ease-[ease]"
        : "px-4 py-2 text-sm font-medium text-[#A1A1AA] hover:text-[#FF6B35] rounded-[10px] hover:bg-[#FF6B351A] transition-all duration-[250ms] ease-[ease]";

function Navbar() {
    return (
        <nav
            id="navbar"
            className="fixed top-0 left-0 right-0 z-50 bg-[#0D0D0D]/90 backdrop-blur-xl border-b border-[#2A2A2A] transition-all duration-[250ms] ease-[ease]"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2.5 group" id="logo-link">
                        <img
                            src="/Enbrero.svg"
                            alt="Embrero Logo"
                            className="w-10 h-10 rounded-[10px] object-cover transition-all duration-[250ms] ease-[ease] group-hover:shadow-[0_8px_24px_rgba(255,107,53,0.4)] group-hover:scale-105"
                        />
                        <span className="text-lg font-extrabold tracking-tight text-[#F5F5F5] hidden sm:block">
                            Embrero<span className="text-[#FF6B35]">Explorer</span>
                        </span>
                    </Link>

                    {/* Nav links */}
                    <div className="hidden md:flex items-center gap-1">
                        <NavLink to="/" end className={navLinkClass} id="nav-home">
                            Home
                        </NavLink>

                        <NavLink to="/movies" className={navLinkClass} id="nav-movies">
                            Movies
                        </NavLink>

                        <NavLink to="/watchlist" className={navLinkClass} id="nav-watchlist">
                            Watchlist
                        </NavLink>
                    </div>

                    {/* Right side */}
                    <div className="flex items-center gap-2">

                        <Link to="/movies">
                            <button
                                id="search-btn"
                                className="w-9 h-9 flex items-center justify-center rounded-[10px] text-[#A1A1AA] hover:text-[#FF6B35] hover:bg-[#FF6B351A] transition-all duration-[250ms] ease-[ease]"
                                aria-label="Search movies"
                            >
                                <i className="fa-solid fa-magnifying-glass text-sm"></i>
                            </button>
                        </Link>

                        {/* Login */}
                        <Link
                            to="/login"
                            className="hidden sm:inline-flex items-center justify-center px-4 py-2 bg-[#1C1C1C] border border-[#2A2A2A] text-[#D4D4D8] hover:bg-[#242424] hover:border-[#FF6B35] hover:text-[#FF6B35] text-sm font-semibold rounded-[10px] transition-all duration-[250ms] ease-[ease] shadow-[0_2px_8px_rgba(0,0,0,0.3)]"
                        >
                            Login
                        </Link>

                        {/* Sign Up */}
                        <Link
                            to="/signin"
                            className="hidden sm:inline-flex items-center justify-center px-4 py-2 bg-[#FF6B35] hover:bg-[#E85D04] active:bg-[#C2410C] text-white text-sm font-semibold rounded-[10px] transition-all duration-[250ms] ease-[ease] shadow-[0_2px_8px_rgba(255,107,53,0.3)] hover:shadow-[0_8px_24px_rgba(255,107,53,0.4)] hover:-translate-y-[2px]"
                        >
                            Sign Up
                        </Link>

                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;