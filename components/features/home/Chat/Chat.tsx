"use-client";

import { useModels } from "@/hooks/useModels";
import { useVoice } from "@/hooks/useVoice";
import { useChat } from "@/hooks/useChat";
import { useSpeechSynthesisApi } from "@/hooks/useSpeechSynthesisApi";
import { Input } from "@/components/atoms/Input/Input";
import { Options } from "@/components/features/home/Chat/Options/Options";
import { ChatSection } from "./ChatSection/ChatSection";
import Link from "next/link";
import Image from "next/image";

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
    ToastContainer,
    apiKey,
    handleApiKeyChange,
    eliFive,
    setEliFive,
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
    <>
      <header className="p-5">
        <nav className="flex flex-col md:flex-row justify-start md:justify-between md:items-center gap-5">
          <Link href="/" className="flex gap-2.5">
            <div className="p-1.5 bg-white border-2 border-black rounded-md">
              <Image
                src="/images/mimir-ai-runic.png"
                width={150}
                height={200}
                alt=""
                className="bg-white border-2 border-black outline-black p-2 rounded-md"
              />
            </div>
          </Link>

          <Input
            type="text"
            id="question"
            name="question"
            value={apiKey}
            onChange={handleApiKeyChange}
            placeholder="Add Your API Key"
          />
        </nav>
      </header>
      <section className="w-full flex flex-col md:flex-row justify-between gap-5 p-5">
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
          eliFive={eliFive}
          setEliFive={setEliFive}
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
        <ToastContainer />
      </section>
    </>
  );
};
