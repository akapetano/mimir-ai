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
    <div className="w-full flex justify-between gap-2.5 p-5">
      <Options
        currentModel={currentModel}
        setCurrentModel={setCurrentModel}
        modelOptions={modelOptions}
        voiceControl={voiceControl}
        handleChange={handleChange}
      />

      <ChatGPTForm currentModel={currentModel} voiceControl={voiceControl} />
    </div>
  );
};
