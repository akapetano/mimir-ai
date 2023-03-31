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
          "self-start mb-5 rounded-lg px-2 py-4 shadow-md",
          isAI ? "bg-emerald-50" : "bg-orange-50"
        )}
      >
        <div className="flex w-full">
          <div
            className={clsx(
              "w-full flex gap-2.5 justify-end items-center",
              isAI ? "flex-row" : "flex-row-reverse"
            )}
          >
            <span className="text-slate-50 self-start">
              {isAI ? <MimirIcon /> : <UserIcon />}
            </span>
            <p className={clsx("text-slate-900", isAI ? " pr-2.5" : "pl-2.5")}>
              <BalancerWrapper>{formattedMessage}</BalancerWrapper>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
