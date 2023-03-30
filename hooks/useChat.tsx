import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import useSwr from "swr";
import { ChatGPTMessage } from "@/types";
import { useCookies } from "react-cookie";

interface IUseChatProps {
  currentModel: string;
}

const COOKIE_NAME = "nextjs-example-ai-chat-gpt3";

export const initialMessages: ChatGPTMessage[] = [
  {
    role: "assistant",
    content:
      "Hi! I am a friendly AI assistant and a professional full-stack web developer. Ask me anything!",
  },
];

export const useChat = ({ currentModel }: IUseChatProps) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [messages, setMessages] = useState<ChatGPTMessage[]>(initialMessages);
  const [response, setResponse] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [cookie, setCookie] = useCookies([COOKIE_NAME]);

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

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsLoading(true);

    const newMessages = [
      ...messages,
      { role: "user", content: inputValue } as ChatGPTMessage,
    ];
    setMessages(newMessages);
    const lastTenMessages = newMessages.slice(-10);

    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messages: lastTenMessages,
        user: cookie[COOKIE_NAME],
      }),
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const data = response.body;
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
    messages,
  };
};
