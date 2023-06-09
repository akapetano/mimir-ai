import { ChangeEvent } from "react";

type OptionValue = string | number;

type SelectBaseProps<Value> = {
  label?: string;
  value: Value;
  name: string;
  onChange: (newValue: Value) => void;
  options: readonly Value[];
  mapOptionToLabel?: (option: Value) => OptionValue;
  mapOptionToValue?: (option: Value) => OptionValue;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
};

type SelectProps<Value> = Value extends OptionValue
  ? SelectBaseProps<Value>
  : Required<SelectBaseProps<Value>>;

const isAllowed = (v: unknown): v is OptionValue =>
  typeof v === "string" || typeof v === "number";

export function Select<Value>({
  label,
  name,
  value,
  onChange,
  options,
  mapOptionToValue,
  mapOptionToLabel,
  placeholder,
  className,
  disabled = false,
}: SelectProps<Value>) {
  console.log({ value });

  const toLabel = (option: Value): OptionValue => {
    if (mapOptionToLabel) {
      return mapOptionToLabel(option);
    }
    return isAllowed(option) ? option : String(option);
  };

  const toValue = (option: Value): OptionValue => {
    if (mapOptionToValue) {
      return mapOptionToValue(option);
    }
    return isAllowed(option) ? option : String(option);
  };

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange(options[event.target.selectedIndex]);
  };

  return (
    <div className="flex flex-col items-start justify-start w-full">
      <label htmlFor={name}>{label}</label>
      <select
        id={name}
        name={name}
        className={`w-full md:w-72 py-2 px-2 border-r-8 border-transparent rounded-md bg-white text-gray-dark outline-offset-2 outline-blue ${className}`}
        value={toValue(value)}
        onChange={handleChange}
        disabled={disabled}
      >
        {placeholder && (
          <option value="" disabled hidden>
            {placeholder}
          </option>
        )}
        {options?.map((value) => (
          <option value={toValue(value)} key={toValue(value)}>
            {toLabel(value)}
          </option>
        ))}
      </select>
    </div>
  );
}
