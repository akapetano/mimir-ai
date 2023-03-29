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
    <div className={!isAI ? "float-right clear-both" : "float-left clear-both"}>
      <BalancerWrapper>
        <div
          className={clsx(
            "float-right mb-5 rounded-lg px-2 py-4 shadow-lg",
            isAI ? "bg-slate-200" : "bg-orange-600"
          )}
        >
          <div className="flex">
            <div className="flex gap-2.5 justify-between items-center flex-1">
              <p className="font-large text-xxl text-slate-900">
                <a href="#" className="hover:underline text-slate-50">
                  {role === "assistant" ? <MimirIcon /> : <UserIcon />}
                </a>
              </p>
              <p
                className={clsx(
                  "text ",
                  isAI ? "text-slate-900" : "text-slate-50"
                )}
              >
                {formattedMessage}
              </p>
            </div>
          </div>
        </div>
      </BalancerWrapper>
    </div>
  );
}
