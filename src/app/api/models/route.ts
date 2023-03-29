import { Configuration, OpenAIApi } from "openai";
import { OPENAI_API_KEY } from "@/constants";

const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function GET(req: Request) {
  try {
    const response = await openai.listModels();
    return new Response(JSON.stringify(response.data));
  } catch (error) {
    console.error(error);
  }
}
