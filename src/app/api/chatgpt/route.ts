import type { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";
import { OPENAI_API_KEY } from "@/constants";

type ResponseData = {
  text: string;
};

interface GenerateNextApiRequest extends NextApiRequest {
  body: {
    prompt: string | "Sorry, there was a problem";
  };
}

const configuration = new Configuration({ apiKey: OPENAI_API_KEY });

const openai = new OpenAIApi(configuration);

export default async function handler(
  req: GenerateNextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const prompt = req.body.prompt;

  if (!prompt || prompt === "") {
    return new Response("Please send your prompt", { status: 400 });
  }

  const aiResult = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${prompt}`,
    temperature: 0.9,
    frequency_penalty: 0.5,
    presence_penalty: 0,
    max_tokens: 2048,
  });
  const response =
    aiResult.data.choices[0].text || "Sorry, there was a problem";
  res.status(200).json({ text: response });
}

// import { OpenAIStreamPayload, RequestData } from "@/types";
// import { OpenAIStream } from "@/utils/OpenAIStream";
// import { OPENAI_API_KEY } from "@/constants";

// if (!OPENAI_API_KEY) {
//   throw new Error("Missing env var from OpenAI");
// }

// export const runtime = "edge";

// export default async function handler(request: Request) {
//   const { currentModel, message } = (await request.json()) as RequestData;

//   if (!message) {
//     return new Response("No message in the request", { status: 400 });
//   }

//   const payload: OpenAIStreamPayload = {
//     model: "gpt-3.5-turbo",
//     messages: [{ role: "user", content: message }],
//     temperature: 0.7,
//     top_p: 1,
//     frequency_penalty: 0,
//     presence_penalty: 0,
//     max_tokens: 200,
//     stream: true,
//     n: 1,
//   };

//   const stream = await OpenAIStream(payload);
//   return new Response(stream);
// }
