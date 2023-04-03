import { useEffect, useState } from "react";
import classNames from "classnames";
import { Button } from "../Button/Button";
import { CloseIcon } from "../icons/CloseIcon/CloseIcon";

export interface IToastProps {
  title: string;
  message: string;
  type: "error" | "success" | "warning";
  onClose?: () => void;
  className?: string;
}

export const Toast = ({
  title,
  message,
  type,
  onClose,
  className,
}: IToastProps) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const classes = classNames(
    `flex justify-between items-start gap-5 absolute bottom-0 right-0 mb-4 mr-4 px-4 py-2 bg-opacity-90 rounded-md z-50 ${className}`,
    {
      "bg-error text-white": type === "error",
      "bg-success text-white": type === "success",
      "bg-warning text-black": type === "warning",
    }
  );

  const btnClasses = classNames(
    "!border-none hover:!bg-transparent !p-0 -mr-3",
    {
      "!text-white hover:!text-gray-light":
        type === "error" || type === "success",
      "!text-black hover:!text-gray-dark": type === "warning",
    }
  );

  return (
    <div
      className={`${classes} ${
        show
          ? "opacity-100 translate-y-0 transition-all"
          : "opacity-0 translate-y-20 pointer-events-none transition-all"
      }`}
    >
      <div className="flex flex-col">
        <p className="text-xl font-bold whitespace-nowrap">{title}</p>
        <p className="text-lg whitespace-nowrap">{message}</p>
      </div>
      <Button
        variant="ghost"
        label=""
        iconOnly
        icon={<CloseIcon />}
        onClick={onClose}
        className={btnClasses}
      />
    </div>
  );
};
