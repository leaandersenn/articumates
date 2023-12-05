import { db } from "@/firebase";
import { Card, CardBody } from "@nextui-org/card";
import { collection, getDocs, query, where } from "firebase/firestore";
import './Goals.css';

interface UserProps {
    userID: number;
}

export default async function Goal({ userID }: UserProps) {
    try {
        const usersRef = collection(db, 'client');
        const q = query(usersRef, where("id", "==", userID));
        const querySnapshot = await getDocs(q);

        if(!querySnapshot.empty) {
            const userDoc = querySnapshot.docs[0];
            const userData = userDoc.data();

            return(
            <div className="flex flex-col">
                <p className="goals-title">Main Goals</p>
                <Card className="card">
                    <CardBody className="userCard">
                        <ul>
                         {userData.goals && userData.goals.map((goal: string, index: number) => (
                         <li key={index}>{goal}</li>
                         ))}
                        </ul>
                    </CardBody>
                </Card>
            </div>
            );
        } else {
            console.log("No user with the given ID found")
        }

    } catch (error) {
        return(
            <div className="text-2xl text-white">No user was found</div>
        )
    }
}