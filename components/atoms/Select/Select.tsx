import { ChangeEvent } from "react";

type Allowed = string | number;

type SelectBaseProps<Value> = {
  label: string;
  value: Value;
  name: string;
  onChange: (newValue: Value) => void;
  options: readonly Value[];
  mapOptionToLabel?: (option: Value) => Allowed;
  mapOptionToValue?: (option: Value) => Allowed;
};

type SelectProps<Value> = Value extends Allowed
  ? SelectBaseProps<Value>
  : Required<SelectBaseProps<Value>>;

const isAllowed = (v: unknown): v is Allowed =>
  typeof v === "string" || typeof v === "number";

export function Select<Value>({
  label,
  name,
  value,
  onChange,
  options,
  mapOptionToValue,
  mapOptionToLabel,
}: SelectProps<Value>) {
  console.log({ value });

  const toLabel = (option: Value): Allowed => {
    if (mapOptionToLabel) {
      return mapOptionToLabel(option);
    }
    return isAllowed(option) ? option : String(option);
  };

  const toValue = (option: Value): Allowed => {
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
        className="w-full md:w-72 py-2 px-2 border-r-8 border-transparent rounded-md bg-emerald-200 text-slate-700 outline-emerald-600"
        value={toValue(value)}
        onChange={handleChange}
      >
        {options.map((value) => (
          <option value={toValue(value)} key={toValue(value)}>
            {toLabel(value)}
          </option>
        ))}
      </select>
    </div>
  );
}
