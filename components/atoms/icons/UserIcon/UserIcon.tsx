interface IUserIconProps {
  width?: string;
  height?: string;
}

export const UserIcon = ({ width, height }: IUserIconProps) => {
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
      strokeLinejoin="round"
      className="feather feather-user"
    >
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>
    // <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   width={width ? width : "24"}
    //   height={height ? height : "24"}
    //   viewBox="0 0 24 24"
    //   fill="none"
    //   stroke="currentColor"
    //   strokeWidth="2"
    //   strokeLinecap="round"
    //   strokeLinejoin="round"
    //   className="feather feather-send"
    // >
    //   <line x1="22" y1="2" x2="11" y2="13"></line>
    //   <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
    // </svg>
  );
};
