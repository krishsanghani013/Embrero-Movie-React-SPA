import { useRef } from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import MovieCard from "../MovieCard/MovieCard";

function MovieRow({ title, badge, seeAllLink, movies = [] }) {
  const rowRef = useRef(null);

  const scroll = (direction) => {
    if (rowRef.current) {
      const scrollAmount = direction === "left" ? -450 : 450;
      rowRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="mb-8 relative group/row">
      <SectionHeader title={title} badge={badge} seeAllLink={seeAllLink} />

      <div className="relative flex items-center">
        {/* Left Arrow Button (visible on desktop hover) */}
        <button
          type="button"
          className="hidden lg:group-hover/row:flex absolute -left-3 top-[calc(50%-20px)] w-9 h-9 rounded-full bg-noir/90 border border-border-strong text-white items-center justify-center z-10 shadow-[0_4px_16px_rgba(0,0,0,0.7)] hover:bg-ember hover:border-ember hover:scale-110 transition-all cursor-pointer"
          onClick={() => scroll("left")}
          aria-label={`Scroll ${title} left`}
        >
          <i className="fa-solid fa-chevron-left text-xs"></i>
        </button>

        {/* Scroll Track */}
        <div
          className="flex gap-3.5 sm:gap-4 overflow-x-auto pb-3.5 pt-1 scroll-smooth snap-x scrollbar-hide w-full"
          ref={rowRef}
        >
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="shrink-0 w-35 sm:w-41.25 lg:w-46.25 snap-start"
            >
              <MovieCard movie={movie} />

            </div>
          ))}
        </div>

        {/* Right Arrow Button (visible on desktop hover) */}
        <button
          type="button"
          className="hidden lg:group-hover/row:flex absolute -right-3 top-[calc(50%-20px)] w-9 h-9 rounded-full bg-noir/90 border border-border-strong text-white items-center justify-center z-10 shadow-[0_4px_16px_rgba(0,0,0,0.7)] hover:bg-ember hover:border-ember hover:scale-110 transition-all cursor-pointer"
          onClick={() => scroll("right")}
          aria-label={`Scroll ${title} right`}
        >
          <i className="fa-solid fa-chevron-right text-xs"></i>
        </button>
      </div>
    </section>
  );
}

export default MovieRow;
