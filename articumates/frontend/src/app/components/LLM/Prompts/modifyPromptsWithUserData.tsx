import rawData from "./WordMiming.json"; // This import style requires "esModuleInterop", see "side notes"
//console.log("This is the first one" + JSON.stringify(rawData.backgroundInfo));

interface PromptProps {
  ChildInfoGender: string;
  ChildInfoAge: number;
  ChildInfoSkills: String[];
  FocusWords: String[];
}

export async function modifyPrompt({
  ChildInfoGender,
  ChildInfoAge,
  ChildInfoSkills,
  FocusWords,
}: PromptProps) {
  rawData.childInfo.gender = ChildInfoGender;
  rawData.childInfo.age = ChildInfoAge;
  rawData.childInfo.skills = ChildInfoSkills;
  rawData.exercise.focusWords = FocusWords;

  let backgroundInfo = rawData.backgroundInfo;
  let childInfoAge = " Age : " + rawData.childInfo.age + " years.";
  let childInfoGender = " Gender : " + rawData.childInfo.gender + ".";
  let childInfoSkills = " Skills : " + rawData.childInfo.skills + ".";
  let duration =
    "Exercise info: Task duration: " + rawData.exercise.duration + " minutes,";
  let focusWords =
    " Focus the task on these words: " + rawData.exercise.focusWords + ".";
  let description = " Description: " + rawData.exercise.description;
  let result =
    backgroundInfo +
    childInfoAge +
    childInfoGender +
    childInfoSkills +
    duration +
    focusWords +
    description;
  //result = result.substring(1, result.length - 1);
  return result;
}

//console.log("This is the second one: " + JSON.stringify(rawData));
//export { rawData };
