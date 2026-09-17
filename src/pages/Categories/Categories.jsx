import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import BottomNav from "../../components/BottomNav/BottomNav";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import SectionHeader from "../../components/SectionHeader/SectionHeader";

function Categories() {
  // Exact 12 requested categories
  const categoriesList = [
    { title: "Action", icon: "fa-solid fa-burst", count: "140+ Titles" },
    { title: "Adventure", icon: "fa-solid fa-compass", count: "115+ Titles" },
    { title: "Animation", icon: "fa-solid fa-wand-magic-sparkles", count: "90+ Titles" },
    { title: "Comedy", icon: "fa-solid fa-masks-theater", count: "105+ Titles" },
    { title: "Crime", icon: "fa-solid fa-handcuffs", count: "75+ Titles" },
    { title: "Drama", icon: "fa-solid fa-heart-pulse", count: "160+ Titles" },
    { title: "Horror", icon: "fa-solid fa-ghost", count: "65+ Titles" },
    { title: "Mystery", icon: "fa-solid fa-magnifying-glass-location", count: "55+ Titles" },
    { title: "Romance", icon: "fa-solid fa-heart", count: "80+ Titles" },
    { title: "Sci-Fi", icon: "fa-solid fa-rocket", count: "98+ Titles" },
    { title: "Thriller", icon: "fa-solid fa-skull-crossbones", count: "88+ Titles" },
    { title: "Documentary", icon: "fa-solid fa-video", count: "45+ Titles" },
  ];

  const curatedCollections = [
    { title: "Blockbuster Hits", icon: "fa-solid fa-trophy", count: "50+ Titles" },
    { title: "Critically Acclaimed", icon: "fa-solid fa-award", count: "34+ Titles" },
    { title: "Indie Gems", icon: "fa-solid fa-gem", count: "28+ Titles" },
    { title: "Global Cinema", icon: "fa-solid fa-earth-americas", count: "42+ Titles" },
    { title: "Classic Vault", icon: "fa-solid fa-film", count: "60+ Titles" },
    { title: "Franchise Universes", icon: "fa-solid fa-infinity", count: "18+ Titles" },
  ];

  const moods = [
    { title: "Feel Good", emoji: "✨", count: "Inspiring & uplifting" },
    { title: "Emotional", emoji: "🥺", count: "Deep & heartfelt" },
    { title: "Adrenaline Rush", emoji: "⚡", count: "High-octane action" },
    { title: "Mind Bending", emoji: "🌀", count: "Puzzles & plot twists" },
  ];

  return (
    <div className="min-h-screen bg-void pt-20 pb-24 md:pb-12 text-zinc-100">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white mb-1">Categories &amp; Genres</h1>
          <p className="text-xs sm:text-sm text-zinc-400">
            Explore films curated by genre, cinematic universe, and emotional mood.
          </p>
        </div>

        {/* 12 Primary Genres */}
        <section className="mb-9">
          <SectionHeader title="Browse by Genre" seeAllLink="/search" />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {categoriesList.map((category) => (
              <CategoryCard
                key={category.title}
                title={category.title}
                icon={category.icon}
                count={category.count}
                to="/search"
              />
            ))}
          </div>
        </section>

        {/* Curated Collections */}
        <section className="mb-9">
          <SectionHeader title="Curated Collections" seeAllLink="/search" />
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {curatedCollections.map((col) => (
              <CategoryCard
                key={col.title}
                title={col.title}
                icon={col.icon}
                count={col.count}
                to="/search"
              />
            ))}
          </div>
        </section>

        {/* Browse by Mood */}
        <section className="mb-9">
          <SectionHeader title="Browse by Mood" seeAllLink="/search" />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {moods.map((mood) => (
              <Link
                to="/search"
                key={mood.title}
                className="group flex flex-col items-center justify-center p-5 bg-surface border border-border-default rounded-xl text-center gap-2 transition-all hover:border-ember hover:bg-elevated hover:-translate-y-1 hover:shadow-[0_4px_16px_rgba(255,107,53,0.15)]"
              >
                <span className="text-3xl transition-transform group-hover:scale-110">{mood.emoji}</span>
                <span className="text-sm font-bold text-white">{mood.title}</span>
                <span className="text-[11px] text-zinc-500">{mood.count}</span>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <BottomNav />
    </div>
  );
}

export default Categories;
