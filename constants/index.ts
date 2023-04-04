export const OPENAI_API_ENDPOINT =
  process.env.NEXT_PUBLIC_OPENAI_API_ENDPOINT ||
  "https://api.openai.com/v1/chat/completions";
export const AI_TEMP = process.env.AI_TEMP;
export const AI_MAX_TOKENS = process.env.AI_MAX_TOKENS;
export const OPENAI_API_ORG = process.env.OPENAI_API_ORG;

export const ELI5 = "Explain to me like I'm 5 years old.";
