import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import BottomNav from "../../components/BottomNav/BottomNav";
import Toggle from "../../components/Toggle/Toggle";

function Settings() {
  const navigate = useNavigate();

  // Switch states
  const [pushNotif, setPushNotif] = useState(true);
  const [emailNotif, setEmailNotif] = useState(false);
  const [autoplay, setAutoplay] = useState(true);
  const [wifiOnly, setWifiOnly] = useState(false);

  // Preference states
  const [language, setLanguage] = useState("English (US)");
  const [theme, setTheme] = useState("Ember Noir (Default)");
  const [quality, setQuality] = useState("Full HD (1080p)");

  return (
    <div className="min-h-screen bg-[#080808] pt-[106px] pb-16">
      <Navbar />

      <main className="max-w-2xl mx-auto p-4 sm:p-6">
        {/* Header Bar with Back Button */}
        <div className="flex items-center gap-4 mb-6">
          <button
            type="button"
            className="w-10 h-10 rounded-lg bg-[#1C1C1C] border border-[#2A2A2A] flex items-center justify-center text-[#D4D4D8] hover:border-[#FF6B35] hover:text-[#FF6B35] transition-all cursor-pointer"
            onClick={() => navigate(-1)}
            aria-label="Go back"
          >
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <h1 className="text-xl sm:text-2xl font-extrabold text-white">Settings</h1>
        </div>

        {/* Account Section */}
        <div className="bg-[#1C1C1C] border border-[#2A2A2A] rounded-xl p-4 sm:p-5 mb-5">
          <h2 className="text-xs font-bold uppercase tracking-wider text-[#FF6B35] mb-3.5 flex items-center gap-2">
            <i className="fa-regular fa-user"></i> Account
          </h2>
          <div>
            <Link to="/profile" className="flex items-center justify-between text-[#F5F5F5] hover:text-white transition-colors">
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-white">Manage Your Account</span>
                <span className="text-xs text-[#71717A]">Krish Sanghani • krishsanghani013@gmail.com</span>
              </div>
              <i className="fa-solid fa-chevron-right text-xs text-[#71717A]"></i>
            </Link>
          </div>
        </div>

        {/* Preferences Section */}
        <div className="bg-[#1C1C1C] border border-[#2A2A2A] rounded-xl p-4 sm:p-5 mb-5">
          <h2 className="text-xs font-bold uppercase tracking-wider text-[#FF6B35] mb-3.5 flex items-center gap-2">
            <i className="fa-solid fa-sliders"></i> Preferences
          </h2>
          <div className="flex flex-col gap-3.5">
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-white">Language</span>
                <span className="text-xs text-[#71717A]">App interface display language</span>
              </div>
              <select
                className="bg-[#151515] border border-[#2A2A2A] rounded-lg text-[#D4D4D8] text-xs sm:text-sm font-medium px-3 py-1.5 outline-none cursor-pointer focus:border-[#FF6B35]"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                aria-label="Select language"
              >
                <option value="English (US)">English (US)</option>
                <option value="Hindi">Hindi (हिंदी)</option>
                <option value="Spanish">Español</option>
                <option value="French">Français</option>
              </select>
            </div>

            <div className="h-px bg-[#222222]"></div>

            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-white">Theme</span>
                <span className="text-xs text-[#71717A]">Dark and ember accent palette</span>
              </div>
              <select
                className="bg-[#151515] border border-[#2A2A2A] rounded-lg text-[#D4D4D8] text-xs sm:text-sm font-medium px-3 py-1.5 outline-none cursor-pointer focus:border-[#FF6B35]"
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
                aria-label="Select theme"
              >
                <option value="Ember Noir (Default)">Ember Noir (Default)</option>
                <option value="Charcoal Dark">Charcoal Dark</option>
                <option value="Midnight Void">Midnight Void</option>
              </select>
            </div>

            <div className="h-px bg-[#222222]"></div>

            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-white">Video Quality</span>
                <span className="text-xs text-[#71717A]">Streaming and preview resolution</span>
              </div>
              <select
                className="bg-[#151515] border border-[#2A2A2A] rounded-lg text-[#D4D4D8] text-xs sm:text-sm font-medium px-3 py-1.5 outline-none cursor-pointer focus:border-[#FF6B35]"
                value={quality}
                onChange={(e) => setQuality(e.target.value)}
                aria-label="Select video quality"
              >
                <option value="Auto (Adaptive)">Auto (Adaptive)</option>
                <option value="Full HD (1080p)">Full HD (1080p)</option>
                <option value="Ultra HD 4K">Ultra HD 4K</option>
                <option value="Data Saver (480p)">Data Saver (480p)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Notifications Section */}
        <div className="bg-[#1C1C1C] border border-[#2A2A2A] rounded-xl p-4 sm:p-5 mb-5">
          <h2 className="text-xs font-bold uppercase tracking-wider text-[#FF6B35] mb-3.5 flex items-center gap-2">
            <i className="fa-regular fa-bell"></i> Notifications
          </h2>
          <div className="flex flex-col gap-3.5">
            <Toggle
              id="toggle-push"
              label="Push Notifications"
              description="Receive alerts for new releases &amp; watchlist updates"
              checked={pushNotif}
              onChange={(e) => setPushNotif(e.target.checked)}
            />

            <div className="h-px bg-[#222222]"></div>

            <Toggle
              id="toggle-email"
              label="Email Notifications"
              description="Weekly digests and personalized recommendations"
              checked={emailNotif}
              onChange={(e) => setEmailNotif(e.target.checked)}
            />
          </div>
        </div>

        {/* Playback Section */}
        <div className="bg-[#1C1C1C] border border-[#2A2A2A] rounded-xl p-4 sm:p-5 mb-5">
          <h2 className="text-xs font-bold uppercase tracking-wider text-[#FF6B35] mb-3.5 flex items-center gap-2">
            <i className="fa-solid fa-play"></i> Playback
          </h2>
          <div className="flex flex-col gap-3.5">
            <Toggle
              id="toggle-autoplay"
              label="Autoplay Next Episode"
              description="Automatically queue and play the next title in list"
              checked={autoplay}
              onChange={(e) => setAutoplay(e.target.checked)}
            />

            <div className="h-px bg-[#222222]"></div>

            <Toggle
              id="toggle-wifi"
              label="Download Over Wi-Fi Only"
              description="Preserve mobile data when downloading content"
              checked={wifiOnly}
              onChange={(e) => setWifiOnly(e.target.checked)}
            />
          </div>
        </div>

        {/* Other Section */}
        <div className="bg-[#1C1C1C] border border-[#2A2A2A] rounded-xl p-4 sm:p-5 mb-5">
          <h2 className="text-xs font-bold uppercase tracking-wider text-[#FF6B35] mb-3.5 flex items-center gap-2">
            <i className="fa-solid fa-wrench"></i> Other
          </h2>
          <div className="flex flex-col gap-3.5">
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-white">Clear Cache</span>
                <span className="text-xs text-[#71717A]">Frees temporary cached poster data (~142 MB)</span>
              </div>
              <button
                type="button"
                className="inline-flex items-center gap-1.5 bg-[#151515] border border-[#2A2A2A] text-[#D4D4D8] hover:border-[#FF6B35] hover:text-[#FF6B35] px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer"
              >
                <i className="fa-solid fa-broom text-xs"></i> Clear
              </button>
            </div>

            <div className="h-px bg-[#222222]"></div>

            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-white">Clear Downloads</span>
                <span className="text-xs text-[#71717A]">Removes offline media files (0 MB)</span>
              </div>
              <button
                type="button"
                className="inline-flex items-center gap-1.5 bg-[#151515] border border-[#2A2A2A] text-[#D4D4D8] hover:border-[#FF6B35] hover:text-[#FF6B35] px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer"
              >
                <i className="fa-solid fa-trash-can text-xs"></i> Clear
              </button>
            </div>

            <div className="h-px bg-[#222222]"></div>

            <Link to="/menu" className="flex items-center justify-between text-[#D4D4D8] hover:text-white transition-colors">
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-white">Help &amp; Support</span>
                <span className="text-xs text-[#71717A]">FAQs, contact us and documentation</span>
              </div>
              <i className="fa-solid fa-chevron-right text-xs text-[#71717A]"></i>
            </Link>
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}

export default Settings;
