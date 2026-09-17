import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import BottomNav from "../../components/BottomNav/BottomNav";

function Logout() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#080808] pt-[106px] pb-16">
      <Navbar />

      <main className="max-w-lg mx-auto p-4 sm:p-6">
        {/* Back + Header */}
        <div className="flex items-center gap-4 mb-7">
          <button
            type="button"
            className="w-10 h-10 rounded-lg bg-[#1C1C1C] border border-[#2A2A2A] flex items-center justify-center text-[#D4D4D8] hover:border-[#FF6B35] hover:text-[#FF6B35] transition-all cursor-pointer"
            onClick={() => navigate(-1)}
            aria-label="Go back"
          >
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <h1 className="text-xl sm:text-2xl font-extrabold text-white">Logout</h1>
        </div>

        {/* Centered Confirmation Box */}
        <div className="bg-[#1C1C1C] border border-[#2A2A2A] rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center shadow-2xl">
          <div className="w-16 h-16 rounded-full bg-[#C1121F]/15 border border-[#C1121F]/30 flex items-center justify-center text-[#C1121F] text-2xl mb-4">
            <i className="fa-solid fa-right-from-bracket"></i>
          </div>

          <h2 className="text-lg sm:text-xl font-extrabold text-white mb-2">
            Are You Sure You Want to Logout?
          </h2>
          <p className="text-xs sm:text-sm leading-relaxed text-[#A1A1AA] max-w-sm mb-6">
            Logging out will require you to log back in to access your saved profile,
            custom watchlists, and personalized movie recommendations.
          </p>

          {/* Consequences List matching wireframe */}
          <div className="w-full bg-[#151515] border border-[#222222] rounded-xl p-4 mb-6 text-left">
            <h3 className="text-[11px] font-bold text-[#71717A] uppercase tracking-wider mb-2.5">
              What Happens Next:
            </h3>
            <ul className="flex flex-col gap-2">
              <li className="flex items-start gap-2.5 text-xs text-[#D4D4D8]">
                <i className="fa-solid fa-circle-exclamation text-[#C1121F] text-xs mt-0.5"></i>
                <span>Sign you out from your account on this device.</span>
              </li>
              <li className="flex items-start gap-2.5 text-xs text-[#D4D4D8]">
                <i className="fa-solid fa-circle-exclamation text-[#C1121F] text-xs mt-0.5"></i>
                <span>Clear your active watchlist &amp; viewing progress cache.</span>
              </li>
              <li className="flex items-start gap-2.5 text-xs text-[#D4D4D8]">
                <i className="fa-solid fa-circle-exclamation text-[#C1121F] text-xs mt-0.5"></i>
                <span>Reset current app settings and playback preferences to default.</span>
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 w-full">
            <button
              type="button"
              className="flex-1 py-3 px-5 bg-[#C1121F] hover:bg-[#8B1520] text-white rounded-lg text-sm font-bold transition-all shadow-[0_4px_16px_rgba(193,18,31,0.3)] cursor-pointer"
              onClick={() => navigate("/")}
              id="confirm-logout-btn"
            >
              <i className="fa-solid fa-right-from-bracket mr-2"></i>
              Logout
            </button>

            <button
              type="button"
              className="flex-1 py-3 px-5 bg-[#151515] border border-[#3A3A3A] hover:bg-[#242424] text-[#D4D4D8] hover:text-white rounded-lg text-sm font-semibold transition-all cursor-pointer"
              onClick={() => navigate(-1)}
              id="cancel-logout-btn"
            >
              Cancel
            </button>
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}

export default Logout;
