import {
  useEffect,
  FormEvent,
  ChangeEvent,
  Dispatch,
  SetStateAction,
} from "react";
import { ChatGPTForm } from "../ChatGPTForm/ChatGPTForm";
import { Conversation } from "../Conversation/Conversation";
import { ChatGPTMessage } from "@/types";

interface IChatSectionProps {
  currentModel: string;
  inputValue: string;
  btnDisabled: boolean;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => Promise<void>;
  isLoading: boolean;
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  messages: ChatGPTMessage[];
  setText: Dispatch<SetStateAction<string>>;
  className?: string;
}

export function ChatSection({
  currentModel,
  inputValue,
  btnDisabled,
  handleSubmit,
  isLoading,
  handleInputChange,
  messages,
  setText,
  className,
}: IChatSectionProps) {
  useEffect(() => {
    if (messages && Array.isArray(messages)) {
      messages[messages.length - 1].role === "assistant"
        ? setText(messages[messages.length - 1].content)
        : null;
    }
  }, [messages, setText]);

  return (
    <section
      className={`flex flex-col gap-5 h-[calc(100vh-180px)] md:h-[calc(100vh-40px)] justify-center items-center w-full max-w-5xl ${className}`}
    >
      <Conversation messages={messages} isLoading={isLoading} />
      <ChatGPTForm
        inputValue={inputValue}
        btnDisabled={btnDisabled}
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
      />
    </section>
  );
}
