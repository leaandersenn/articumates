import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: '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',
  dangerouslyAllowBrowser: true,
});

export async function makeRequest(earlierPrompts, prompt) {
  let history = earlierPrompts;

  // Add the latest prompt to the history first
  history.push({
    role: "user",
    content: prompt,
  });

  // Now construct the promptWithHistory string
  let promptWithHistory = '';
  history.forEach((entry) => {
    promptWithHistory += `\n${entry.role}: ${entry.content}`;
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
    max_tokens: 100,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  // Assuming the response contains new dialogue, add it to history
  history.push({
    role: "system",
    content: response.choices[0].message.content,
  });

  return history;
}
