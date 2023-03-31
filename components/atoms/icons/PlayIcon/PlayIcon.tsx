interface IPlayIconProps {
  width?: string;
  height?: string;
  className?: string;
}

export const PlayIcon = ({
  width = "24",
  height = "24",
  className,
}: IPlayIconProps) => {
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
      className={`feather feather-play ${className}`}
    >
      <polygon points="5 3 19 12 5 21 5 3"></polygon>
    </svg>
  );
};
