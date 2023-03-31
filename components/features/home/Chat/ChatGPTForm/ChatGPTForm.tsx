import { Button } from "@/components/atoms/Button/Button";
import { SendIcon } from "@/components/atoms/icons/SendIcon/SendIcon";
import { FormEvent, ChangeEvent } from "react";

interface IChatGPTFormProps {
  inputValue: string;
  btnDisabled: boolean;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => Promise<void>;
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function ChatGPTForm({
  inputValue,
  btnDisabled,
  handleSubmit,
  handleInputChange,
}: IChatGPTFormProps) {
  return (
    <div className="w-full flex flex-col flex-none">
      <div className="w-full p-2 shadow-md rounded-md bg-blue-light flex-none flex-col justify-between">
        <form
          onSubmit={handleSubmit}
          className="relative w-full flex flex-col gap-5"
        >
          <input
            type="text"
            id="question"
            name="question"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Learn with MimirAI"
            className={`w-full p-5 bg-gray-dark placeholder-gray-light text-white focus:bg-gray-dark rounded-md outline-blue pr-14`}
          />
          <Button
            label=""
            iconOnly
            icon={<SendIcon width="20" height="20" />}
            type="submit"
            disabled={btnDisabled}
            variant="primary"
            className="absolute top-3 right-2 text-gray-dark"
          />
        </form>
      </div>
    </div>
  );
}
