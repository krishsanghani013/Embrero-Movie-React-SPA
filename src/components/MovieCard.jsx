import { Link } from "react-router-dom";

function MovieCard({ image, title, genre, rating }) {
    return (
        <Link
            to="/movie-details"
            className="group block flex-shrink-0 bg-[#1C1C1C] border border-[#2A2A2A] rounded-[16px] overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.4)] hover:shadow-[0_20px_50px_rgba(255,107,53,0.2)] transition-all duration-300"
        >
            <div className="relative aspect-[2/3] overflow-hidden">

                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                <button
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#080808]/80 flex items-center justify-center text-[#71717A] hover:text-[#FF6B35]"
                >
                    <i className="fa-regular fa-heart text-xs"></i>
                </button>

            </div>

            <div className="p-3">

                <h3 className="text-sm font-bold text-[#F5F5F5] line-clamp-2">
                    {title}
                </h3>

                <div className="flex items-center gap-2 text-xs text-[#A1A1AA] mt-2">

                    <span className="flex items-center gap-1">
                        <i className="fa-solid fa-star text-[#FFB000]"></i>
                        {rating}
                    </span>

                    <span>•</span>

                    <span>{genre}</span>

                </div>

            </div>

        </Link>
    );
}

export default MovieCard;