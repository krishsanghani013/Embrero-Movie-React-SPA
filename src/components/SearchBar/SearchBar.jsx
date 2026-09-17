function SearchBar({
  value = "",
  onChange,
  onClear,
  placeholder = "Search for movie, actors ...",
  id = "search-input",
}) {
  return (
    <div className="relative flex items-center w-full group">
      <i className="fa-solid fa-magnifying-glass absolute left-3.5 text-zinc-500 text-sm pointer-events-none transition-colors"></i>
      <input
        type="text"
        id={id}
        className="w-full h-12 bg-surface border border-border-default rounded-xl pl-10 pr-10 text-white text-sm outline-none focus:ring-2 focus:ring-ember/20 transition-all"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {value && (
        <button
          type="button"
          className="absolute right-3 w-6 h-6 flex items-center justify-center rounded-full text-zinc-500 hover:text-white hover:bg-ember transition-colors text-xs"
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
