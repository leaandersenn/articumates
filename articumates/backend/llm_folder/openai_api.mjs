import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const response = await openai.chat.completions.create({
  model: "gpt-3.5-turbo",
  messages: [
    {
      role: "user",
      content: "Give me a funfact about Norway, max 5 words",
    },
  ],
  temperature: 1,
  max_tokens: 200,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0,
});

console.log(response.id);
console.log(response.choices);

