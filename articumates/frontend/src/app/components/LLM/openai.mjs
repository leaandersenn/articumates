import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export async function makeRequest(earlierPrompts, prompt) {
  let history = earlierPrompts;
  let promptWithHistory = prompt;

  // Combine prompt with history
  if (history.length > 0) {
    history.forEach((entry) => {
      promptWithHistory += `\n${entry.role}: ${entry.content}`;
    });
  }

  history.push({
    role: "user",
    content: prompt,
  });

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content: promptWithHistory,
      },
    ],
    temperature: 1,
    max_tokens: 200,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  // Assuming the response contains new dialogue, add it to history
  history.push({
    role: "assistant",
    content: response.choices[0].message.content,
  });

  console.log(history);
  return history;
}
