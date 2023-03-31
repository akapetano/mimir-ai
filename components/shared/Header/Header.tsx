import { MimirIcon } from "@/components/atoms/icons/MimirIcon/MimirIcon";
import Link from "next/link";

export const Header = () => {
  return (
    <header>
      <Link href="/">
        <MimirIcon />
      </Link>
    </header>
  );
};
