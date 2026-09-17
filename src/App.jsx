import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import Categories from "./pages/Categories/Categories";
import Movies from "./pages/Movies/Movies";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import Watchlist from "./pages/Watchlist/Watchlist";
import Profile from "./pages/Profile/Profile";
import Menu from "./pages/Menu/Menu";
import Settings from "./pages/Settings/Settings";
import Logout from "./pages/Logout/Logout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/movie/:movieId" element={<MovieDetails />} />
      <Route path="/movie-details" element={<Navigate to="/movies" replace />} />
      <Route path="/movie-details/:movieId" element={<MovieDetails />} />
      <Route path="/watchlist" element={<Watchlist />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;