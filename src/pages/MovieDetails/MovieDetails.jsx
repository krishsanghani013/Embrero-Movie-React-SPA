import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import BottomNav from "../../components/BottomNav/BottomNav";
import MovieRow from "../../components/MovieRow/MovieRow";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import moviesData from "../../data/movies.json";

function MovieDetails() {
  const { movieId, id } = useParams();
  const currentId = parseInt(movieId || id, 10) || 1;

  const movie = moviesData.find((m) => m.id === currentId) || moviesData[0];

  const castList = movie.cast || [
    { name: "Tom Holland", role: "Peter Parker", image: "https://media.themoviedb.org/t/p/w132_and_h132_face/xKBAaPIa1c7tzZD3Y0MhBLv4hPE.jpg" },
    { name: "Sadie Sink", role: "Jean Grey", image: "https://media.themoviedb.org/t/p/w132_and_h132_face/92FddzBfK50XOUbtwjqHPraoGHy.jpg" },
    { name: "Tramell Tillman", role: "William Metzger", image: "https://media.themoviedb.org/t/p/w132_and_h132_face/bEA15zMnkcXlRroYjKrFUWiiK7y.jpg" },
    { name: "Zendaya", role: "Michelle Jones", image: "https://media.themoviedb.org/t/p/w132_and_h132_face/rBtEEt2slgeWkc26OniMmZmsvaA.jpg" },
    { name: "Jacob Batalon", role: "Ned Leeds", image: "https://media.themoviedb.org/t/p/w132_and_h132_face/yX5nFz1yvW8s24p5qF9LwT6qjX2.jpg" },
  ];

  const similarMovies = moviesData
    .filter((m) => m.id !== movie.id && (m.genre === movie.genre || m.genres?.includes(movie.genre)))
    .slice(0, 8);

  const fallbackSimilar = similarMovies.length > 0 ? similarMovies : moviesData.slice(1, 8);

  return (
    <div className="min-h-screen bg-[#080808] pb-16">
      <Navbar />

      <main>
        {/* Large Movie Hero Section */}
        <section
          className="relative w-full min-h-[420px] bg-cover bg-center mt-[98px] border-b border-[#222222] flex items-end"
          style={{
            backgroundImage: `url(${movie.backdrop || movie.image})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/85 to-[#080808]/40"></div>

          <div className="relative z-10 max-w-7xl mx-auto w-full p-4 sm:p-6 md:p-8 flex flex-col md:flex-row items-start md:items-end gap-5 md:gap-8">
            <div className="w-32 sm:w-44 md:w-52 aspect-[2/3] rounded-xl overflow-hidden border-2 border-[#2A2A2A] shadow-2xl shrink-0">
              <img
                src={movie.image}
                alt={movie.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 flex flex-col gap-2.5">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
                {movie.title}
              </h1>
              {movie.tagline && <p className="text-xs sm:text-sm italic text-[#FF6B35]">{movie.tagline}</p>}

              <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 text-xs text-[#D4D4D8]">
                <div className="flex items-center gap-1 text-[#FFB000] font-bold">
                  <i className="fa-solid fa-star"></i>
                  <span>{movie.rating} / 10</span>
                </div>
                <span className="px-2.5 py-1 bg-[#1C1C1C] border border-[#2A2A2A] rounded-full text-xs">
                  {movie.genre}
                </span>
                <span className="px-2.5 py-1 bg-[#1C1C1C] border border-[#2A2A2A] rounded-full text-xs">
                  {movie.year || "2026"}
                </span>
                <span className="px-2.5 py-1 bg-[#1C1C1C] border border-[#2A2A2A] rounded-full text-xs">
                  {movie.runtime || "2h 15m"}
                </span>
                <span className="px-2.5 py-1 bg-[#1C1C1C] border border-[#2A2A2A] rounded-full text-xs">
                  {movie.language || "English"}
                </span>
              </div>

              <p className="text-xs sm:text-sm leading-relaxed text-[#A1A1AA] max-w-3xl mt-1">
                {movie.overview}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 mt-2">
                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-2 bg-[#FF6B35] hover:bg-[#E85D04] text-white px-5 py-2.5 rounded-lg text-sm font-bold shadow-[0_4px_16px_rgba(255,107,53,0.3)] transition-all"
                  id="details-watch-now"
                >
                  <i className="fa-solid fa-play text-xs"></i>
                  <span>Watch Now</span>
                </button>

                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 border border-[#3A3A3A] hover:border-[#FF6B35] text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all"
                  id="details-add-watchlist"
                >
                  <i className="fa-regular fa-bookmark text-xs"></i>
                  <span>Add to Watchlist</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Cast & Similar Movies Section */}
        <div className="max-w-7xl mx-auto p-4 sm:p-6 md:p-8">
          {/* Cast Section */}
          <section className="mb-7">
            <SectionHeader title="Top Billed Cast" seeAllLink={null} />
            <div className="flex gap-3.5 overflow-x-auto pb-3 scrollbar-hide mb-8">
              {castList.map((actor, idx) => (
                <div
                  key={idx}
                  className="shrink-0 w-28 sm:w-32 bg-[#1C1C1C] border border-[#2A2A2A] rounded-lg p-2.5 flex flex-col items-center text-center gap-1.5"
                >
                  <img
                    src={actor.image || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&auto=format&fit=crop&q=80"}
                    alt={actor.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#2A2A2A] bg-[#151515]"
                  />
                  <span className="text-xs font-bold text-white leading-tight line-clamp-1">{actor.name}</span>
                  <span className="text-[10px] text-[#71717A] leading-tight line-clamp-1">{actor.role}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Similar Movies */}
          <MovieRow
            title="Similar Movies"
            seeAllLink="/movies"
            movies={fallbackSimilar}
          />
        </div>
      </main>

      <BottomNav />
    </div>
  );
}

export default MovieDetails;
