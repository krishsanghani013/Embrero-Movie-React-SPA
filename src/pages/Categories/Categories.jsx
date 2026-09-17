import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import BottomNav from "../../components/BottomNav/BottomNav";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import SectionHeader from "../../components/SectionHeader/SectionHeader";

function Categories() {
  const [selectedSubCategory, setSelectedSubCategory] = useState("All");

  const genres = [
    { title: "Action", icon: "fa-solid fa-burst", count: "120+ Titles" },
    { title: "Comedy", icon: "fa-solid fa-masks-theater", count: "85+ Titles" },
    { title: "Romance", icon: "fa-solid fa-heart", count: "64+ Titles" },
    { title: "Horror", icon: "fa-solid fa-ghost", count: "48+ Titles" },
    { title: "Sci-Fi", icon: "fa-solid fa-rocket", count: "92+ Titles" },
    { title: "Thriller", icon: "fa-solid fa-skull-crossbones", count: "78+ Titles" },
    { title: "Adventure", icon: "fa-solid fa-compass", count: "110+ Titles" },
    { title: "Family", icon: "fa-solid fa-people-roof", count: "55+ Titles" },
  ];

  const subCategories = [
    "All",
    "Bollywood",
    "Anime",
    "Documentary",
    "Book Adaptations",
  ];

  const topCategories = [
    { title: "Blockbuster Hits", icon: "fa-solid fa-trophy", count: "50+ Titles" },
    { title: "Critically Acclaimed", icon: "fa-solid fa-award", count: "34+ Titles" },
    { title: "Indie Gems", icon: "fa-solid fa-gem", count: "28+ Titles" },
    { title: "Global Cinema", icon: "fa-solid fa-earth-americas", count: "42+ Titles" },
    { title: "Classic Vault", icon: "fa-solid fa-film", count: "60+ Titles" },
    { title: "Franchise Universes", icon: "fa-solid fa-infinity", count: "18+ Titles" },
  ];

  const moods = [
    { title: "Feel Good", emoji: "✨", count: "Inspiring & light" },
    { title: "Emotional", emoji: "🥺", count: "Deep & heartfelt" },
    { title: "Exciting", emoji: "⚡", count: "Adrenaline packed" },
    { title: "Mind Bending", emoji: "🌀", count: "Mystery & twists" },
  ];

  return (
    <div className="min-h-screen bg-[#080808] pt-[106px] pb-16">
      <Navbar />

      <main className="max-w-7xl mx-auto p-4 sm:p-6">
        {/* Browse by Genre */}
        <section className="mb-8">
          <SectionHeader title="Browse by Genre" seeAllLink="/search" />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-3.5">
            {genres.map((genre) => (
              <CategoryCard
                key={genre.title}
                title={genre.title}
                icon={genre.icon}
                count={genre.count}
                to={`/search?genre=${genre.title}`}
              />
            ))}
          </div>
        </section>

        {/* Categories Section with Filter Pills */}
        <section className="mb-8">
          <SectionHeader title="Curated Collections" seeAllLink="/search" />
          <div className="flex gap-2.5 overflow-x-auto pb-2 mb-5 scrollbar-hide">
            {subCategories.map((sub) => (
              <button
                key={sub}
                type="button"
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedSubCategory === sub
                    ? "bg-[#FF6B35] text-white"
                    : "bg-[#1C1C1C] border border-[#2A2A2A] text-[#D4D4D8] hover:bg-[#242424] hover:text-white"
                }`}
                onClick={() => setSelectedSubCategory(sub)}
              >
                {sub}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {topCategories.map((cat) => (
              <CategoryCard
                key={cat.title}
                title={cat.title}
                icon={cat.icon}
                count={cat.count}
                to="/search"
              />
            ))}
          </div>
        </section>

        {/* Browse by Mood */}
        <section className="mb-8">
          <SectionHeader title="Browse by Mood" seeAllLink="/search" />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-3.5">
            {moods.map((mood) => (
              <Link
                to="/search"
                key={mood.title}
                className="flex flex-col items-center justify-center p-5 bg-[#1C1C1C] border border-[#2A2A2A] rounded-xl text-center gap-2 transition-all hover:border-[#FF6B35] hover:-translate-y-1 hover:bg-[#242424]"
              >
                <span className="text-3xl">{mood.emoji}</span>
                <span className="text-sm font-bold text-white">{mood.title}</span>
                <span className="text-[11px] text-[#71717A]">{mood.count}</span>
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
