const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const BASE_URL = "https://api.themoviedb.org/3";

export async function getTrendingMovies() {
  const response = await fetch(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch trending movies");
  }

  const data = await response.json();

  return data.results;
}

export async function getPopularMovies() {
  const response = await fetch(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch popular movies");
  }

  const data = await response.json();

  return data.results;
}

export async function getUpcomingMovies() {
  const response = await fetch(
    `${BASE_URL}/movie/upcoming?api_key=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch upcoming movies");
  }

  const data = await response.json();

  return data.results;
}
