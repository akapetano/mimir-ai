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
    setCurrentModelId(models.data[modelIndex].id);
    return models;
  };

  const { data } = useSwr("fetchingModels", modelFetcher);

  console.log(data);

  const [currentModelId, setCurrentModelId] = useState<string>("gpt-3.5-turbo");
  const [models, setModels] = useState<ModelType[]>([]);

  return { currentModelId, setCurrentModelId, models };
};
