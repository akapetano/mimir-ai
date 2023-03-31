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
        icon={<PlayIcon width="28" height="28" />}
        variant="primary"
        onClick={() => (!isPaused ? speak() : resume())}
      />
      <Button
        label=""
        iconOnly
        icon={<StopIcon width="28" height="28" />}
        disabled={!isSpeaking || hasEnded}
        variant="primary"
        onClick={() => cancel()}
      />
      <Button
        label=""
        iconOnly
        icon={<PauseIcon width="28" height="28" />}
        disabled={(!isSpeaking && !isPaused) || hasEnded}
        variant="primary"
        onClick={() => (isPaused ? resume() : pause())}
      />
    </div>
  );
};
