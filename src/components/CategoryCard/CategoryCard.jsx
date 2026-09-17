import { Link } from "react-router-dom";

function CategoryCard({ title, icon, count, to = "/search" }) {
  return (
    <Link
      to={to}
      className="group relative flex flex-col justify-between p-4 bg-surface border border-border-default rounded-xl min-h-24 overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:border-ember hover:bg-elevated hover:shadow-[0_4px_20px_rgba(255,107,53,0.15)]"
      title={title}
    >
      <div className="absolute top-0 left-0 w-1 h-full bg-linear-to-b from-amber-glow to-ember opacity-0 group-hover:opacity-100 transition-opacity"></div>
      {icon && (
        <div className="text-xl text-ember mb-2 transition-transform duration-200 group-hover:scale-110">
          {typeof icon === "string" ? <i className={icon}></i> : icon}
        </div>
      )}
      <div>
        <div className="text-sm font-bold text-white leading-tight">{title}</div>
        {count && <div className="text-[11px] text-zinc-500 mt-0.5">{count}</div>}
      </div>
    </Link>
  );
}

export default CategoryCard;
