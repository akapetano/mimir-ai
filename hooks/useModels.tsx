import useSwr from "swr";
import { ModelType } from "@/types";
import { useState, ChangeEvent } from "react";

export const useModels = () => {
  const modelFetcher = async () => {
    const models = await (await fetch("/api/models")).json();
    setModels(models.data);
    const modelIndex = models.data.findIndex(
      (model: ModelType) => model.id === "gpt-3.5-turbo"
    );
    setCurrentModel(models.data[modelIndex].id);
    return models;
  };

  useSwr("fetchingModels", modelFetcher);

  const [currentModel, setCurrentModel] = useState<string>("gpt-3.5-turbo");
  const [models, setModels] = useState<ModelType[]>([]);

  const handleModelChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setCurrentModel(event.target.value);
  };

  return { currentModel, models, handleModelChange };
};
