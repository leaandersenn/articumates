import wordMimingData from "./WordMiming.json";
import storyTellingData from "./StoryTelling.json"; // Replace with your actual file name
import recognitionOfWordsData from "./RecognitionOfWords.json"; // Replace with your actual file name

interface JsonData {
  backgroundInfo: string;
  childInfo: {
    gender: string;
    age: number;
    skills: string[];
  };
  exercise: {
    duration: number;
    focusWords: string[];
    description: string;
  };
}

interface PromptProps {
  ChildInfoGender: string;
  ChildInfoAge: number;
  ChildInfoSkills: string[];
  FocusWords: string[];
}

function createPrompt(
  jsonData: JsonData,
  { ChildInfoGender, ChildInfoAge, ChildInfoSkills, FocusWords }: PromptProps
) {
  jsonData.childInfo.gender = ChildInfoGender;
  jsonData.childInfo.age = ChildInfoAge;
  jsonData.childInfo.skills = ChildInfoSkills;
  jsonData.exercise.focusWords = FocusWords;

  let backgroundInfo = jsonData.backgroundInfo;
  let childInfoAge = " Age: " + jsonData.childInfo.age + " years.";
  let childInfoGender = " Gender: " + jsonData.childInfo.gender + ".";
  let childInfoSkills =
    " Skills: " + jsonData.childInfo.skills.join(", ") + ".";
  let duration =
    "Exercise info: Task duration: " + jsonData.exercise.duration + " minutes,";
  let focusWords =
    " Focus the task on these words: " +
    jsonData.exercise.focusWords.join(", ") +
    ".";
  let description = " Description: " + jsonData.exercise.description;

  return (
    backgroundInfo +
    childInfoAge +
    childInfoGender +
    childInfoSkills +
    duration +
    focusWords +
    description
  );
}

export function modifyPrompts(props: PromptProps) {
  const prompts = [];

  prompts.push(createPrompt(storyTellingData, props));
  prompts.push(createPrompt(recognitionOfWordsData, props));
  prompts.push(createPrompt(wordMimingData, props));

  return prompts;
}
