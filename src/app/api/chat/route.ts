import { OPENAI_API_KEY } from "@/constants";

export const runtime = "experimental-edge";

if (!OPENAI_API_KEY) {
  throw new Error("Missing OpenAI API Key");
}

export async function POST(request: Request) {
  try {
    const { currentModel, prompt } = await request.json();

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: currentModel ? currentModel : "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.7,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        max_tokens: 200,
        stream: false,
        n: 1,
      }),
    });

    const json = await response.json();
    return new Response(json.choices[0].message.content);
  } catch (error) {
    console.log({ error });
    return new Response("Request cannot be processed!", {
      status: 400,
    });
  }
}
