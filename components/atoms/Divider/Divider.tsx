import { FC } from "react";

interface IDividerProps {
  className?: string;
}

export const Divider: FC<IDividerProps> = ({ className }) => {
  return <hr className={`border-t border-gray-light ${className}`} />;
};
