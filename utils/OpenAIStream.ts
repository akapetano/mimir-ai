import {
  createParser,
  ParsedEvent,
  ReconnectInterval,
} from "eventsource-parser";
import { OpenAIStreamPayload } from "@/types";
import {
  OPENAI_API_KEY,
  OPENAI_API_ORG,
  OPENAI_API_ENDPOINT,
} from "@/constants";
import pLimit from "p-limit";

const limit = pLimit(1);

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function OpenAIStream(payload: OpenAIStreamPayload) {
  const encoder = new TextEncoder();
  const decoder = new TextDecoder();

  let counter = 0;

  const requestHeaders: Record<string, string> = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${OPENAI_API_KEY ?? ""}`,
  };

  if (OPENAI_API_ORG) {
    requestHeaders["OpenAI-Organization"] = OPENAI_API_ORG;
  }

  const response = await limit(() =>
    fetch(OPENAI_API_ENDPOINT, {
      headers: requestHeaders,
      method: "POST",
      body: JSON.stringify(payload),
    })
  );

  if (!response.ok) {
    throw new Error(
      `Failed to fetch OpenAI stream: ${response.status} ${response.statusText}`
    );
  }

  const stream = new ReadableStream({
    async start(controller) {
      function onParse(event: ParsedEvent | ReconnectInterval) {
        if (event.type === "event") {
          const data = event.data;
          if (data === "[DONE]") {
            controller.close();
            return;
          }
          try {
            const json = JSON.parse(data);
            const text = json.choices[0].delta?.content || "";
            if (counter < 2 && (text.match(/\n/) || [].length)) {
              return;
            }
            const queue = encoder.encode(text);
            controller.enqueue(queue);
            counter++;
          } catch (error) {
            controller.error(error);
          }
        }
      }

      const parser = createParser(onParse);
      try {
        for await (const chunk of response.body as any) {
          parser.feed(decoder.decode(chunk));
          await delay(500);
        }
      } catch (error) {
        controller.error(error);
      }
    },
  });

  return stream;
}
