import { Link } from "react-router-dom";

function MovieCard({ id, image, title, genre, rating, year, progress }) {
  const targetUrl = id ? `/movie/${id}` : "/movies";
  const fallbackImage =
    "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&auto=format&fit=crop&q=80";

  return (
    <Link
      to={targetUrl}
      className="group flex flex-col bg-surface border border-border-default rounded-xl overflow-hidden transition-all duration-200 hover:-translate-y-1.5 hover:border-ember hover:shadow-[0_8px_24px_rgba(255,107,53,0.25)] w-full h-full relative"
      title={title}
    >
      <div className="relative w-full aspect-2/3 bg-charcoal overflow-hidden">
        <img
          src={image || fallbackImage}
          alt={title || "Movie Poster"}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = fallbackImage;
          }}
        />

        {rating && (
          <div className="absolute top-2 right-2 bg-black/85 backdrop-blur-sm border border-border-default rounded-md px-1.5 py-0.5 text-[11px] font-bold text-amber-glow flex items-center gap-1">
            <i className="fa-solid fa-star text-[9px]"></i>
            <span>{rating}</span>
          </div>
        )}

        {typeof progress === "number" && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/70">
            <div
              className="h-full bg-linear-to-r from-amber-glow to-ember"
              style={{ width: `${Math.min(Math.max(progress, 0), 100)}%` }}
            ></div>
          </div>
        )}
      </div>

      <div className="p-2.5 sm:p-3 flex flex-col gap-1 flex-1">
        <h3 className="text-xs sm:text-sm font-bold text-white truncate leading-tight">
          {title}
        </h3>
        <div className="flex items-center justify-between text-[11px] text-zinc-400">
          <span className="truncate max-w-[70%]">{genre || "Movie"}</span>
          {year && <span className="text-zinc-500 font-medium">{year}</span>}
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;
