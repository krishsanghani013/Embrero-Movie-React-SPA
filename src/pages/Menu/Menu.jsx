import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import BottomNav from "../../components/BottomNav/BottomNav";
import MenuButton from "../../components/MenuButton/MenuButton";
import MovieRow from "../../components/MovieRow/MovieRow";
import moviesData from "../../data/movies.json";

function Menu() {
  const featured = moviesData[0];
  const trending = moviesData.slice(1, 8);
  const popular = moviesData.slice(4, 11);

  return (
    <div className="min-h-screen bg-void pt-20 pb-24 md:pb-12 text-zinc-100">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-8">
          {/* Left / Menu Sidebar */}
          <aside className="w-full lg:w-80 shrink-0 bg-surface border border-border-default rounded-2xl p-5 flex flex-col gap-4 lg:sticky lg:top-20">
            {/* User Profile Summary */}
            <div className="flex items-center gap-3.5 pb-4 border-b border-border-subtle">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&auto=format&fit=crop&q=80"
                alt="Krish Sanghani"
                className="w-12 h-12 rounded-full border-2 border-ember object-cover"
              />
              <div className="flex flex-col">
                <span className="text-sm sm:text-base font-bold text-white">Krish Sanghani</span>
                <span className="text-xs text-zinc-400">krishsanghani013@gmail.com</span>
              </div>
            </div>

            {/* Menu Items matching instructions */}
            <div className="flex flex-col gap-2">
              <MenuButton icon="fa-solid fa-house" label="Home" to="/" />
              <MenuButton icon="fa-solid fa-magnifying-glass" label="Search" to="/search" />
              <MenuButton icon="fa-solid fa-film" label="Movies" to="/movies" />
              <MenuButton icon="fa-solid fa-shapes" label="Categories" to="/categories" />
              <MenuButton icon="fa-solid fa-bookmark" label="Watchlist" to="/watchlist" />
              <MenuButton icon="fa-solid fa-user" label="Profile" to="/profile" />
              <MenuButton icon="fa-solid fa-gear" label="Settings" to="/settings" />

              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider pl-1 mt-2">
                Account
              </span>

              <MenuButton
                icon="fa-solid fa-right-from-bracket"
                label="Logout"
                to="/logout"
                isDestructive={true}
              />
            </div>
          </aside>

          {/* Right / Main Content Area */}
          <section className="flex-1 w-full flex flex-col gap-7">
            {/* Featured Banner */}
            <div
              className="relative w-full min-h-60 sm:min-h-70 rounded-2xl overflow-hidden bg-cover bg-center border border-border-default flex items-end"
              style={{ backgroundImage: `url(${featured?.backdrop || featured?.image})` }}
            >
              <div className="absolute inset-0 bg-linear-to-t from-void/95 via-void/40 to-transparent"></div>
              <div className="relative z-10 p-6 flex flex-col gap-2">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-ember bg-ember/15 border border-ember/30 px-2.5 py-0.5 rounded-full self-start">
                  🔥 Featured Discovery
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-white">{featured?.title}</h2>
                <div className="flex items-center gap-2 text-xs text-zinc-300">
                  <span className="text-amber-glow font-bold">⭐ {featured?.rating} / 10</span>
                  <span>•</span>
                  <span>{featured?.genre}</span>
                  <span>•</span>
                  <span>{featured?.year || "2026"}</span>
                </div>
                <Link
                  to={`/movie/${featured?.id}`}
                  className="inline-flex items-center gap-2 bg-ember hover:bg-ember-burnt text-white px-4 py-2 rounded-xl text-xs font-bold self-start mt-1 transition-all"
                >
                  <i className="fa-solid fa-play text-[10px]"></i> Watch Now
                </Link>
              </div>
            </div>

            {/* Trending Recommendations */}
            <MovieRow
              title="Trending Recommendations"
              seeAllLink="/movies"
              movies={trending}
            />

            {/* Popular Discoveries */}
            <MovieRow
              title="Popular Discoveries"
              seeAllLink="/movies"
              movies={popular}
            />
          </section>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}

export default Menu;
