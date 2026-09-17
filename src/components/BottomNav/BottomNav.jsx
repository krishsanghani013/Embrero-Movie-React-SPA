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
    <nav className="fixed bottom-0 left-0 right-0 h-[62px] bg-[#0D0D0D] border-t border-[#2A2A2A] z-50 flex items-center justify-around px-3 shadow-[0_-4px_20px_rgba(0,0,0,0.6)]" id="bottom-navigation">
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          end={item.end}
          className={({ isActive }) =>
            `flex flex-col items-center justify-center gap-1 text-[11px] font-semibold transition-all py-1.5 px-3 rounded-lg flex-1 max-w-[80px] ${
              isActive ? "text-[#FF6B35]" : "text-[#71717A] hover:text-[#D4D4D8]"
            }`
          }
        >
          {({ isActive }) => (
            <>
              <i className={`${item.icon} text-lg transition-transform ${isActive ? "-translate-y-0.5" : ""}`}></i>
              <span>{item.label}</span>
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
}

export default BottomNav;
