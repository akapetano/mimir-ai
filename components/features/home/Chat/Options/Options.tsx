import { Select } from "@/components/atoms/Select/Select";
import { ModelType } from "@/types";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

interface IOptionsProps {
  currentModel: string;
  setCurrentModel: Dispatch<SetStateAction<string>>;
  modelOptions: string[];
}

export const Options = ({
  currentModel,
  setCurrentModel,
  modelOptions,
}: IOptionsProps) => {
  return (
    <div className="hden flex-col gap-1 p-2.5 md:flex">
      <Select
        label="Current Model"
        name="currentModel"
        value={currentModel}
        onChange={setCurrentModel}
        options={modelOptions}
        mapOptionToLabel={(model: string) => model}
        mapOptionToValue={(model: string) => model}
      />
    </div>
  );
};
