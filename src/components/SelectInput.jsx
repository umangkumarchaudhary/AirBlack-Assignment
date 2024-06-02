const SelectInput = ({
  id,
  placeholder,
  className,
  options,
  value,
  onChange,
}) => (
  <div
    className={`flex gap-5 justify-between px-2 items-center mt-3 bg-white rounded border border-solid border-zinc-300 text-neutral-600 ${className}`}
  >
    <select
      id={id}
      className="w-full bg-transparent py-1 !font-medium focus:outline-none placeholder:text-stone-300 placeholder:!font-normal"
      value={value}
      onChange={onChange}
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {options &&
        options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
    </select>
  </div>
);

export default SelectInput;
