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

  const watchlistPreview = moviesData.slice(4, 9);

  const accountLinks = [
    { label: "Account & Personal Details", icon: "fa-regular fa-user", to: "/settings" },
    { label: "Playback & Video Quality", icon: "fa-solid fa-sliders", to: "/settings" },
    { label: "Notification Preferences", icon: "fa-regular fa-bell", to: "/settings" },
    { label: "Theme & Display", icon: "fa-solid fa-palette", to: "/settings" },
    { label: "Privacy & Security", icon: "fa-solid fa-shield-halved", to: "/settings" },
    { label: "Log Out", icon: "fa-solid fa-right-from-bracket", to: "/logout", isLogout: true },
  ];

  return (
    <div className="min-h-screen bg-void pt-20 pb-24 md:pb-12 text-zinc-100">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <ProfileHeader
          name="Krish Sanghani"
          email="krishsanghani013@gmail.com"
          avatar="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&auto=format&fit=crop&q=80"
          onEdit={() => {}}
        />

        {/* 4 Statistics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8">
          <div className="bg-surface border border-border-default rounded-xl p-4 text-center flex flex-col items-center gap-1 hover:border-ember transition-colors">
            <span className="text-2xl font-black text-ember">42</span>
            <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Movies Watched</span>
          </div>

          <div className="bg-surface border border-border-default rounded-xl p-4 text-center flex flex-col items-center gap-1 hover:border-ember transition-colors">
            <span className="text-2xl font-black text-ember">18</span>
            <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">In Watchlist</span>
          </div>

          <div className="bg-surface border border-border-default rounded-xl p-4 text-center flex flex-col items-center gap-1 hover:border-ember transition-colors">
            <span className="text-2xl font-black text-ember">29</span>
            <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Ratings Given</span>
          </div>

          <div className="bg-surface border border-border-default rounded-xl p-4 text-center flex flex-col items-center gap-1 hover:border-ember transition-colors">
            <span className="text-xl font-black text-ember">Sci-Fi</span>
            <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Favorite Genre</span>
          </div>
        </div>

        {/* Continue Watching Section */}
        <section className="mb-8">
          <SectionHeader title="Continue Watching" seeAllLink="/movies" />
          <div className="flex gap-3.5 sm:gap-4 overflow-x-auto pb-3 scrollbar-hide">
            {continueWatchingMovies.map((movie) => (
              <div key={movie.id} className="shrink-0 w-35 sm:w-40">
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
        <section className="mb-8">
          <SectionHeader title="My Watchlist" seeAllLink="/watchlist" />
          <div className="flex gap-3.5 sm:gap-4 overflow-x-auto pb-3 scrollbar-hide">
            {watchlistPreview.map((movie) => (
              <div key={movie.id} className="shrink-0 w-35 sm:w-40">
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

        {/* Account Settings Quick Links */}
        <section className="bg-surface border border-border-default rounded-2xl p-5 mt-8">
          <h3 className="text-sm font-bold text-white mb-3.5">Quick Settings &amp; Preferences</h3>
          <div className="flex flex-col gap-2">
            {accountLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className={`flex items-center justify-between p-3.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  link.isLogout
                    ? "bg-charcoal border border-border-subtle text-cherry hover:bg-cherry/15 hover:border-cherry/30"
                    : "bg-charcoal border border-border-subtle text-zinc-300 hover:bg-elevated hover:text-white"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`w-4 text-center ${link.isLogout ? "text-cherry" : "text-ember"}`}>
                    <i className={link.icon}></i>
                  </span>
                  <span>{link.label}</span>
                </div>
                <i className="fa-solid fa-chevron-right text-[10px] text-zinc-500"></i>
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
