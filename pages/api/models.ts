import { Configuration, OpenAIApi } from "openai";
import { OPENAI_API_KEY } from "@/constants";
import { NextApiRequest, NextApiResponse } from "next";

const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await openai.listModels();
    return res.status(200).json(response);
  } catch (error) {
    console.error(error);
  }
}
