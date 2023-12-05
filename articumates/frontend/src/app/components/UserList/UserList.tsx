import { User } from "@/app/utils/TypeDef";
import { db } from "@/firebase";
import { collection, getDocs } from "firebase/firestore";
import UserProfile from "../UserProfile/UserProfile";

export default async function UserList() {
  try {
    const usersRef = collection(db, 'client');
    const usersSnapshot = await getDocs(usersRef);
    const usersData = usersSnapshot.docs.map(doc => doc.data() as User);

    return (
      <div className="flex flex-col items-center">
        {usersData.map((user, index) => (
          <UserProfile key={index} {...user} />
        ))}
      </div>
    );
  } catch (error) {
    console.log("Could not load users.");
  }
};