import { Link } from "react-router-dom";

function MenuButton({
  icon,
  label,
  to,
  onClick,
  badge,
  isDestructive = false,
}) {
  const content = (
    <>
      <div className="flex items-center gap-3">
        {icon && (
          <span className={`w-5 text-center text-sm ${isDestructive ? "text-[#C1121F]" : "text-[#FF6B35]"}`}>
            <i className={icon}></i>
          </span>
        )}
        <span>{label}</span>
      </div>

      <div className="flex items-center gap-2 text-[#71717A]">
        {badge && (
          <span className="text-[11px] px-1.5 py-0.5 bg-[#FF6B35]/15 text-[#FF6B35] rounded-full font-bold">
            {badge}
          </span>
        )}
        <i className="fa-solid fa-chevron-right text-[11px]"></i>
      </div>
    </>
  );

  const baseClass = `flex items-center justify-between w-full p-3 rounded-lg text-sm font-medium transition-all ${
    isDestructive
      ? "bg-[#1C1C1C] border border-[#222222] text-[#C1121F] hover:bg-[#C1121F]/10 hover:border-[#C1121F]/30"
      : "bg-[#1C1C1C] border border-[#222222] text-[#F5F5F5] hover:bg-[#242424] hover:border-[#2A2A2A] hover:text-white"
  }`;

  if (to) {
    return (
      <Link to={to} className={baseClass}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={baseClass}>
      {content}
    </button>
  );
}

export default MenuButton;
