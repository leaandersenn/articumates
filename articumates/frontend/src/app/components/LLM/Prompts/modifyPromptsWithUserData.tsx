import wordMimingData from "./WordMiming.json"; 
import storyTellingData from "./StoryTelling.json"; 
import recognitionOfWordsData from "./RecognitionOfWords.json"; 

//Interface for the different LLM prompts, stored in seperate JSON files
interface JSONData {
  backgroundInfo: String;
  childInfo: {
    gender: String;
    age: number;
    skills: String[];
  };
  exercise: {
    duration: number;

    description: String;
  };
}


//Information about the child
interface PromptProps {
  ChildInfoGender: String;
  ChildInfoAge: number;
  ChildInfoSkills: String[];

}


//Function for combining the child info with the prompts
function createPrompt(
  jsonData: JSONData,
  { ChildInfoGender, ChildInfoAge, ChildInfoSkills}: PromptProps
) {
  jsonData.childInfo.gender = ChildInfoGender;
  jsonData.childInfo.age = ChildInfoAge;
  jsonData.childInfo.skills = ChildInfoSkills;

  let duration =
    "Exercise info: Task duration: " + jsonData.exercise.duration + " minutes,";
  let description = " Description: " + jsonData.exercise.description;

  return (
    
    duration +
    description
  );
}

function createBackGroundPrompt(
  jsonData: JSONData,
  { ChildInfoGender, ChildInfoAge, ChildInfoSkills}: PromptProps
) {
  jsonData.childInfo.gender = ChildInfoGender;
  jsonData.childInfo.age = ChildInfoAge;
  jsonData.childInfo.skills = ChildInfoSkills;

  let backgroundInfo = jsonData.backgroundInfo;
  let childInfoAge = " Age: " + jsonData.childInfo.age + " years.";
  let childInfoGender = " Gender: " + jsonData.childInfo.gender + ".";
  let childInfoSkills =
    " Skills: " + jsonData.childInfo.skills.join(", ") + ".";

  return (
    backgroundInfo +
    childInfoAge +
    childInfoGender +
    childInfoSkills
  );
}

export async function modifyPrompts(props: PromptProps) {
  const prompts: String[] = [];

  prompts.push(createBackGroundPrompt(recognitionOfWordsData, props) + createPrompt(recognitionOfWordsData, props));
  prompts.push(createPrompt(wordMimingData, props));
  prompts.push(createPrompt(storyTellingData, props));
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
