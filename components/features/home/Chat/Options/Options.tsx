import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { Checkbox } from "@/components/atoms/Checkbox/Checkbox";
import { Select } from "@/components/atoms/Select/Select";
import { Button } from "@/components/atoms/Button/Button";
import { TrashIcon } from "@/components/atoms/icons/TrashIcon/TrashIcon";
import { VoiceControl } from "../VoiceControl/VoiceControl";
import { IVoiceControlProps } from "../VoiceControl/VoiceControl";

interface IOptionsProps extends IVoiceControlProps {
  currentModel: string;
  setCurrentModel: Dispatch<SetStateAction<string>>;
  modelOptions: string[];
  handleReset: () => void;
  className?: string;
}

export const Options = ({
  currentModel,
  setCurrentModel,
  modelOptions,
  handleReset,
  className,
  voiceControl,
  handleChange,
  text,
  setText,
  isSpeaking,
  isResumed,
  isPaused,
  hasEnded,
  speak,
  pause,
  resume,
  cancel,
}: IOptionsProps) => {
  return (
    <div className={`w-full min-h-full flex flex-col gap-2.5 ${className}`}>
      <div className="w-full flex justify-between items-center">
        <span className="block text-lg">History</span>
        <Button
          label=""
          iconOnly
          icon={<TrashIcon />}
          type="reset"
          variant="colorless"
          onClick={handleReset}
          className="outline-blue w-auto"
        />
      </div>
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
      <VoiceControl
        voiceControl={voiceControl}
        handleChange={handleChange}
        text={text}
        setText={setText}
        isSpeaking={isSpeaking}
        isPaused={isPaused}
        isResumed={isResumed}
        hasEnded={hasEnded}
        speak={speak}
        pause={pause}
        resume={resume}
        cancel={cancel}
      />
    </div>
  );
};
