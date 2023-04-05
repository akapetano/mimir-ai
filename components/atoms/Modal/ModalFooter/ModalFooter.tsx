import { FC } from "react";
import { Button } from "../../Button/Button";
import { Divider } from "../../Divider/Divider";

export interface IModalFooterProps {
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryButtonClick?: () => void;
  onSecondaryButtonClick?: () => void;
}

export const ModalFooter: FC<IModalFooterProps> = ({
  primaryButtonText,
  secondaryButtonText,
  onPrimaryButtonClick,
  onSecondaryButtonClick,
}) => {
  return (
    <>
      <Divider className="" />
      <div className="bg-white px-4 py-3 flex gap-2.5 justify-end">
        {secondaryButtonText && (
          <Button
            label={secondaryButtonText}
            variant="ghost"
            onClick={onSecondaryButtonClick}
          />
        )}
        {primaryButtonText && (
          <Button
            label={primaryButtonText}
            variant="primary"
            onClick={onPrimaryButtonClick}
          />
        )}
      </div>
    </>
  );
};
