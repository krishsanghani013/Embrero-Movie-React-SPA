function Toggle({
  id,
  label,
  description,
  checked,
  onChange,
}) {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex flex-col">
        <label htmlFor={id} className="text-sm font-semibold text-white cursor-pointer">
          {label}
        </label>
        {description && <span className="text-xs text-[#71717A]">{description}</span>}
      </div>

      <label className="relative inline-flex items-center cursor-pointer shrink-0">
        <input
          type="checkbox"
          id={id}
          checked={checked}
          onChange={onChange}
          className="sr-only peer"
        />
        <div className="w-11 h-6 bg-[#151515] border border-[#2A2A2A] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-[#A1A1AA] peer-checked:after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#FF6B35] peer-checked:border-[#FF6B35]"></div>
      </label>
    </div>
  );
}

export default Toggle;
