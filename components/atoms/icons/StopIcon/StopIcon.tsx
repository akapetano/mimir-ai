interface IStopIconProps {
  width?: string;
  height?: string;
  className?: string;
}

export const StopIcon = ({
  width = "24",
  height = "24",
  className,
}: IStopIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={`0 0 24 24`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`feather feather-square ${className}`}
    >
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
    </svg>
  );
};
