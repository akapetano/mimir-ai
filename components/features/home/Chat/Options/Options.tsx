import { Checkbox } from "@/components/atoms/Checkbox/Checkbox";
import { Select } from "@/components/atoms/Select/Select";
import { ModelType } from "@/types";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

interface IOptionsProps {
  currentModel: string;
  setCurrentModel: Dispatch<SetStateAction<string>>;
  modelOptions: string[];
  voiceControl: boolean;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Options = ({
  currentModel,
  setCurrentModel,
  modelOptions,
  voiceControl,
  handleChange,
}: IOptionsProps) => {
  return (
    <div className="min-h-full hidden flex-col gap-2.5 md:flex">
      {modelOptions && modelOptions?.length ? (
        <Select
          label="Current Model"
          name="currentModel"
          value={currentModel}
          onChange={setCurrentModel}
          options={modelOptions}
          mapOptionToLabel={(model: string) => model}
          mapOptionToValue={(model: string) => model}
        />
      ) : null}
      <Checkbox
        id="voiceControl"
        label="Voice Control"
        checked={voiceControl}
        onChange={handleChange}
      />
    </div>
  );
};
