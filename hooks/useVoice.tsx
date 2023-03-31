import { useState, ChangeEvent } from "react";

export const useVoice = () => {
  const [voiceControl, setVoiceControl] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setVoiceControl(event.target.checked);
  };

  return { voiceControl, handleChange };
};
