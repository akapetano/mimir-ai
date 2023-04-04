import { FC, InputHTMLAttributes } from "react";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  wrapperClassName?: string;
  inputClassName?: string;
}

export const Input: FC<IInputProps> = ({
  label,
  wrapperClassName,
  inputClassName,
  ...rest
}) => {
  return (
    <div className={`mb-4 ${wrapperClassName}`}>
      {label && (
        <label className="block text-gray-light mb-1" htmlFor={rest.id}>
          {label}
        </label>
      )}
      <input
        className={`w-full md:w-auto p-5 bg-white placeholder-gray text-black focus:bg-gray-light rounded-md outline-blue pr-14 ${inputClassName}`}
        {...rest}
      />
    </div>
  );
};
