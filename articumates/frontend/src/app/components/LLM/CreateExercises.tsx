// CreateExercises.js
import { makeRequest } from "./openai.mjs";
import { fetchPromptHistory } from "./FetchPromptHistory";
import { modifyPrompts } from "./Prompts/modifyPromptsWithUserData";
import { update } from "firebase/database";



interface ChildInfo {
  ChildInfoGender: string;
  ChildInfoAge: number;
  ChildInfoSkills: string[];
 
}

export async function CreateExercises({
  ChildInfoGender,
  ChildInfoAge,
  ChildInfoSkills,

}: ChildInfo) {
  try {
    const prompts = await modifyPrompts({
      ChildInfoGender,
      ChildInfoAge,
      ChildInfoSkills,

    });

    let promptHistory = await fetchPromptHistory({ userID: 1 });
    let newResponses = [];

    for (const prompt of prompts) {
      // Append the new user prompt to the history
      //promptHistory.push({ role: "user", content: prompt });

      // Get the updated history from the LLM
      const updatedHistory = await makeRequest(promptHistory, prompt);
      console.log("updatedHistory = :" + JSON.stringify(updatedHistory));

      // Extract the latest response from the LLM
      const newString = updatedHistory[updatedHistory.length - 1].content;
      newResponses.push(newString);

      // Update the prompt history with the full conversation history
      promptHistory = updatedHistory;
  }
    //console.log(JSON.stringify(promptHistory));
    console.log(newResponses);
    return newResponses;
  } catch (error) {
    console.error("Error:", error);
    throw error; // Re-throw the error to be handled by the caller
  }
}
