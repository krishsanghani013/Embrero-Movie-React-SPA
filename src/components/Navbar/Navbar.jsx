import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const tabClass = ({ isActive }) =>
    `text-xs sm:text-sm font-semibold py-1 relative transition-colors whitespace-nowrap ${
      isActive
        ? "text-[#FF6B35] after:content-[''] after:absolute after:-bottom-[11px] after:left-0 after:right-0 after:h-[2px] after:bg-[#FF6B35] after:rounded-full"
        : "text-[#A1A1AA] hover:text-white"
    }`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0D0D0D] border-b border-[#2A2A2A] flex flex-col" id="app-navbar">
      {/* Top Row: Hamburger / Brand / Actions */}
      <div className="flex items-center justify-between h-[54px] px-4 max-w-7xl mx-auto w-full">
        <Link
          to="/menu"
          className="flex items-center justify-center w-9 h-9 rounded-lg text-[#D4D4D8] text-base hover:text-[#FF6B35] hover:bg-[#FF6B35]/10 transition-colors"
          aria-label="Open menu"
          id="nav-menu-btn"
        >
          <i className="fa-solid fa-bars"></i>
        </Link>

        <Link to="/" className="flex items-center gap-2" id="nav-brand-link">
          <img src="/Enbrero.svg" alt="Embrero Logo" className="w-7 h-7 object-contain" />
          <span className="text-lg sm:text-xl font-black tracking-widest text-white uppercase">
            Embr<span className="text-[#FF6B35]">ero</span>
          </span>
        </Link>

        <div className="flex items-center gap-1 sm:gap-2">
          <Link
            to="/search"
            className="flex items-center justify-center w-9 h-9 rounded-lg text-[#D4D4D8] text-sm hover:text-[#FF6B35] hover:bg-[#FF6B35]/10 transition-colors"
            aria-label="Search"
            id="nav-search-quick"
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </Link>

          <button
            type="button"
            className="relative flex items-center justify-center w-9 h-9 rounded-lg text-[#D4D4D8] text-base hover:text-[#FF6B35] hover:bg-[#FF6B35]/10 transition-colors"
            aria-label="Notifications"
            id="nav-bell-btn"
          >
            <i className="fa-regular fa-bell"></i>
            <span className="absolute top-2 right-2 w-2 h-2 bg-[#FF6B35] rounded-full"></span>
          </button>
        </div>
      </div>

      {/* Second Row: Sub-navigation Tabs */}
      <nav className="border-t border-[#222222] bg-[#080808] overflow-x-auto scrollbar-hide">
        <ul className="flex items-center justify-start md:justify-center gap-5 sm:gap-8 h-11 px-4 max-w-7xl mx-auto list-none">
          <li>
            <NavLink to="/" end className={tabClass}>
              Shows
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies" className={tabClass}>
              Movies
            </NavLink>
          </li>
          <li>
            <NavLink to="/categories" className={tabClass}>
              Genres
            </NavLink>
          </li>
          <li>
            <NavLink to="/search" className={tabClass}>
              New &amp; Hot
            </NavLink>
          </li>
          <li>
            <NavLink to="/watchlist" className={tabClass}>
              Clips
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
