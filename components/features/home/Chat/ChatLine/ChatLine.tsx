import clsx from "clsx";
import { BalancerWrapper } from "./BalancerWrapper/BalancerWrapper";
import { ChatGPTMessage } from "@/types";
import { UserIcon } from "@/components/atoms/icons/UserIcon/UserIcon";
import { MimirIcon } from "@/components/atoms/icons/MimirIcon/MimirIcon";
import { convertNewLines } from "@/utils/stringHelpers";

export function ChatLine({ role = "assistant", content }: ChatGPTMessage) {
  if (!content) {
    return null;
  }
  const formattedMessage = convertNewLines(content);

  const isAI = role === "assistant";

  return (
    <div className={clsx("", !isAI ? "self-end" : "self-start")}>
      <div
        className={clsx(
          "self-start mb-5 rounded-md px-2 py-4 shadow-md",
          isAI ? "bg-white " : "bg-blue-light"
        )}
      >
        <div className="flex w-full">
          <div
            className={clsx(
              "w-full flex gap-2.5 justify-end items-center",
              isAI ? "flex-row" : "flex-row-reverse"
            )}
          >
            <span className="text-black self-start">
              {isAI ? <MimirIcon /> : <UserIcon />}
            </span>
            <p
              className={clsx(
                "",
                isAI ? " pr-2.5 text-black" : "pl-2.5 text-black"
              )}
            >
              <BalancerWrapper>{formattedMessage}</BalancerWrapper>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
