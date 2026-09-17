import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import BottomNav from "../../components/BottomNav/BottomNav";
import MenuButton from "../../components/MenuButton/MenuButton";
import MovieRow from "../../components/MovieRow/MovieRow";
import moviesData from "../../data/movies.json";

function Menu() {
  const featured = moviesData[0];
  const trending = moviesData.slice(1, 7);
  const popular = moviesData.slice(4, 10);

  return (
    <div className="min-h-screen bg-[#080808] pt-[106px] pb-16">
      <Navbar />

      <main className="max-w-7xl mx-auto p-4 sm:p-6 flex flex-col lg:flex-row items-start gap-6 lg:gap-8">
        {/* Left / Menu Sidebar */}
        <aside className="w-full lg:w-80 shrink-0 flex flex-col gap-4 bg-[#1C1C1C] border border-[#2A2A2A] rounded-2xl p-4 sm:p-5 lg:sticky lg:top-[114px]">
          {/* User Profile Info */}
          <div className="flex items-center gap-3.5 pb-4 border-b border-[#222222]">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&auto=format&fit=crop&q=80"
              alt="Krish Sanghani"
              className="w-12 h-12 rounded-full border-2 border-[#FF6B35] object-cover"
            />
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-bold text-white">Krish Sanghani</span>
              <span className="text-xs text-[#A1A1AA]">krishsanghani013@gmail.com</span>
            </div>
          </div>

          {/* Menu Items matching wireframe list */}
          <div className="flex flex-col gap-1.5">
            <MenuButton icon="fa-solid fa-house" label="Home" to="/" />
            <MenuButton icon="fa-solid fa-magnifying-glass" label="Search" to="/search" />
            <MenuButton icon="fa-solid fa-shapes" label="Categories" to="/categories" />
            <MenuButton icon="fa-solid fa-bookmark" label="Watchlist" to="/watchlist" />
            <MenuButton icon="fa-solid fa-user" label="Profile" to="/profile" />
            <MenuButton icon="fa-regular fa-bell" label="Notifications" to="/settings" badge="3" />
            <MenuButton icon="fa-solid fa-gear" label="Settings" to="/settings" />

            <div className="text-[10px] font-bold uppercase text-[#71717A] tracking-wider mt-3 mb-1 pl-1">
              Others
            </div>

            <MenuButton icon="fa-solid fa-circle-question" label="Help & Support" to="/settings" />
            <MenuButton icon="fa-solid fa-circle-info" label="About Us" to="/settings" />
            <MenuButton icon="fa-solid fa-envelope" label="Contact Us" to="/settings" />
            <MenuButton icon="fa-regular fa-star" label="Rate Us" to="/settings" />
            <MenuButton
              icon="fa-solid fa-right-from-bracket"
              label="Log Out"
              to="/logout"
              isDestructive={true}
            />
          </div>
        </aside>

        {/* Right / Main Content Area */}
        <section className="flex-1 w-full flex flex-col gap-6">
          {/* Featured / Trending Banner */}
          <div
            className="relative w-full min-h-[220px] sm:min-h-[260px] rounded-xl overflow-hidden bg-cover bg-center flex items-end border border-[#2A2A2A]"
            style={{ backgroundImage: `url(${featured?.backdrop || featured?.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/95 via-[#080808]/40 to-transparent"></div>
            <div className="relative z-10 p-5 flex flex-col gap-2">
              <span className="text-[11px] text-[#FF6B35] font-bold">
                🔥 FEATURED NOW
              </span>
              <h2 className="text-lg sm:text-2xl font-extrabold text-white">{featured?.title}</h2>
              <div className="flex items-center gap-2 text-xs text-[#D4D4D8]">
                <span className="text-[#FFB000] font-bold">⭐ {featured?.rating} / 10</span>
                <span>•</span>
                <span>{featured?.genre}</span>
                <span>•</span>
                <span>{featured?.year || "2026"}</span>
              </div>
              <Link
                to={`/movie/${featured?.id}`}
                className="inline-flex items-center gap-2 bg-[#FF6B35] hover:bg-[#E85D04] text-white px-4 py-2 rounded-lg text-xs font-bold self-start mt-1 transition-all"
              >
                <i className="fa-solid fa-play text-[10px]"></i> Watch Now
              </Link>
            </div>
          </div>

          {/* Trending Section */}
          <MovieRow
            title="Trending"
            seeAllLink="/movies"
            movies={trending}
          />

          {/* Popular Section */}
          <MovieRow
            title="Popular"
            seeAllLink="/movies"
            movies={popular}
          />
        </section>
      </main>

      <BottomNav />
    </div>
  );
}

export default Menu;
