import classNames from "classnames";
import { FC, PropsWithChildren, ReactNode, useState } from "react";

interface ITooltipProps {
  text: string;
  position?: "top" | "bottom" | "left" | "right";
}

export const Tooltip: FC<PropsWithChildren<ITooltipProps>> = ({
  text,
  position = "top",
  children,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const tooltipClassnames = classNames(
    "bg-gray-light text-black text-sm rounded-lg p-2 absolute z-10 whitespace-nowrap",
    {
      "bottom-full": position === "top",
      "top-full": position === "bottom",
      "right-full": position === "left",
      "left-full": position === "right",
    }
  );

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      {isHovered ? (
        <div className={tooltipClassnames}>
          {text}
          <div
            className={`${
              isHovered ? "opacity-100 scale-100" : "opacity-0 scale-95"
            } absolute h-2 w-2 bg-gray-light transform rotate-45 -mt-1 ml-1 transition duration-200`}
          />
        </div>
      ) : null}
    </div>
  );
};
