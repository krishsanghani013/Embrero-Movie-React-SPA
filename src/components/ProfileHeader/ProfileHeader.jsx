function ProfileHeader({
  name = "Krish Sanghani",
  email = "krishsanghani013@gmail.com",
  avatar = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=160&auto=format&fit=crop&q=80",
  onEdit,
}) {
  return (
    <div className="flex items-center gap-4 bg-[#1C1C1C] border border-[#2A2A2A] rounded-2xl p-4 sm:p-5 mb-6">
      <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full border-2 border-[#FF6B35] overflow-hidden shrink-0 bg-[#151515]">
        <img src={avatar} alt={name} className="w-full h-full object-cover" />
      </div>

      <div className="flex-1 flex flex-col gap-0.5">
        <h2 className="text-base sm:text-lg font-extrabold text-white">{name}</h2>
        <span className="text-xs text-[#A1A1AA]">{email}</span>
        <button
          type="button"
          className="mt-2 self-start inline-flex items-center gap-1.5 text-xs font-semibold text-[#FF6B35] bg-[#FF6B35]/10 border border-[#FF6B35]/30 px-3 py-1 rounded-full hover:bg-[#FF6B35] hover:text-white transition-all"
          onClick={onEdit}
          id="edit-profile-btn"
        >
          <i className="fa-solid fa-pen text-[10px]"></i>
          <span>Edit Profile</span>
        </button>
      </div>
    </div>
  );
}

export default ProfileHeader;
