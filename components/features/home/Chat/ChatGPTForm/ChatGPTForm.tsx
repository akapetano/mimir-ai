"use client";

import { Button } from "@/components/atoms/Button/Button";
import { SendIcon } from "@/components/atoms/icons/SendIcon/SendIcon";
import { useChat } from "@/hooks/useChat";
import { LoadingChatLine } from "../ChatLine/LoadingChatLine/LoadingChatLine";
import { ChatLine } from "../ChatLine/ChatLine";
import { Controls } from "../Controls/Controls";
import { useSpeechSynthesisAi } from "@/hooks/useSpeechSynthesisApi";
import { useEffect } from "react";
import clsx from "clsx";

interface IChatGPTFormProps {
  currentModel: string;
  voiceControl: boolean;
}

export function ChatGPTForm({ currentModel, voiceControl }: IChatGPTFormProps) {
  const {
    inputValue,
    handleReset,
    btnDisabled,
    handleSubmit,
    isLoading,
    handleInputChange,
    messages,
  } = useChat({ currentModel });

  const {
    text,
    setText,
    isSpeaking,
    isPaused,
    isResumed,
    hasEnded,
    speak,
    pause,
    resume,
    cancel,
  } = useSpeechSynthesisAi();

  useEffect(() => {
    if (messages && Array.isArray(messages)) {
      messages[messages.length - 1].role === "assistant"
        ? setText(messages[messages.length - 1].content)
        : null;
    }
  }, [messages, setText]);

  return (
    <div className="flex flex-col justify-between items-center w-full p-5 gap-20">
      <div className="w-full self-center md:max-w-[900px] flex flex-col gap-10">
        <div
          className={clsx(
            "mt-5 flex flex-col md:flex-row gap-5",
            voiceControl ? "justify-between" : "justify-end"
          )}
        >
          {voiceControl ? (
            <Controls
              text={text}
              setText={setText}
              isSpeaking={isSpeaking}
              isPaused={isPaused}
              isResumed={isResumed}
              hasEnded={hasEnded}
              speak={speak}
              pause={pause}
              resume={resume}
              cancel={cancel}
            />
          ) : null}
          <Button
            label="Clear History"
            type="reset"
            variant="ghost"
            onClick={handleReset}
            className="outline-emerald-600 w-full md:w-auto"
          />
        </div>

        <div className="flex flex-col mb-40">
          {messages?.map(({ content, role }, index) => (
            <ChatLine key={index} role={role} content={content} />
          ))}

          {isLoading && <LoadingChatLine />}
        </div>
      </div>

      <div className="fixed bottom-1 w-full max-w-[300px] sm:max-w-[600px]  md:max-w-[900px] flex flex-col gap-10 self-center mb-5">
        <div className="w-full p-2.5 shadow-md rounded-lg bg-emerald-200 flex flex-col justify-between">
          <form
            onSubmit={handleSubmit}
            className="relative w-full flex flex-col gap-5"
          >
            <input
              type="text"
              id="question"
              name="question"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Learn with MimirAI"
              className={`w-full p-5 rounded-lg outline-emerald-600 pr-14`}
            />
            <Button
              label=""
              iconOnly
              icon={<SendIcon width="20" height="20" />}
              type="submit"
              disabled={btnDisabled}
              variant="primary"
              className="absolute top-3 right-2"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
