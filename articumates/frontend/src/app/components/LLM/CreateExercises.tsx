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
<<<<<<< HEAD

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
=======
  //const [prompt, setPrompt] = useState("");

  const handleClick = async () => {
    try {
      const prompts: string[] = await modifyPrompts({
        ChildInfoGender,
        ChildInfoAge,
        ChildInfoSkills,
        FocusWords,
      });

      let promptHistory = await fetchPromptHistory({ userID: 1 });

      // const responses: String[] = [];

      const prompt1 = await makeRequest(promptHistory, prompts[0]);
      console.log("prompt1 : ", prompt1);
      console.log(prompt1[prompt1.length - 1].content);

      promptHistory = prompt1[prompt1.length - 1].content;

      const prompt2 = await makeRequest(promptHistory, prompts[1]);
      console.log(prompt2[prompt2.length - 1].content);

      promptHistory = prompt2[prompt2.length - 1].content;

      const prompt3 = await makeRequest(promptHistory, prompts[2]);
      console.log(prompt3[prompt3.length - 1].content);
      console.log("prompt2 : ", prompt2);

      // for (const prompt of prompts) {
      //   console.log("This is the prompt: " + prompt);
      //   const response = await makeRequest(promptHistory, prompt);
      //   console.log(response[response.length - 1].content);
      //   responses.push(response[response.length - 1].content);
      //   // Process each response here if needed
      // }

      // setResponse(response[response.length - 1].content);
      // const lastTwoResponses = response.slice(-2);
    } catch (error) {
      console.error("Error:", error);
      setResponse("Error fetching response");
>>>>>>> 3eb1c4a441bc88ed677ef664fb5e68f53876892d
    }

    setPromptResponses(newResponses);
  } catch (error) {
    console.error("Error:", error);
    setResponse("Error fetching response");
  }

  return promptResponses;
}
