"use client";

import React, { useState } from "react";
import { makeRequest } from "./openai.mjs";
import { fetchPromptHistory } from "./FetchPromptHistory";
import { modifyPrompts } from "./Prompts/modifyPromptsWithUserData";
// import { rawData } from "./Prompts/modifyPromptsWithUserData";

interface PromptProps {
  ChildInfoGender: string;
  ChildInfoAge: number;
  ChildInfoSkills: String[];
  FocusWords: String[];
}

const ChildInfoGender = "boy";
const ChildInfoAge = 8;
const ChildInfoSkills = ["'r' sound: 3/5", "'s' sound: 4/5"];
const FocusWords = ["r", "s"];

export const CreateExercises = () => {
  const [response, setResponse] = useState("");
  //const [prompt, setPrompt] = useState("");

  const handleClick = async () => {
    try {
      const prompts: String[] = modifyPrompts({
        ChildInfoGender,
        ChildInfoAge,
        ChildInfoSkills,
        FocusWords,
      });

      let promptHistory = await fetchPromptHistory({ userID: 1 });

      const responses: String[] = [];
      for (const prompt of prompts) {
        console.log("This is the prompt: " + prompt);
        const response = await makeRequest(promptHistory, prompt);
        responses.push(response[response.length - 1].content);
        // Process each response here if needed
      }

      // setResponse(response[response.length - 1].content);
      // const lastTwoResponses = response.slice(-2);
    } catch (error) {
      console.error("Error:", error);
      setResponse("Error fetching response");
    }
  };

  return (
    <div>
      <div>
        <label htmlFor="promptInput">Enter Prompt:</label>
        {/* <input
          type="text"
          id="promptInput"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        /> */}
      </div>
      <button onClick={handleClick}>Get AI Response</button>
      <div>
        <label>AI Response:</label>
        <textarea
          rows={6}
          cols={50}
          value={response}
          readOnly
          style={{ marginTop: "10px" }}
        />
      </div>
    </div>
  );
};
