"use client";

import { SendIcon } from "@/components/atoms/icons/SendIcon/SendIcon";
import {
  ChangeEvent,
  KeyboardEvent,
  FormEvent,
  useState,
  Suspense,
} from "react";
import useSwr from "swr";
import { ModelType } from "@/types";
import { Button } from "@/components/atoms/Button";
import { UserIcon } from "@/components/atoms/icons/UserIcon/UserIcon";
import { BenderIcon } from "@/components/atoms/icons/BenderIcon/BenderIcon";

export function ChatGPTForm() {
  const [inputValue, setInputValue] = useState<string>("");
  const [response, setResponse] = useState<string[]>([]);
  const [models, setModels] = useState<ModelType[]>([]);
  const [currentModel, setCurrentModel] = useState<string>("gpt-3.5-turbo");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const eventTarget = event.target;
    setInputValue(eventTarget?.value);
  };

  const handleEnter = (
    event: KeyboardEvent<HTMLTextAreaElement> & FormEvent<HTMLFormElement>
  ) => {
    if (event.key === "Enter" && isLoading === false) {
      event.preventDefault();
      setIsLoading(true);
      handleSubmit(event);
    }
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
        prompt: `Respond as Bender from Futurama: ${inputValue}`,
      }),
    });

    const text = await response.text();

    if (!response.ok) {
      throw new Error(response.statusText);
    }
    //
    // console.log({ text });

    const data = response.body;
    if (!data) {
      return;
    }

    // const reader = data.getReader();
    // const decoder = new TextDecoder();
    // let done = false;

    setResponse((prev) => [...prev, text]);

    // let currentResponse: string[] = [];
    // while (!done) {
    //   const { value, done: doneReading } = await reader.read();
    //   done = doneReading;
    //   const chunkValue = decoder.decode(value);
    //   currentResponse = [...currentResponse, chunkValue];
    //   setResponse((prev) => [...prev.slice(0, -1), currentResponse.join("")]);
    // }

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

  const modelFetcher = async () => {
    const models = await (await fetch("/api/models")).json();
    setModels(models.data);
    const modelIndex = models.data.findIndex(
      (model: ModelType) => model.id === "gpt-3.5-turbo"
    );
    setCurrentModel(models.data[modelIndex].id);
    return models;
  };

  useSwr("fetchingModels", modelFetcher);

  const handleModelChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setCurrentModel(event.target.value);
  };

  const btnDisabled = inputValue === "";

  return (
    <div className="flex flex-col justify-between h-[100vh] w-full mx-5">
      <div className="w-full flex flex-col gap-10">
        <div className="mt-5 flex flex-col md:flex-row justify-between items-start gap-5 mx-2.5">
          <select
            value={currentModel}
            onChange={handleModelChange}
            className="w-full md:w-72 py-4 border-none rounded-md bg-emerald-200 text-slate-700 outline-emerald-600"
          >
            {models.map((model) => (
              <option key={model.id} value={model.id}>
                {model.id}
              </option>
            ))}
          </select>

          <Button
            label="Clear History"
            type="reset"
            variant="ghost"
            onClick={handleReset}
            className="outline-emerald-600 w-full md:w-auto"
          />
        </div>
        <div className="self-center w-full md:max-w-[900px] mx-2 flex flex-col md:items-start gap-3 order-last md:order-none">
          {response.map((item: string, index: number) => {
            return (
              <div
                key={index}
                className={`${
                  index % 2 === 0
                    ? "bg-orange-600 text-white"
                    : "bg-slate-200 text-slate-500"
                } p-3 rounded-lg flex gap-2.5 items-center`}
              >
                {index % 2 === 0 ? <UserIcon /> : <BenderIcon />}
                <p>{item}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="w-full md:max-w-[900px] flex flex-col gap-10 self-center mb-5">
        <div className="w-full pb-10 pt-5 px-5 shadow-md rounded-lg border border-emerald-200 bg-emerald-200 flex flex-col justify-between">
          <form
            onSubmit={handleSubmit}
            className="relative w-full flex flex-col gap-5"
          >
            <input
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Ask Bender"
              className={`w-full p-5 rounded-lg resize-none outline-emerald-600 translate-y-1 `}
            />
            <Button
              label=""
              iconOnly
              icon={<SendIcon width="20" height="20" />}
              type="submit"
              disabled={btnDisabled}
              variant="primary"
              className="absolute top-4 right-2"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
