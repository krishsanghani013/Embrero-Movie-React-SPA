import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import BottomNav from "../../components/BottomNav/BottomNav";

function Logout() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-void pt-20 pb-24 md:pb-12 text-zinc-100 flex flex-col">
      <Navbar />

      <main className="max-w-lg mx-auto px-4 sm:px-6 my-auto w-full">
        <div className="bg-surface border border-border-default rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center shadow-2xl">
          <div className="w-16 h-16 rounded-full bg-cherry/15 border border-cherry/30 flex items-center justify-center text-cherry text-2xl mb-4">
            <i className="fa-solid fa-right-from-bracket"></i>
          </div>

          <h1 className="text-xl sm:text-2xl font-black text-white mb-2">Are You Sure You Want to Logout?</h1>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-sm mb-6">
            Logging out will end your current session. You can sign back in anytime to access your personal watchlist and recommendations.
          </p>

          <div className="w-full bg-charcoal border border-border-subtle rounded-xl p-4 mb-6 text-left">
            <h2 className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider mb-2.5">What Happens Next</h2>
            <ul className="flex flex-col gap-2 text-xs text-zinc-300">
              <li className="flex items-start gap-2.5">
                <i className="fa-solid fa-circle-exclamation text-cherry text-xs mt-0.5 shrink-0"></i>
                <span>Sign you out from your account on this browser.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <i className="fa-solid fa-circle-exclamation text-cherry text-xs mt-0.5 shrink-0"></i>
                <span>Pause automatic syncing of your viewing progress.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <i className="fa-solid fa-circle-exclamation text-cherry text-xs mt-0.5 shrink-0"></i>
                <span>Your saved movies in the catalog will remain securely stored.</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full">
            <button
              type="button"
              className="flex-1 py-3 px-5 bg-cherry hover:bg-crimson text-white rounded-xl text-sm font-bold shadow-[0_4px_16px_rgba(193,18,31,0.35)] transition-all cursor-pointer"
              onClick={() => navigate("/")}
              id="confirm-logout-btn"
            >
              <i className="fa-solid fa-right-from-bracket mr-1.5"></i>
              <span>Yes, Log Out</span>
            </button>

            <button
              type="button"
              className="flex-1 py-3 px-5 bg-charcoal border border-border-strong hover:bg-elevated text-zinc-300 hover:text-white rounded-xl text-sm font-semibold transition-all cursor-pointer"
              onClick={() => navigate(-1)}
              id="cancel-logout-btn"
            >
              <span>Cancel</span>
            </button>
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}

export default Logout;
