import classNames from "classnames";
import { ChangeEvent } from "react";

interface ICheckboxProps {
  id: string;
  label: string;
  disabled?: boolean;
  required?: boolean;
  hint?: string;
  bare?: boolean;
  className?: string;
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox = ({
  id,
  label,
  disabled = false,
  required = false,
  bare = false,
  hint,
  className,
  checked,
  onChange,
}: ICheckboxProps) => {
  const classes = classNames(
    "flex justify-start gap-2.5 items-center text-sm tracking-normal normal-case p-4 hover:cursor-pointer",
    disabled ? "opacity-50" : "opacity-100",
    bare
      ? "border-none pl-0 mb-1"
      : "bg-gray-dark rounded-md focus:border-blue mb-4",
    className
  );

  return (
    <label htmlFor={id} className={classes}>
      <input
        id={id}
        name={id}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        className="h-5 w-5 rounded-md bg-white text-blue checked:ring-0 focus:ring-1 focus:ring-blue focus:ring-offset-0 hover:cursor-pointer invalid:text-red-500"
        onChange={onChange}
        required={required}
      />
      <div className="flex flex-col items-start justify-start ">
        <span className="flex flex-nowrap whitespace-nowrap text-gray-light">
          {label}
        </span>
        {hint && <span className="mt-1 text-xs text-red">{hint}</span>}
      </div>
    </label>
  );
};
