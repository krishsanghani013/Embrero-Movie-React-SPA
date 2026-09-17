import { Link } from "react-router-dom";

function MovieCard({ id, image, title, genre, rating, year, progress }) {
  const targetUrl = id ? `/movie/${id}` : "/movies";

  return (
    <Link
      to={targetUrl}
      className="group flex flex-col bg-[#1C1C1C] border border-[#2A2A2A] rounded-xl overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:border-[#FF6B35] hover:shadow-[0_8px_24px_rgba(255,107,53,0.2)] w-full"
      title={title}
    >
      <div className="relative w-full aspect-[2/3] bg-[#151515] overflow-hidden">
        <img
          src={image || "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&auto=format&fit=crop&q=80"}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />

        {rating && (
          <div className="absolute top-2 right-2 bg-black/80 border border-[#2A2A2A] rounded-md px-1.5 py-0.5 text-[11px] font-bold text-[#FFB000] flex items-center gap-1">
            <i className="fa-solid fa-star text-[9px]"></i>
            <span>{rating}</span>
          </div>
        )}

        {typeof progress === "number" && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/60">
            <div
              className="h-full bg-[#FF6B35]"
              style={{ width: `${Math.min(Math.max(progress, 0), 100)}%` }}
            ></div>
          </div>
        )}
      </div>

      <div className="p-2.5 flex flex-col gap-1 flex-1">
        <h3 className="text-xs sm:text-sm font-bold text-white truncate">{title}</h3>
        <div className="flex items-center justify-between text-[11px] text-[#A1A1AA]">
          <span className="truncate">{genre || "Movie"}</span>
          {year && <span className="text-[#71717A] font-medium">{year}</span>}
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;
