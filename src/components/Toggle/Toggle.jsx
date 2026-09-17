function Toggle({ id, label, description, checked, onChange }) {
  return (
    <div className="flex items-center justify-between w-full gap-4">
      <div className="flex flex-col gap-0.5">
        <label htmlFor={id} className="text-sm font-semibold text-white cursor-pointer">
          {label}
        </label>
        {description && <span className="text-xs text-zinc-500">{description}</span>}
      </div>

      <label className="relative inline-flex items-center cursor-pointer shrink-0" htmlFor={id}>
        <input
          type="checkbox"
          id={id}
          checked={checked}
          onChange={onChange}
          className="sr-only peer"
        />
        <div className="w-11 h-6 border border-border-default rounded-full peer peer-checked:bg-ember peer-checked:shadow-[0_0_10px_rgba(255,107,53,0.4)] transition-all after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-zinc-400 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-5"></div>
      </label>
    </div>
  );
}

export default Toggle;
