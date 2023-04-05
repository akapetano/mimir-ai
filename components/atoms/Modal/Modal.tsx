import { FC, useEffect, useRef } from "react";
import { useSpring, animated } from "react-spring";
import { IModalBodyProps } from "./ModalBody/ModalBody";
import { ModalHeader } from "./ModalHeader/ModalHeader";
import { ModalBody } from "./ModalBody/ModalBody";
import { ModalFooter } from "./ModalFooter/ModalFooter";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { useEscapeKey } from "@/hooks/useEscapeKey";

interface IModalProps extends IModalBodyProps {
  isOpen: boolean;
}

export const Modal: FC<IModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  children,
  primaryButtonText,
  secondaryButtonText,
  onPrimaryButtonClick,
  onSecondaryButtonClick,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const modalAnimation = useSpring({
    config: {
      tension: 400,
      friction: 30,
      mass: 1,
    },
    from: {
      opacity: 0,
      transform: "translateY(-50%)",
    },
    to: {
      opacity: isOpen ? 1 : 0,
      transform: isOpen ? "translateY(0)" : "translateY(-50%)",
    },
  });

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (!isOpen) {
      timeout = setTimeout(() => {
        onClose();
      }, 250);
    }
    return () => clearTimeout(timeout);
  }, [isOpen, onClose]);

  useOnClickOutside(modalRef, onClose);
  useEscapeKey(onClose);

  return (
    <animated.div
      className="fixed z-10 inset-0 overflow-y-auto"
      style={modalAnimation}
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-dark opacity-80" />
        </div>
        <div
          className="fixed top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
          ref={modalRef}
        >
          <div className="bg-white">
            <ModalHeader
              title={title}
              description={description}
              onClose={onClose}
            />
            <ModalBody onClose={onClose}>{children}</ModalBody>
            {(primaryButtonText || secondaryButtonText) && (
              <ModalFooter
                primaryButtonText={primaryButtonText}
                secondaryButtonText={secondaryButtonText}
                onPrimaryButtonClick={onPrimaryButtonClick}
                onSecondaryButtonClick={onSecondaryButtonClick}
              />
            )}
          </div>
        </div>
      </div>
    </animated.div>
  );
};
