"use client";

import React, { useState } from "react";
import { makeRequest } from "./openai.mjs";
import { fetchPromptHistory } from "./FetchPromptHistory";
import { PushPromptToDB } from "./PushPromptToDB";

export const CreateExercises = () => {
  const [response, setResponse] = useState("");
  const [prompt, setPrompt] = useState("");

  const handleClick = async () => {
    try {
      let promptHistory = await fetchPromptHistory({ userID: 1 });

      const response = await makeRequest(promptHistory, prompt);

      setResponse(response[response.length - 1].content);
      const lastTwoResponses = response.slice(-2);
      PushPromptToDB(1, lastTwoResponses);
    } catch (error) {
      console.error("Error:", error);
      setResponse("Error fetching response");
    }
  };

  return (
    <div>
      <div>
        <label htmlFor="promptInput">Enter Prompt:</label>
        <input
          type="text"
          id="promptInput"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
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
