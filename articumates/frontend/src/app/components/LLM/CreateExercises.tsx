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

export async function CreateExercises(): Promise<string[]> {
  const [promptResponses, setPromptResponses] = useState([""]);
  //const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  try {
    const prompts: string[] = await modifyPrompts({
      ChildInfoGender,
      ChildInfoAge,
      ChildInfoSkills,
      FocusWords,
    });

    let promptHistory = await fetchPromptHistory({ userID: 1 });
    let newResponses: string[] = [];

    for (const prompt of prompts) {
      const response = await makeRequest(promptHistory, prompt);
      const newString = response[response.length - 1].content;
      newResponses.push(newString);
      promptHistory = response[response.length - 1].content;
    }

    setPromptResponses(newResponses);
  } catch (error) {
    console.error("Error:", error);
    setResponse("Error fetching response");
  }

  return promptResponses;
}
