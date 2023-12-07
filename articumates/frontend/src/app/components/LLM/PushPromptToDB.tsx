//import { db } from "@/firebase";
const admin = require("firebase-admin");
const serviceAccount = require("./articumate-firebase-adminsdk-iqjjd-39bfc63c4d.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

export async function PushPromptToDB(userID: number, newPrompts: String) {
  try {
    const clientsRef = db.collection("client");
    const result = await clientsRef.add(newPrompts);
    console.log("Client added with ID:", result.id);
  } catch (error) {
    console.log("Error retrieving data profileinfo");
  }
}
