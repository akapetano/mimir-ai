interface ISendIconProps {
  width?: string;
  height?: string;
}

export const SendIcon = ({ width, height }: ISendIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : "24"}
      height={height ? height : "24"}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      stroke-linejoin="round"
      className="feather feather-send"
    >
      <line x1="22" y1="2" x2="11" y2="13"></line>
      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
    </svg>
  );
};
