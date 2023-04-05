import { FC } from "react";
import { CloseIcon } from "../../icons/CloseIcon/CloseIcon";
import { Button } from "../../Button/Button";
import { IModalFooterProps } from "../ModalFooter/ModalFooter";
import { Divider } from "../../Divider/Divider";

export interface IModalHeaderProps extends IModalFooterProps {
  title?: string;
  description?: string;
  onClose: () => void;
}

export const ModalHeader: FC<IModalHeaderProps> = ({
  title,
  description,
  onClose,
}) => {
  return (
    <>
      <div className="bg-white py-3 px-4 flex justify-between items-start">
        <div>
          {title && (
            <h3 className="text-2xl leading-6 font-bold text-black">{title}</h3>
          )}
          {description && (
            <p className="mt-1 max-w-2xl text-base text-gray">{description}</p>
          )}
        </div>
        <Button
          variant="ghost"
          label=""
          iconOnly
          icon={<CloseIcon />}
          onClick={onClose}
          className="!border-none !text-black hover:!text-gray-dark hover:!bg-transparent !p-1"
        />
      </div>
      <Divider />
    </>
  );
};
