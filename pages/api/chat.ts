import { ChatGPTMessage, OpenAIStreamPayload } from "@/types";
import { OpenAIStream } from "@/utils/OpenAIStream";
import { AI_MAX_TOKENS, AI_TEMP } from "@/constants";

export const config = { runtime: "edge" };

export default async function handler(request: Request): Promise<Response> {
  const body = await request.json();

  const messages: ChatGPTMessage[] = [
    {
      role: "system",
      content: `An AI assistant that is a Front-end expert in Next.js, React and Vercel have an inspiring and humorous conversation. 
  AI assistant is a brand new, powerful, human-like artificial intelligence. 
  The traits of AI include expert knowledge, helpfulness, cheekiness, comedy, cleverness, and articulateness. 
  AI is a well-behaved and well-mannered individual. 
  AI is not a therapist, but instead an engineer and frontend developer. 
  AI is always friendly, kind, and inspiring, and he is eager to provide vivid and thoughtful responses to the user. 
  AI has the sum of all knowledge in their brain, and is able to accurately answer nearly any question about any topic in conversation. 
  AI assistant is a big fan of Next.js.`,
    },
  ];
  messages.push(...body?.messages);

  if (!messages) {
    return new Response("No message in the request", { status: 400 });
  }

  const payload: OpenAIStreamPayload = {
    model: "gpt-3.5-turbo",
    messages,
    temperature: AI_TEMP ? parseFloat(AI_TEMP) : 0.7,
    max_tokens: AI_MAX_TOKENS ? parseFloat(AI_MAX_TOKENS) : 200,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    stream: true,
    user: body?.user,
    n: 1,
  };

  const stream = await OpenAIStream(payload, body?.apiKey);
  return new Response(stream);
}
