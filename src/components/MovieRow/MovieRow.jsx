import SectionHeader from "../SectionHeader/SectionHeader";
import MovieCard from "../MovieCard/MovieCard";

function MovieRow({ title, badge, seeAllLink, movies = [] }) {
  return (
    <section className="mb-7">
      <SectionHeader title={title} badge={badge} seeAllLink={seeAllLink} />

      <div className="flex gap-3.5 overflow-x-auto pb-3.5 scrollbar-hide snap-x">
        {movies.map((movie) => (
          <div key={movie.id} className="shrink-0 w-[140px] sm:w-[160px] lg:w-[180px] snap-start">
            <MovieCard
              id={movie.id}
              image={movie.image}
              title={movie.title}
              genre={movie.genre}
              rating={movie.rating}
              year={movie.year}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default MovieRow;
