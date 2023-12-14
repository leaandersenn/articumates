import wordMimingData from "./WordMiming.json";
import storyTellingData from "./StoryTelling.json"; // Replace with your actual file name
import recognitionOfWordsData from "./RecognitionOfWords.json"; // Replace with your actual file name

interface JsonData {
  backgroundInfo: String;
  childInfo: {
    gender: String;
    age: number;
    skills: String[];
  };
  exercise: {
    duration: number;
    focusWords: String[];
    description: String;
  };
}

interface PromptProps {
  ChildInfoGender: String;
  ChildInfoAge: number;
  ChildInfoSkills: String[];
  FocusWords: String[];
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

export async function modifyPrompts(props: PromptProps) {
  const prompts: String[] = [];

  prompts.push(createPrompt(storyTellingData, props));
  prompts.push(createPrompt(recognitionOfWordsData, props));
  prompts.push(createPrompt(wordMimingData, props));
  // console.log(
  //   "prompt1: " +
  //     prompts[0] +
  //     "prompt2: " +
  //     prompts[1] +
  //     "prompt3: " +
  //     prompts[2]
  // );

  return prompts;
}
