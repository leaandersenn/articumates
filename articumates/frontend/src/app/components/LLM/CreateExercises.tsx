"use client";

import React, { useState } from "react";
import { makeRequest } from "./openai.mjs";
import { fetchPromptHistory } from "./FetchPromptHistory";
import { modifyPrompt } from "./Prompts/modifyPromptsWithUserData";
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
  const [prompt, setPrompt] = useState("");

  const handleClick = async () => {
    try {
      const data = await modifyPrompt({
        ChildInfoGender,
        ChildInfoAge,
        ChildInfoSkills,
        FocusWords,
      });
      setPrompt(data);
      let promptHistory = await fetchPromptHistory({ userID: 1 });

      console.log("Test: " + data);

      console.log("This is the prompt sent to the API: " + prompt);

      const response = await makeRequest(promptHistory, prompt);
      setResponse(await response);
      setResponse(response[response.length - 1].content);
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
