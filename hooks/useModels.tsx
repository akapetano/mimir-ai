import useSwr from "swr";
import { ModelType } from "@/types";
import { useState } from "react";

export const useModels = () => {
  const [currentModel, setCurrentModel] = useState<string>("gpt-3.5-turbo");
  const [models, setModels] = useState<ModelType[] | string[]>([
    "gpt-3.5-turbo",
  ]);
  const [modelOptions, setModelOptions] = useState<string[]>([]);

  // const modelFetcher = async () => {
  //   const models = await (await fetch("/api/models")).json();
  //   if (models?.data) {
  //     setModels(models.data);
  //   } else {
  //     setModels(["gpt-3.5-turbo"]);
  //   }
  //   const options = models.data.map((model: ModelType) => model.id);
  //   console.log({ options });
  //   if (options) {
  //     setModelOptions(options);
  //   }

  //   const modelIndex = models.data.findIndex(
  //     (model: ModelType) => model.id === "gpt-3.5-turbo"
  //   );
  //   setCurrentModel(models.data[modelIndex].id);
  //   return models;
  // };

  // console.log({ models });

  // useSwr("fetchingModels", modelFetcher);

  return { currentModel, setCurrentModel, models, modelOptions };
};
