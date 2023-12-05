"use client";

import React, { useState } from "react";
import { makeRequest } from "./openai.mjs";
import { fetchPromptHistory } from "./ReadEarlierPrompts";

export const CreateExercises = () => {
  const [response, setResponse] = useState("");
  const [prompt, setPrompt] = useState("");

  const handleClick = async () => {
    try {
      const response = await makeRequest(prompt);
      console.log(response);
      if (response == null) {
        setResponse("");
      } else {
        setResponse(response);
      }
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
      <button onClick={fetchPromptHistory}>Get AI Response</button>
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
