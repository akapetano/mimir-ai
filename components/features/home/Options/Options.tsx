"use client";

import { ModelType } from "@/types";
import { ChangeEvent } from "react";

interface IOptionsProps {
  currentModel: string;
  handleModelChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  models: ModelType[];
}

export const Options = ({
  currentModel,
  handleModelChange,
  models,
}: IOptionsProps) => {
  return (
    <div className="hidden flex-col gap-1 p-2.5 md:flex">
      <label htmlFor="currentModel">Current Model</label>
      <select
        id="currentModel"
        name="currentModel"
        value={currentModel}
        onChange={handleModelChange}
        className="w-full md:w-72 py-2 px-2 border-r-8 border-transparent rounded-md bg-emerald-200 text-slate-700 outline-emerald-600"
      >
        {models.map((model) => (
          <option key={model.id} value={model.id}>
            {model.id}
          </option>
        ))}
      </select>
    </div>
  );
};
