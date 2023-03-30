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
          "self-start mb-5 rounded-lg px-2 py-4 shadow-lg",
          isAI ? "bg-emerald-50" : "bg-orange-600"
        )}
      >
        <div className="flex w-full">
          <div className={"w-full flex gap-2.5 justify-end items-center"}>
            <span className="text-slate-50 self-start">
              {role === "assistant" ? <MimirIcon /> : <UserIcon />}
            </span>
            <p
              className={clsx(
                "",
                isAI ? "text-slate-900" : "text-slate-50 pr-5"
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
