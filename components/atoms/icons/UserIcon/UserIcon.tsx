interface IUserIconProps {
  width?: string;
  height?: string;
  className?: string;
}

export const UserIcon = ({
  width = "10",
  height = "10",
  className,
}: IUserIconProps) => {
  return (
    <div className={`flex justify-center items-center w-${width} h-${height}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`h-full w-full feather feather-user bg-white text-orange-600 rounded-full border-2 border-orange-600 p-1 ${className}`}
      >
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>
    </div>
  );
};
