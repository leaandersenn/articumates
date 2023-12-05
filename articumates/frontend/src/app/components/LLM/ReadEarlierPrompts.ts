import { db } from "../../../firebase";
import { collection, getDoc, getDocs, query, where } from "firebase/firestore";

export async function fetchPromptHistory() {
  const usersRef = collection(db, "client");
  const cityRef = await getDocs(usersRef);
  const usersSnapshot = await getDocs(usersRef);
  const promptHistory = collection(db, "1m1cca4BCRs7R96QU7Ln");
  const promp = usersSnapshot.docs.map((doc) => doc.data() as String);
  console.log(promptHistory);
  // console.log("Fetched users:", JSON.stringify(usersList, null, 2));
  return usersSnapshot;
}
