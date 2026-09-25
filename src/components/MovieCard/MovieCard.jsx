import { Link } from "react-router-dom";

function MovieCard({
  id,
  image,
  poster_path,
  title,
  genre,
  rating,
  vote_average,
  year,
  release_date,
  progress,
  movie,
}) {
  // Support both direct movie object and individual props
  const movieId = movie ? movie.id : id;
  const movieTitle = movie ? movie.title : (title || "Untitled");

  // TMDB poster image or mock image or placeholder fallback
  const posterPath = movie ? movie.poster_path : poster_path;
  const rawImage = movie ? movie.image : image;
  const fallbackImage =
    "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&auto=format&fit=crop&q=80";

  const displayImage = posterPath
    ? `https://image.tmdb.org/t/p/w500${posterPath}`
    : rawImage || fallbackImage;

  // TMDB rating (vote_average) or mock rating
  const rawRating = movie ? (movie.vote_average ?? movie.rating) : (vote_average ?? rating);
  const displayRating =
    typeof rawRating === "number" ? rawRating.toFixed(1) : rawRating;

  // TMDB release year (from release_date "YYYY-MM-DD") or mock year
  const rawDate = movie ? (movie.release_date ?? movie.year) : (release_date ?? year);
  const displayYear = rawDate ? String(rawDate).split("-")[0] : "";

  const movieGenre = movie ? movie.genre : genre;
  const movieProgress = movie ? movie.progress : progress;

  const targetUrl = movieId ? `/movie/${movieId}` : "/movies";

  return (
    <Link
      to={targetUrl}
      className="group flex flex-col bg-surface border border-border-default rounded-xl overflow-hidden transition-all duration-200 hover:-translate-y-1.5 hover:border-ember hover:shadow-[0_8px_24px_rgba(255,107,53,0.25)] w-full h-full relative"
      title={movieTitle}
    >
      <div className="relative w-full aspect-2/3 bg-charcoal overflow-hidden">
        <img
          src={displayImage}
          alt={movieTitle || "Movie Poster"}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = fallbackImage;
          }}
        />

        {displayRating && (
          <div className="absolute top-2 right-2 bg-black/85 backdrop-blur-sm border border-border-default rounded-md px-1.5 py-0.5 text-[11px] font-bold text-amber-glow flex items-center gap-1">
            <i className="fa-solid fa-star text-[9px]"></i>
            <span>{displayRating}</span>
          </div>
        )}

        {typeof movieProgress === "number" && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/70">
            <div
              className="h-full bg-linear-to-r from-amber-glow to-ember"
              style={{ width: `${Math.min(Math.max(movieProgress, 0), 100)}%` }}
            ></div>
          </div>
        )}
      </div>

      <div className="p-2.5 sm:p-3 flex flex-col gap-1 flex-1">
        <h3 className="text-xs sm:text-sm font-bold text-white truncate leading-tight">
          {movieTitle}
        </h3>
        <div className="flex items-center justify-between text-[11px] text-zinc-400">
          <span className="truncate max-w-[70%]">{movieGenre || "Movie"}</span>
          {displayYear && (
            <span className="text-zinc-500 font-medium">{displayYear}</span>
          )}
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;
