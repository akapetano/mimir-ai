import { useState, ChangeEvent, FormEvent } from "react";
import useSwr from "swr";

interface IUseChatProps {
  currentModelId: string;
}

export const useChat = ({ currentModelId }: IUseChatProps) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [response, setResponse] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const eventTarget = event.target;
    setInputValue(eventTarget?.value);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    if (inputValue !== undefined) {
      setResponse((prevValue) => [...prevValue, inputValue]);
      setInputValue("");
    }

    if (!inputValue) {
      return;
    }

    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        prompt: `You are a professional full-stack web developer with 20 years of experience. ${inputValue}`,
        currentModelId,
      }),
    });

    const text = await response.text();

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const data = response.body;
    if (!data) {
      return;
    }

    setResponse((prev) => [...prev, text]);

    setIsLoading(false);
  };

  const handleReset = () => {
    localStorage.removeItem("response");
    setResponse([]);
  };

  useSwr("fetchingResponse", async () => {
    const storedResponse = localStorage.getItem("response");
    if (storedResponse) {
      setResponse(JSON.parse(storedResponse));
    }
  });

  const btnDisabled = inputValue === "";

  return {
    inputValue,
    handleReset,
    btnDisabled,
    handleSubmit,
    isLoading,
    handleInputChange,
    response,
  };
};
