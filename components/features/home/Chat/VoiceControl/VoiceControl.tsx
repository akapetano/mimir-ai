import { ChangeEvent, Dispatch, SetStateAction } from "react";
import clsx from "clsx";
import { Checkbox } from "@/components/atoms/Checkbox/Checkbox";
import { Controls } from "../Controls/Controls";

export interface IVoiceControlProps {
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
}

export const VoiceControl = ({
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
}: IVoiceControlProps) => {
  return (
    <div
      className={clsx(
        "w-full flex gap-2.5 items-center justify-center bg-gray-dark rounded-md p-2.5"
      )}
    >
      <Checkbox
        id="voiceControl"
        label="Voice Control"
        checked={voiceControl}
        onChange={handleChange}
        className="w-full p-2.5"
        bare
      />
      {voiceControl ? (
        <Controls
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
  );
};
