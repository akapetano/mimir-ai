import { useCallback, useState } from "react";

export const useSpeechSynthesisAi = () => {
  const [text, setText] = useState<string>("");
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [isResumed, setIsResumed] = useState<boolean>(false);
  const [hasEnded, setHasEnded] = useState<boolean>(false);

  const speak = useCallback(() => {
    const msg = new SpeechSynthesisUtterance();

    msg.text = text;

    function speak() {
      window.speechSynthesis.speak(msg);
    }
    speak();
    setIsSpeaking(true);
    setHasEnded(false);
  }, [text]);

  const pause = useCallback(() => {
    function pause() {
      window.speechSynthesis.pause();
    }
    pause();
    setIsPaused(true);
    setIsSpeaking(false);
    setHasEnded(false);
    setIsResumed(false);
  }, []);

  const resume = useCallback(() => {
    function resume() {
      window.speechSynthesis.resume();
    }
    resume();
    setIsPaused(false);
    setIsSpeaking(false);
    setHasEnded(false);
    setIsResumed(true);
  }, []);

  const cancel = useCallback(() => {
    function cancel() {
      window.speechSynthesis.cancel();
    }
    cancel();
    setIsPaused(false);
    setIsResumed(false);
    setIsSpeaking(false);
    setHasEnded(true);
  }, []);

  return {
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
  };
};
