import { NavLink } from "react-router-dom";

function BottomNav() {
  const navItems = [
    { to: "/", label: "Home", icon: "fa-solid fa-house", end: true },
    { to: "/search", label: "Search", icon: "fa-solid fa-magnifying-glass" },
    { to: "/categories", label: "Categories", icon: "fa-solid fa-shapes" },
    { to: "/watchlist", label: "Watchlist", icon: "fa-solid fa-bookmark" },
    { to: "/profile", label: "Profile", icon: "fa-solid fa-user" },
  ];

  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-noir/95 backdrop-blur-xl border-t border-border-default z-50 flex items-center justify-around px-2 shadow-[0_-4px_20px_rgba(0,0,0,0.6)]"
      id="bottom-navigation"
      aria-label="Mobile navigation"
    >
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          end={item.end}
          className={({ isActive }) =>
            `flex flex-col items-center justify-center gap-1 py-1.5 px-3 rounded-lg flex-1 max-w-18 text-[10px] font-semibold transition-all ${
              isActive
                ? "text-ember"
                : "text-zinc-500 hover:text-zinc-300"
            }`
          }
        >
          {({ isActive }) => (
            <>
              <i
                className={`${item.icon} text-lg transition-transform ${
                  isActive ? "-translate-y-0.5 drop-shadow-[0_0_6px_rgba(255,107,53,0.6)]" : ""
                }`}
              ></i>
              <span>{item.label}</span>
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
}

export default BottomNav;
