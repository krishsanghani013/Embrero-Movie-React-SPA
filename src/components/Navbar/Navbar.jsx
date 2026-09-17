import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const desktopNavLinkClass = ({ isActive }) =>
    `px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all relative ${
      isActive
        ? "text-ember bg-ember/15 after:content-[''] after:absolute after:-bottom-1 after:left-3.5 after:right-3.5 after:h-0.5 after:bg-ember after:rounded-full"
        : "text-zinc-400 hover:text-white hover:bg-white/5"
    }`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-noir/90 backdrop-blur-xl border-b border-border-default transition-all" id="app-navbar">
      <div className="flex items-center justify-between h-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Left Side: Brand Logo & Desktop Nav */}
        <div className="flex items-center gap-6 sm:gap-8">
          <Link to="/" className="flex items-center gap-2.5 group" id="nav-brand-link">
            <img
              src="/Enbrero.svg"
              alt="Embrero Logo"
              className="w-8 h-8 object-contain transition-transform duration-200 group-hover:scale-105 group-hover:drop-shadow-[0_0_10px_rgba(255,107,53,0.6)]"
            />
            <span className="text-base sm:text-lg font-black tracking-widest text-white uppercase">
              Embr<span className="text-ember">ero</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5" aria-label="Main navigation">
            <NavLink to="/" end className={desktopNavLinkClass} id="nav-home">
              Home
            </NavLink>
            <NavLink to="/movies" className={desktopNavLinkClass} id="nav-movies">
              Movies
            </NavLink>
            <NavLink to="/categories" className={desktopNavLinkClass} id="nav-categories">
              Categories
            </NavLink>
            <NavLink to="/watchlist" className={desktopNavLinkClass} id="nav-watchlist">
              Watchlist
            </NavLink>
          </nav>
        </div>

        {/* Right Side: Actions */}
        <div className="flex items-center gap-1 sm:gap-2">
          <Link
            to="/search"
            className="w-9 h-9 flex items-center justify-center rounded-lg text-zinc-300 hover:text-ember hover:bg-ember/10 transition-colors"
            aria-label="Search movies"
            id="nav-search-quick"
          >
            <i className="fa-solid fa-magnifying-glass text-sm"></i>
          </Link>

          <Link
            to="/settings"
            className="relative w-9 h-9 flex items-center justify-center rounded-lg text-zinc-300 hover:text-ember hover:bg-ember/10 transition-colors"
            aria-label="Notifications"
            id="nav-bell-btn"
          >
            <i className="fa-regular fa-bell text-sm"></i>
            <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-ember shadow-[0_0_6px_rgba(255,107,53,0.8)]"></span>
          </Link>

          <Link
            to="/profile"
            className="w-9 h-9 flex items-center justify-center rounded-lg text-zinc-300 hover:text-ember hover:bg-ember/10 transition-colors"
            aria-label="Profile"
            id="nav-profile-btn"
          >
            <i className="fa-regular fa-user text-sm"></i>
          </Link>

          <Link
            to="/menu"
            className="w-9 h-9 flex items-center justify-center rounded-lg text-zinc-300 hover:text-ember hover:bg-ember/10 transition-colors"
            aria-label="Open navigation menu"
            id="nav-menu-btn"
          >
            <i className="fa-solid fa-bars text-sm"></i>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
