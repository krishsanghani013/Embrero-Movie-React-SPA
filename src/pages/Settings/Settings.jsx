import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import BottomNav from "../../components/BottomNav/BottomNav";
import Toggle from "../../components/Toggle/Toggle";

function Settings() {
  const navigate = useNavigate();

  // Appearance & Dark Mode State
  const [darkMode, setDarkMode] = useState(true);
  const [theme, setTheme] = useState("Ember Noir (Default)");

  // Notification States
  const [pushNotif, setPushNotif] = useState(true);
  const [emailNotif, setEmailNotif] = useState(false);

  // Language State
  const [language, setLanguage] = useState("English (US)");

  // Privacy States
  const [saveHistory, setSaveHistory] = useState(true);
  const [personalizedRecs, setPersonalizedRecs] = useState(true);

  // Playback States
  const [autoplay, setAutoplay] = useState(true);
  const [wifiOnly, setWifiOnly] = useState(false);
  const [quality, setQuality] = useState("Full HD (1080p)");

  return (
    <div className="min-h-screen bg-void pt-20 pb-24 md:pb-12 text-zinc-100">
      <Navbar />

      <main className="max-w-2xl mx-auto px-4 sm:px-6">
        {/* Header Bar with Back Button */}
        <div className="flex items-center gap-4 mb-6">
          <button
            type="button"
            className="w-10 h-10 rounded-xl bg-surface border border-border-default flex items-center justify-center text-zinc-300 hover:border-ember hover:text-ember transition-all cursor-pointer"
            onClick={() => navigate(-1)}
            aria-label="Go back"
          >
            <i className="fa-solid fa-arrow-left text-sm"></i>
          </button>
          <h1 className="text-2xl font-extrabold text-white">App Settings</h1>
        </div>

        {/* 1. Account Section */}
        <div className="bg-surface border border-border-default rounded-2xl p-5 mb-5">
          <h2 className="text-[11px] font-bold uppercase tracking-wider text-ember mb-3.5 flex items-center gap-2">
            <i className="fa-regular fa-user"></i> Account
          </h2>
          <Link to="/profile" className="flex items-center justify-between group">
            <div className="flex flex-col">
              <span className="text-sm font-bold text-white group-hover:text-ember transition-colors">Krish Sanghani</span>
              <span className="text-xs text-zinc-400">krishsanghani013@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-500 text-xs group-hover:text-white transition-colors">
              <span>Manage Profile</span>
              <i className="fa-solid fa-chevron-right text-[10px]"></i>
            </div>
          </Link>
        </div>

        {/* 2. Appearance Section */}
        <div className="bg-surface border border-border-default rounded-2xl p-5 mb-5">
          <h2 className="text-[11px] font-bold uppercase tracking-wider text-ember mb-3.5 flex items-center gap-2">
            <i className="fa-solid fa-palette"></i> Appearance
          </h2>
          <div className="flex flex-col gap-4">
            <Toggle
              id="toggle-dark-mode"
              label="Dark Cinematic Mode"
              description="Use high-contrast OLED black and Ember Glow accents"
              checked={darkMode}
              onChange={(e) => setDarkMode(e.target.checked)}
            />

            <div className="h-px bg-border-subtle"></div>

            <div className="flex items-center justify-between gap-4">
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-white">Color Accent Theme</span>
                <span className="text-xs text-zinc-500">Active UI glow palette</span>
              </div>
              <select
                className="h-9 px-3 bg-charcoal border border-border-default rounded-lg text-xs text-zinc-300 outline-none cursor-pointer"
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
                aria-label="Color Accent Theme"
              >
                <option value="Ember Noir (Default)">Ember Noir (Default)</option>
                <option value="Golden Ember">Golden Ember</option>
                <option value="Crimson Noir">Crimson Noir</option>
                <option value="Charcoal Dark">Charcoal Dark</option>
              </select>
            </div>
          </div>
        </div>

        {/* 3. Notifications Section */}
        <div className="bg-surface border border-border-default rounded-2xl p-5 mb-5">
          <h2 className="text-[11px] font-bold uppercase tracking-wider text-ember mb-3.5 flex items-center gap-2">
            <i className="fa-regular fa-bell"></i> Notifications
          </h2>
          <div className="flex flex-col gap-4">
            <Toggle
              id="toggle-push"
              label="Push Notifications"
              description="Receive alerts for premiere releases &amp; watchlist updates"
              checked={pushNotif}
              onChange={(e) => setPushNotif(e.target.checked)}
            />

            <div className="h-px bg-border-subtle"></div>

            <Toggle
              id="toggle-email"
              label="Email Digests &amp; News"
              description="Weekly recommendations and upcoming release radar"
              checked={emailNotif}
              onChange={(e) => setEmailNotif(e.target.checked)}
            />
          </div>
        </div>

        {/* 4. Language Section */}
        <div className="bg-surface border border-border-default rounded-2xl p-5 mb-5">
          <h2 className="text-[11px] font-bold uppercase tracking-wider text-ember mb-3.5 flex items-center gap-2">
            <i className="fa-solid fa-globe"></i> Language &amp; Region
          </h2>
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-white">Interface Language</span>
              <span className="text-xs text-zinc-500">Display language for UI menus</span>
            </div>
            <select
              className="h-9 px-3 bg-charcoal border border-border-default rounded-lg text-xs text-zinc-300 outline-none cursor-pointer"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              aria-label="Interface Language"
            >
              <option value="English (US)">English (US)</option>
              <option value="Hindi (हिंदी)">Hindi (हिंदी)</option>
              <option value="Spanish (Español)">Spanish (Español)</option>
              <option value="French (Français)">French (Français)</option>
              <option value="German (Deutsch)">German (Deutsch)</option>
            </select>
          </div>
        </div>

        {/* 5. Playback & Quality */}
        <div className="bg-surface border border-border-default rounded-2xl p-5 mb-5">
          <h2 className="text-[11px] font-bold uppercase tracking-wider text-ember mb-3.5 flex items-center gap-2">
            <i className="fa-solid fa-play"></i> Playback &amp; Streaming
          </h2>
          <div className="flex flex-col gap-4">
            <Toggle
              id="toggle-autoplay"
              label="Autoplay Previews"
              description="Automatically play trailers and previews when hovering"
              checked={autoplay}
              onChange={(e) => setAutoplay(e.target.checked)}
            />

            <div className="h-px bg-border-subtle"></div>

            <Toggle
              id="toggle-wifi"
              label="Stream On Wi-Fi Only"
              description="Prevent high data usage over cellular mobile networks"
              checked={wifiOnly}
              onChange={(e) => setWifiOnly(e.target.checked)}
            />

            <div className="h-px bg-border-subtle"></div>

            <div className="flex items-center justify-between gap-4">
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-white">Default Video Quality</span>
                <span className="text-xs text-zinc-500">Preview resolution when available</span>
              </div>
              <select
                className="h-9 px-3 bg-charcoal border border-border-default rounded-lg text-xs text-zinc-300 outline-none cursor-pointer"
                value={quality}
                onChange={(e) => setQuality(e.target.value)}
                aria-label="Default Video Quality"
              >
                <option value="Auto (Adaptive)">Auto (Adaptive)</option>
                <option value="Full HD (1080p)">Full HD (1080p)</option>
                <option value="Ultra HD 4K">Ultra HD 4K</option>
                <option value="Data Saver (480p)">Data Saver (480p)</option>
              </select>
            </div>
          </div>
        </div>

        {/* 6. Privacy & Data */}
        <div className="bg-surface border border-border-default rounded-2xl p-5 mb-5">
          <h2 className="text-[11px] font-bold uppercase tracking-wider text-ember mb-3.5 flex items-center gap-2">
            <i className="fa-solid fa-shield-halved"></i> Privacy &amp; Data
          </h2>
          <div className="flex flex-col gap-4">
            <Toggle
              id="toggle-history"
              label="Search &amp; Watch History"
              description="Save viewed titles to improve recommendations"
              checked={saveHistory}
              onChange={(e) => setSaveHistory(e.target.checked)}
            />

            <div className="h-px bg-border-subtle"></div>

            <Toggle
              id="toggle-recs"
              label="Personalized Recommendations"
              description="Tailor home feed based on your rating patterns"
              checked={personalizedRecs}
              onChange={(e) => setPersonalizedRecs(e.target.checked)}
            />

            <div className="h-px bg-border-subtle"></div>

            <div className="flex items-center justify-between gap-4">
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-white">Clear Cached Posters</span>
                <span className="text-xs text-zinc-500">Frees local browser temporary cache (~142 MB)</span>
              </div>
              <button
                type="button"
                className="px-3.5 py-1.5 bg-charcoal border border-border-default hover:border-ember text-zinc-300 hover:text-white rounded-lg text-xs font-semibold transition-all cursor-pointer"
                onClick={() => alert("Cached poster data cleared successfully!")}
              >
                <i className="fa-solid fa-broom mr-1"></i> Clear Cache
              </button>
            </div>
          </div>
        </div>

        {/* 7. About Section */}
        <div className="bg-surface border border-border-default rounded-2xl p-5 mb-5">
          <h2 className="text-[11px] font-bold uppercase tracking-wider text-ember mb-3.5 flex items-center gap-2">
            <i className="fa-solid fa-circle-info"></i> About Embrero
          </h2>
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-white font-medium">Application Version</span>
              <span className="text-[11px] font-bold text-ember bg-ember/15 border border-ember/30 px-2.5 py-0.5 rounded-full">
                v1.0.0 (Production UI)
              </span>
            </div>

            <div className="h-px bg-border-subtle"></div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-white font-medium">Design Architecture</span>
              <span className="text-xs text-zinc-400">Ember Noir &amp; Ember Glow Design System</span>
            </div>

            <div className="h-px bg-border-subtle"></div>

            <div className="flex items-center gap-4 text-xs text-zinc-500 mt-1">
              <Link to="#" className="hover:text-ember transition-colors">Terms of Service</Link>
              <span>•</span>
              <Link to="#" className="hover:text-ember transition-colors">Privacy Policy</Link>
              <span>•</span>
              <Link to="#" className="hover:text-ember transition-colors">Licenses</Link>
            </div>
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}

export default Settings;
