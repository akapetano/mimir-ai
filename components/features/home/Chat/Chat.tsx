"use-client";

import { useModels } from "@/hooks/useModels";
import { Options } from "@/components/features/home/Chat/Options/Options";
import { ChatGPTForm } from "@/components/features/home/Chat/ChatGPTForm/ChatGPTForm";

export const Chat = () => {
  const { currentModel, models, handleModelChange } = useModels();

  return (
    <div className="w-full flex justify-between">
      <div className="flex-1/3 bg-slate-200 border-r min-w-96 shadow-md">
        <Options
          currentModel={currentModel}
          handleModelChange={handleModelChange}
          models={models}
        />
      </div>
      <div className="w-full flex-2/3">
        <ChatGPTForm currentModel={currentModel} />
      </div>
    </div>
  );
};
