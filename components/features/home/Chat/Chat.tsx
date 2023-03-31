"use-client";

import { useModels } from "@/hooks/useModels";
import { useVoice } from "@/hooks/useVoice";
import { useChat } from "@/hooks/useChat";
import { useSpeechSynthesisApi } from "@/hooks/useSpeechSynthesisApi";
import { Options } from "@/components/features/home/Chat/Options/Options";
import { ChatSection } from "./ChatSection/ChatSection";

export const Chat = () => {
  const { currentModel, setCurrentModel, models, modelOptions } = useModels();
  const { voiceControl, handleChange } = useVoice();
  const {
    inputValue,
    handleReset,
    btnDisabled,
    handleSubmit,
    isLoading,
    handleInputChange,
    messages,
  } = useChat();
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
  } = useSpeechSynthesisApi();

  return (
    <div className="w-full flex flex-col md:flex-row justify-between gap-5 p-5">
      <Options
        currentModel={currentModel}
        setCurrentModel={setCurrentModel}
        modelOptions={modelOptions}
        voiceControl={voiceControl}
        handleChange={handleChange}
        handleReset={handleReset}
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
        className="md:w-1/3"
      />

      <ChatSection
        currentModel={currentModel}
        inputValue={inputValue}
        btnDisabled={btnDisabled}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
        handleInputChange={handleInputChange}
        messages={messages}
        setText={setText}
        className="md:w-2/3"
      />
    </div>
  );
};
