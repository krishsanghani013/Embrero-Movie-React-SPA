import { Link } from "react-router-dom";

function CategoryCard({ title, icon, count, to = "/search" }) {
  return (
    <Link
      to={to}
      className="group relative flex flex-col justify-between p-4 bg-[#1C1C1C] border border-[#2A2A2A] rounded-xl min-h-[88px] overflow-hidden transition-all duration-150 hover:-translate-y-0.5 hover:border-[#FF6B35] hover:bg-[#242424]"
      title={title}
    >
      <div className="absolute top-0 left-0 w-[3px] h-full bg-[#FF6B35] opacity-0 group-hover:opacity-100 transition-opacity"></div>
      {icon && (
        <div className="text-xl text-[#FF6B35] mb-2">
          {typeof icon === "string" ? <i className={icon}></i> : icon}
        </div>
      )}
      <div>
        <div className="text-sm font-bold text-white">{title}</div>
        {count && <div className="text-[11px] text-[#71717A]">{count}</div>}
      </div>
    </Link>
  );
}

export default CategoryCard;
