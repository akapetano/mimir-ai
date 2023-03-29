"use-client";

import { useModels } from "@/hooks/useModels";
import { Options } from "@/components/features/home/Chat/Options/Options";
import { ChatGPTForm } from "@/components/features/home/Chat/ChatGPTForm/ChatGPTForm";

export const Chat = () => {
  const { currentModel, setCurrentModel, models, modelOptions } = useModels();

  console.log(modelOptions);

  return (
    <div className="w-full flex justify-between">
      <div className="flex-1/3 bg-slate-200 dark:bg-slate-800 border-r dark:border-r-slate-700 min-w-96 shadow-md">
        {models.length > 1 ? (
          <Options
            currentModel={currentModel}
            setCurrentModel={setCurrentModel}
            modelOptions={modelOptions}
          />
        ) : null}
      </div>
      <div className="w-full flex-2/3">
        <ChatGPTForm currentModel={currentModel} />
      </div>
    </div>
  );
};
