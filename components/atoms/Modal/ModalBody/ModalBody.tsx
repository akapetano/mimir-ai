import { ReactNode, FC } from "react";
import { IModalHeaderProps } from "../ModalHeader/ModalHeader";

export interface IModalBodyProps extends IModalHeaderProps {
  children: ReactNode;
}

export const ModalBody: FC<IModalBodyProps> = ({ children }) => {
  return <div className="py-6 px-4 text-black bg-white">{children}</div>;
};
