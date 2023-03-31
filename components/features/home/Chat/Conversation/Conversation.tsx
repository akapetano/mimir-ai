import { ChatGPTMessage } from "@/types";
import { ChatLine } from "../ChatLine/ChatLine";
import { LoadingChatLine } from "../ChatLine/LoadingChatLine/LoadingChatLine";

interface IConversationProps {
  messages: ChatGPTMessage[];
  isLoading: boolean;
}

export const Conversation = ({ messages, isLoading }: IConversationProps) => {
  return (
    <div className="w-full flex flex-col flex-1 overflow-y-auto">
      <div className="flex flex-col mb-40 ">
        {messages?.map(({ content, role }, index) => (
          <ChatLine key={index} role={role} content={content} />
        ))}
        {isLoading && <LoadingChatLine />}
      </div>
    </div>
  );
};
