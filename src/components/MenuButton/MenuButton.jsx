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
          <span className={`w-5 text-center text-sm ${isDestructive ? "text-cherry" : "text-ember"}`}>
            <i className={icon}></i>
          </span>
        )}
        <span>{label}</span>
      </div>

      <div className="flex items-center gap-2 text-zinc-500">
        {badge && (
          <span className="text-[11px] px-2 py-0.5 bg-ember/15 text-ember rounded-full font-bold">
            {badge}
          </span>
        )}
        <i className="fa-solid fa-chevron-right text-[11px] transition-transform group-hover:translate-x-1"></i>
      </div>
    </>
  );

  const baseClass = `group flex items-center justify-between w-full p-3.5 rounded-xl text-sm font-medium transition-all ${
    isDestructive
      ? "bg-surface border border-border-subtle text-cherry hover:bg-cherry/15 hover:border-cherry/30"
      : "bg-surface border border-border-subtle text-zinc-100 hover:bg-elevated hover:border-border-default hover:text-white hover:translate-x-0.5"
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
