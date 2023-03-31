import { Button } from "@/components/atoms/Button/Button";
import { PlayIcon } from "@/components/atoms/icons/PlayIcon/PlayIcon";
import { StopIcon } from "@/components/atoms/icons/StopIcon/StopIcon";
import { PauseIcon } from "@/components/atoms/icons/PauseIcon/PauseIcon";
import { Dispatch, SetStateAction } from "react";

interface IControlsProps {
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
  className?: string;
}

export const Controls = ({
  isSpeaking,
  isPaused,
  hasEnded,
  speak,
  pause,
  resume,
  cancel,
  className,
}: IControlsProps) => {
  return (
    <div className={`flex justify-center items-center gap-2.5 ${className}`}>
      <Button
        label=""
        iconOnly
        icon={<PlayIcon width="24" height="24" />}
        variant="secondary"
        onClick={() => (!isPaused ? speak() : resume())}
        className="!p-2"
      />
      <Button
        label=""
        iconOnly
        icon={<StopIcon width="24" height="24" />}
        disabled={!isSpeaking || hasEnded}
        variant="secondary"
        onClick={() => cancel()}
        className="!p-2"
      />
      <Button
        label=""
        iconOnly
        icon={<PauseIcon width="24" height="24" />}
        disabled={(!isSpeaking && !isPaused) || hasEnded}
        variant="secondary"
        onClick={() => (isPaused ? resume() : pause())}
        className="!p-2"
      />
    </div>
  );
};
