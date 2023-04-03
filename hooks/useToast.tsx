import { useState } from "react";
import { Toast, IToastProps } from "@/components/atoms/Toast/Toast";

type ToastType = "error" | "warning" | "success";

interface ToastState extends IToastProps {
  id: number;
  type: ToastType;
}

let toastId = 0;

export const useToast = () => {
  const [toasts, setToasts] = useState<ToastState[]>([]);

  const addToast = (
    title: string,
    message: string,
    type: ToastType = "error"
  ) => {
    const newToast = { id: toastId++, title, message, type };
    setToasts((toasts) => [...toasts, newToast]);
  };

  const removeToast = (id: number) => {
    setToasts((toasts) => toasts.filter((toast) => toast.id !== id));
  };

  return {
    ToastContainer: () => (
      <div className="fixed z-50 bottom-0 right-0 mb-4 mr-4">
        {toasts.map(({ id, title, message, type }) => (
          <Toast
            key={id}
            title={title}
            message={message}
            type={type}
            onClose={() => removeToast(id)}
          />
        ))}
      </div>
    ),
    addToast,
    removeToast,
  };
};
