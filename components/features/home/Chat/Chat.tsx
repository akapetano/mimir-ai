"use-client";

import { useModels } from "@/hooks/useModels";
import { Options } from "@/components/features/home/Chat/Options/Options";
import { ChatGPTForm } from "@/components/features/home/Chat/ChatGPTForm/ChatGPTForm";
import { Controls } from "./Controls/Controls";
import { useVoice } from "@/hooks/useVoice";

export const Chat = () => {
  const { currentModel, setCurrentModel, models, modelOptions } = useModels();
  const { voiceControl, handleChange } = useVoice();

  return (
    <div className="w-full flex justify-between">
      <div className="flex-1/3 bg-slate-200 dark:bg-slate-800 border-r dark:border-r-slate-700 md:w-[350px] h-[100dvh] shadow-md">
        <Options
          currentModel={currentModel}
          setCurrentModel={setCurrentModel}
          modelOptions={modelOptions}
          voiceControl={voiceControl}
          handleChange={handleChange}
        />
      </div>
      <div className="w-full flex-2/3">
        <ChatGPTForm currentModel={currentModel} voiceControl={voiceControl} />
      </div>
    </div>
  );
};
