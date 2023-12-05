import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

let history = [
  {
    role: "user",
    content: "Hello, how are you?",
  },
  {
    role: "assistant",
    content: "I'm doing well, thank you! How can I assist you today?",
  },
  {
    role: "user",
    content: "I need help with a programming question.",
  },
  {
    role: "assistant",
    content:
      "Sure, I'd be happy to help. What specifically do you need assistance with?",
  },
];

export async function makeRequest(prompt) {
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
  return response.choices[0].message.content;
}
