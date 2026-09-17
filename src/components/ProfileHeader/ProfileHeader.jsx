function ProfileHeader({
  name = "Krish Sanghani",
  email = "krishsanghani013@gmail.com",
  avatar = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&auto=format&fit=crop&q=80",
  onEdit,
}) {
  return (
    <div className="flex items-center gap-4 sm:gap-5 bg-surface border border-border-default rounded-2xl p-4 sm:p-5 mb-6">
      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-ember shadow-[0_0_16px_rgba(255,107,53,0.35)] overflow-hidden shrink-0 bg-charcoal">
        <img src={avatar} alt={name} className="w-full h-full object-cover" />
      </div>

      <div className="flex-1 flex flex-col gap-1">
        <h2 className="text-lg sm:text-xl font-extrabold text-white leading-tight">{name}</h2>
        <span className="text-xs text-zinc-400">{email}</span>
        <button
          type="button"
          className="mt-1 self-start inline-flex items-center gap-1.5 text-[11px] font-bold text-ember bg-ember/15 border border-ember/30 px-3 py-1 rounded-full hover:bg-ember hover:text-white transition-all cursor-pointer"
          onClick={onEdit}
          id="edit-profile-btn"
        >
          <i className="fa-solid fa-pen text-[9px]"></i>
          <span>Edit Profile</span>
        </button>
      </div>
    </div>
  );
}

export default ProfileHeader;
