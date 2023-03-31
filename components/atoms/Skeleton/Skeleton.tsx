import classNames from "classnames";

interface ISkeletonProps {
  type: "card" | "circle";
  size: "xs" | "small" | "medium" | "large";
  className?: string;
}

export const Skeleton = ({ type, size, className }: ISkeletonProps) => {
  const classes = classNames(`bg-slate-200 overflow-hidden ${className}`, {
    "h-20 w-full rounded-md": type === "card",
    "h-16 w-16 rounded-full": type === "circle",
    "h-24": type === "card" && size === "large",
    "h-20 w-20": type === "circle" && size === "large",
    "h-20": type === "card" && size === "medium",
    "h-16 w-16": type === "circle" && size === "medium",
    "h-10": type === "card" && size === "small",
    "h-10 w-10": type === "circle" && size === "small",
    "h-6": type === "card" && size === "xs",
    "h-6 w-6": type === "circle" && size === "xs",
  });

  const innerClasses = classNames("bg-slate-50 bg-opacity-90 h-full", {
    "w-5 shadow-[0_0_50px_50px_rgba(248,250,252,0.9)]": type === "card",
    "w-1 shadow-[0_0_15px_15px_rgba(248,250,252,0.9)]": type === "circle",
  });

  return (
    <div className={classes}>
      <div className="h-full w-full animate-leftToRight">
        <div className={innerClasses} />
      </div>
    </div>
  );
};
