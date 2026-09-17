function SearchBar({
  value = "",
  onChange,
  onClear,
  placeholder = "Search for movie, actors ...",
  id = "search-input",
}) {
  return (
    <div className="relative flex items-center w-full">
      <i className="fa-solid fa-magnifying-glass absolute left-3.5 text-[#71717A] text-sm pointer-events-none"></i>
      <input
        type="text"
        id={id}
        className="w-full h-12 bg-[#1C1C1C] border border-[#2A2A2A] rounded-xl pl-10 pr-10 text-white text-sm outline-none placeholder-[#71717A] focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 transition-all"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {value && (
        <button
          type="button"
          className="absolute right-3 w-6 h-6 flex items-center justify-center rounded-full text-[#71717A] hover:text-[#FF6B35] transition-colors text-sm"
          onClick={onClear}
          aria-label="Clear search"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
      )}
    </div>
  );
}

export default SearchBar;
