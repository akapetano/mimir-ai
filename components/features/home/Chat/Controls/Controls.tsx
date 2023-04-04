import { ChangeEvent, Dispatch, SetStateAction } from "react";
import clsx from "clsx";
import { Checkbox } from "@/components/atoms/Checkbox/Checkbox";
import { VoiceControls } from "../VoiceControls/VoiceControls";
import { Tooltip } from "@/components/atoms/Tooltip/Tooltip";
import { Select } from "@/components/atoms/Select/Select";

export interface IControlsProps {
  voiceControl: boolean;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  text: string;
  setText: Dispatch<SetStateAction<string>>;
  isSpeaking: boolean;
  isPaused: boolean;
  isResumed: boolean;
  hasEnded: boolean;
  speak: () => void;
  pause: () => void;
  resume: () => void;
  cancel: () => void;
  eliFive: boolean;
  setEliFive: Dispatch<SetStateAction<boolean>>;
  currentModel: string;
  setCurrentModel: Dispatch<SetStateAction<string>>;
  modelOptions: string[];
}

export const Controls = ({
  voiceControl,
  handleChange,
  text,
  setText,
  isSpeaking,
  isPaused,
  isResumed,
  hasEnded,
  speak,
  pause,
  resume,
  cancel,
  eliFive,
  setEliFive,
  currentModel,
  setCurrentModel,
  modelOptions,
}: IControlsProps) => {
  return (
    <div
      className={clsx(
        "w-full flex flex-col gap-2.5 items-start justify-center bg-gray-dark rounded-md p-2.5"
      )}
    >
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
      <div className="w-full flex gap-2.5 items-center justify-between">
        <Checkbox
          id="voiceControl"
          label="Voice Control"
          checked={voiceControl}
          onChange={handleChange}
          className="w-full p-2.5"
          bare
        />
        {voiceControl ? (
          <VoiceControls
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
        ) : null}
      </div>
      <Tooltip text="Explain to me like I'm 5">
        <Checkbox
          id="eli5"
          label="ELI5"
          checked={eliFive}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setEliFive(event.target.checked);
          }}
          className="w-full p-2.5"
          bare
        />
      </Tooltip>
    </div>
  );
};
