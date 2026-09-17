import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import BottomNav from "../../components/BottomNav/BottomNav";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import MovieCard from "../../components/MovieCard/MovieCard";
import moviesData from "../../data/movies.json";

function Profile() {
  const continueWatchingMovies = [
    { ...moviesData[0], progress: 68 },
    { ...moviesData[1], progress: 35 },
    { ...moviesData[2], progress: 85 },
    { ...moviesData[3], progress: 20 },
  ];

  const watchlistPreview = moviesData.slice(4, 8);

  const accountLinks = [
    { label: "Personal Information", icon: "fa-regular fa-user", to: "/settings" },
    { label: "Privacy Settings", icon: "fa-solid fa-shield-halved", to: "/settings" },
    { label: "Notifications", icon: "fa-regular fa-bell", to: "/settings" },
    { label: "Theme", icon: "fa-solid fa-palette", to: "/settings" },
    { label: "Logout", icon: "fa-solid fa-right-from-bracket", to: "/logout", isLogout: true },
  ];

  return (
    <div className="min-h-screen bg-[#080808] pt-[106px] pb-16">
      <Navbar />

      <main className="max-w-4xl mx-auto p-4 sm:p-6">
        {/* Profile Header */}
        <ProfileHeader
          name="Krish Sanghani"
          email="krishsanghani013@gmail.com"
          avatar="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&auto=format&fit=crop&q=80"
          onEdit={() => {}}
        />

        {/* Statistics Grid */}
        <div className="grid grid-cols-3 gap-2.5 sm:gap-3.5 mb-7">
          <div className="bg-[#1C1C1C] border border-[#2A2A2A] rounded-xl p-3.5 sm:p-4 text-center flex flex-col items-center gap-1 hover:border-[#FF6B35] transition-colors">
            <span className="text-xl sm:text-2xl font-extrabold text-[#FF6B35]">42</span>
            <span className="text-[10px] sm:text-xs font-semibold text-[#A1A1AA] uppercase tracking-wider">
              Movies Watched
            </span>
          </div>

          <div className="bg-[#1C1C1C] border border-[#2A2A2A] rounded-xl p-3.5 sm:p-4 text-center flex flex-col items-center gap-1 hover:border-[#FF6B35] transition-colors">
            <span className="text-xl sm:text-2xl font-extrabold text-[#FF6B35]">18</span>
            <span className="text-[10px] sm:text-xs font-semibold text-[#A1A1AA] uppercase tracking-wider">
              In Watchlist
            </span>
          </div>

          <div className="bg-[#1C1C1C] border border-[#2A2A2A] rounded-xl p-3.5 sm:p-4 text-center flex flex-col items-center gap-1 hover:border-[#FF6B35] transition-colors">
            <span className="text-xl sm:text-2xl font-extrabold text-[#FF6B35]">29</span>
            <span className="text-[10px] sm:text-xs font-semibold text-[#A1A1AA] uppercase tracking-wider">
              Ratings Given
            </span>
          </div>
        </div>

        {/* Continue Watching Section */}
        <section className="mb-7">
          <SectionHeader title="Continue Watching" seeAllLink="/movies" />
          <div className="flex gap-3.5 overflow-x-auto pb-3 scrollbar-hide">
            {continueWatchingMovies.map((movie) => (
              <div key={movie.id} className="shrink-0 w-[140px] sm:w-[160px]">
                <MovieCard
                  id={movie.id}
                  image={movie.image}
                  title={movie.title}
                  genre={movie.genre}
                  rating={movie.rating}
                  year={movie.year}
                  progress={movie.progress}
                />
              </div>
            ))}
          </div>
        </section>

        {/* My Watchlist Section */}
        <section className="mb-7">
          <SectionHeader title="My Watchlist" seeAllLink="/watchlist" />
          <div className="flex gap-3.5 overflow-x-auto pb-3 scrollbar-hide">
            {watchlistPreview.map((movie) => (
              <div key={movie.id} className="shrink-0 w-[140px] sm:w-[160px]">
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

        {/* Account Section */}
        <section className="bg-[#1C1C1C] border border-[#2A2A2A] rounded-2xl p-4 sm:p-5 mt-7">
          <h3 className="text-sm sm:text-base font-bold text-white mb-3.5">Account Settings</h3>
          <div className="flex flex-col gap-2">
            {accountLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className={`flex items-center justify-between p-3 bg-[#151515] border border-[#222222] rounded-lg text-xs sm:text-sm font-medium transition-all ${
                  link.isLogout
                    ? "text-[#C1121F] hover:bg-[#C1121F]/10 hover:border-[#C1121F]/30 hover:text-[#C1121F]"
                    : "text-[#D4D4D8] hover:bg-[#242424] hover:text-white"
                }`}
              >
                <div className="flex items-center gap-3">
                  <i className={`${link.icon} ${link.isLogout ? "text-[#C1121F]" : "text-[#FF6B35]"} w-4 text-center`}></i>
                  <span>{link.label}</span>
                </div>
                <i className="fa-solid fa-chevron-right text-[10px] text-[#71717A]"></i>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <BottomNav />
    </div>
  );
}

export default Profile;
