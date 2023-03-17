import { OpenAIStreamPayload, RequestData } from "../../types";
import { OpenAIStream } from "../../utils/OpenAIStream";
import { OPENAI_API_KEY } from "@/constants";

if (!OPENAI_API_KEY) {
  throw new Error("Missing env var from OpenAI");
}

export const runtime = "edge";

export default async function handler(request: Request) {
  const { currentModel, message } = (await request.json()) as RequestData;

  if (!message) {
    return new Response("No message in the request", { status: 400 });
  }

  const payload: OpenAIStreamPayload = {
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: message }],
    temperature: 0.7,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    max_tokens: 200,
    stream: true,
    n: 1,
  };

  const stream = await OpenAIStream(payload);
  return new Response(stream);
}
