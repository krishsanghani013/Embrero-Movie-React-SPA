import { Link } from "react-router-dom";

function SectionHeader({ title, badge, seeAllLink = "/movies", seeAllText = "See All" }) {
  return (
    <div className="flex items-center justify-between mb-3.5 gap-3">
      <div className="flex items-center gap-2.5">
        <div className="w-1 h-5 bg-ember rounded-full"></div>
        <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">{title}</h2>
        {badge && (
          <span className="text-[10px] font-bold px-2 py-0.5 bg-ember/15 text-ember border border-ember/30 rounded-full uppercase tracking-wider">
            {badge}
          </span>
        )}
      </div>

      {seeAllLink && (
        <Link
          to={seeAllLink}
          className="text-xs font-semibold text-ember inline-flex items-center gap-1 hover:underline group"
        >
          <span>{seeAllText}</span>
          <i className="fa-solid fa-chevron-right text-[9px] transition-transform group-hover:translate-x-0.5"></i>
        </Link>
      )}
    </div>
  );
}

export default SectionHeader;
