"use-client";

import { useModels } from "@/hooks/useModels";
import { Options } from "@/components/features/home/Chat/Options/Options";
import { ChatGPTForm } from "@/components/features/home/Chat/ChatGPTForm/ChatGPTForm";

export const Chat = () => {
  const { currentModelId, setCurrentModelId, models } = useModels();

  return (
    <div className="w-full flex justify-between">
      <div className="flex-1/3 bg-slate-200 border-r min-w-96 shadow-md">
        <Options
          currentModelId={currentModelId}
          setCurrentModelId={setCurrentModelId}
          models={models}
        />
      </div>
      <div className="w-full flex-2/3">
        <ChatGPTForm currentModelId={currentModelId} />
      </div>
    </div>
  );
};
