import { db } from "@/firebase";
import { collection, doc, getDocs, query, where } from "firebase/firestore";
import { Content } from "next/font/google";
import { List } from "postcss/lib/list";

interface UserProps {
  userID: number;
}

export async function fetchPromptHistory({ userID }: UserProps) {
  let history: { content: String; role: String }[] = [];

  try {
    const usersRef = collection(db, "client");
    const q = query(usersRef, where("id", "==", userID));
    const querySnapshot = await getDocs(q);
    const userDoc = querySnapshot.docs[0];
    const userData = userDoc.data();

    //console.log(JSON.stringify(userData) + " userdata");
    //console.log(JSON.stringify(userData.promptHistory));

    userData.promptHistory.map((prompt: { role: String; content: String }) => {
      const { role, content } = prompt;
      history.push({ role, content });
    });
    //console.log("PromptHistory : " + JSON.stringify(history));

    return history;
  } catch (error) {
    console.log("Error retrieving data profileinfo");
  }
}
