import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import useSwr from "swr";
import { ChatGPTMessage } from "@/types";
import { useCookies } from "react-cookie";
import { useToast } from "./useToast";
import { apiKeyAtom } from "@/atoms";
import { useAtom } from "jotai";
import { ELI5 } from "@/constants";

const COOKIE_NAME = "nextjs-example-ai-chat-gpt3";

export const initialMessages: ChatGPTMessage[] = [
  {
    role: "assistant",
    content:
      "Hi! I am a friendly AI assistant and a professional full-stack web developer. Ask me anything!",
  },
];

export const useChat = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [messages, setMessages] = useState<ChatGPTMessage[]>(initialMessages);
  const [response, setResponse] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [eliFive, setEliFive] = useState<boolean>(false);
  const [cookie, setCookie] = useCookies([COOKIE_NAME]);
  const { addToast, ToastContainer } = useToast();
  const [apiKey, setApiKey] = useAtom(apiKeyAtom);

  useEffect(() => {
    if (!cookie[COOKIE_NAME]) {
      // generate a semi random short id
      const randomId = Math.random().toString(36).substring(7);
      setCookie(COOKIE_NAME, randomId);
    }
  }, [cookie, setCookie]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const eventTarget = event.target;
    setInputValue(eventTarget?.value);
  };

  const handleApiKeyChange = (event: ChangeEvent<HTMLInputElement>) => {
    setApiKey(event.target.value);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsLoading(true);

    const newMessage = eliFive ? inputValue + " " + ELI5 : inputValue;

    const newMessages = [
      ...messages,
      { role: "user", content: newMessage } as ChatGPTMessage,
    ];
    setMessages(newMessages);
    const lastTenMessages = newMessages.slice(-10);

    try {
      if (!apiKey) {
        setIsLoading(false);
        setMessages(initialMessages);
        throw new Error("Missing OpenAI API key.");
      }
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: lastTenMessages,
          user: cookie[COOKIE_NAME],
          apiKey: apiKey,
        }),
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const data = response.body;
      console.log({ response });
      setInputValue("");
      if (!data) {
        return;
      }

      const reader = data.getReader();
      const decoder = new TextDecoder();
      let done = false;

      let lastMessage = "";

      while (!done) {
        const { value, done: doneReading } = await reader.read();
        done = doneReading;
        const chunkValue = decoder.decode(value);

        lastMessage = lastMessage + chunkValue;

        setMessages([
          ...newMessages,
          { role: "assistant", content: lastMessage } as ChatGPTMessage,
        ]);

        setIsLoading(false);
      }
    } catch (error) {
      console.error(error);
      if (error instanceof Error) {
        if (error.message === "Internal Server Error") {
          addToast("Error!", "Failed to fetch OpenAI stream", "error");
        } else {
          addToast("Error!", error.message, "error");
        }
      }
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    localStorage.removeItem("response");
    setMessages([
      {
        role: "assistant",
        content: "",
      },
    ]);
  };

  useSwr("fetchingResponse", async () => {
    try {
      const storedResponse = localStorage.getItem("response");
      if (storedResponse) {
        setResponse(JSON.parse(storedResponse));
      }
    } catch (error) {
      console.error(error);
      setResponse([]);
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
    messages,
    ToastContainer,
    apiKey,
    handleApiKeyChange,
    eliFive,
    setEliFive,
  };
};
