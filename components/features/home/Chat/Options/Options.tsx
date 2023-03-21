import { Select } from "@/components/atoms/Select/Select";
import { ModelType } from "@/types";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

interface IOptionsProps {
  currentModelId: string;
  setCurrentModelId: Dispatch<SetStateAction<string>>;
  models: ModelType[];
}

export const Options = ({
  currentModelId,
  setCurrentModelId,
  models,
}: IOptionsProps) => {
  return (
    <div className="hidden flex-col gap-1 p-2.5 md:flex">
      <Select
        label="Current Model"
        name="currentModel"
        value={currentModelId}
        onChange={setCurrentModelId}
        options={models}
        mapOptionToLabel={(model: ModelType) => model.id}
        mapOptionToValue={(model: ModelType) => model.id}
      />
    </div>
  );
};
