import { ChangeEvent, FC, useState } from "react";

interface IRadioProps {
  label: string;
  name: string;
  value: string;
  defaultChecked?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Radio: FC<IRadioProps> = ({
  label,
  name,
  value,
  defaultChecked = false,
  onChange,
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(defaultChecked);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
    onChange(event);
  };

  return (
    <div className="flex items-center mb-2">
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="radio"
          name={name}
          value={value}
          checked={isChecked}
          onChange={handleInputChange}
          className="form-radio h-5 w-5 text-blue"
        />
        <span className="ml-2.5">{label}</span>
      </label>
    </div>
  );
};
