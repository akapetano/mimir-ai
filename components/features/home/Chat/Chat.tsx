"use-client";

import { useModels } from "@/hooks/useModels";
import { useVoice } from "@/hooks/useVoice";
import { useChat } from "@/hooks/useChat";
import { useSpeechSynthesisApi } from "@/hooks/useSpeechSynthesisApi";
import { Options } from "@/components/features/home/Chat/Options/Options";
import { ChatSection } from "./ChatSection/ChatSection";
import { MimirIcon } from "@/components/atoms/icons/MimirIcon/MimirIcon";
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
            <Image
              src="/images/mimir-ai-runic.png"
              width={150}
              height={200}
              alt=""
              className="bg-gray-light p-2 rounded-md"
            />
          </Link>

          <input
            type="text"
            id="question"
            name="question"
            value={apiKey}
            onChange={handleApiKeyChange}
            placeholder="Add Your API Key"
            className={`w-full md:w-auto p-5 bg-white placeholder-gray text-black focus:bg-gray-light rounded-md outline-blue pr-14`}
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
