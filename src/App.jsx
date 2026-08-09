import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
import Login from "./pages/Login";
import Signin from "./pages/Signin";
import Profile from "./pages/Profile";
import Watchlist from "./pages/Watchlist";

function App() {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Home />} />

                <Route path="/movies" element={<Movies />} />

                <Route path="/movie-details" element={<MovieDetails />} />

                <Route path="/Watchlist" element={<Watchlist />} />

                <Route path="/login" element={<Login />} />

                <Route path="/signin" element={<Signin />} />

                <Route path="/profile" element={<Profile />} />

            </Routes>
        </BrowserRouter>
    );
}

export default App;