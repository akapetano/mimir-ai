export type ChatGPTAgent = "user" | "system" | "assistant";

export interface ChatGPTMessage {
  role: ChatGPTAgent;
  content: string;
}

export interface OpenAIStreamPayload {
  model: string;
  messages: ChatGPTMessage[];
  temperature: number;
  top_p: number;
  frequency_penalty: number;
  presence_penalty: number;
  max_tokens: number;
  stream: boolean;
  stop?: string[];
  user?: ChatGPTAgent;
  n: number;
}

export type RequestData = {
  currentModel: string;
  message: string;
};

export interface ModelType {
  object: "engine";
  id: string;
  ready: boolean;
  owner: string;
  permissions: null;
  created: string;
}
