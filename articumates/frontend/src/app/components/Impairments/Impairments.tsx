import { db } from "@/firebase";
import { Card, CardBody } from "@nextui-org/card";
import { collection, getDocs, query, where } from "firebase/firestore";
import './Impairments.css';

interface UserProps {
    userID: number;
}

interface Impairment {
    description: string;
    skillLevel: number;
  }

export default async function Impairments({ userID }: UserProps) {
    try {
        const usersRef = collection(db, 'client');
        const q = query(usersRef, where("id", "==", userID));
        const querySnapshot = await getDocs(q);

        if(!querySnapshot.empty) {
            const userDoc = querySnapshot.docs[0];
            const userData = userDoc.data();
            console.log(JSON.stringify(userData) + " userdata");

            return (
                <div className="impairments-container">
                    <span className="title-container">
                        <p className="impairment-title">Impairments</p>
                        <p className="skillLevel-title">SkillLevel</p>
                    </span>
                    <div className="impairments-list">
                    {userData.impairments.map((impairment: Impairment, index: number) => (
                        <div className="impairment-item" key={index}>
                        <span>{impairment.description}</span>
                        <div className="skill-level">
                            {[...Array(impairment.skillLevel)].map((_, starIndex) => (
                            <span className="star" key={starIndex}>★</span>
                            ))}
                            {[...Array(5 - impairment.skillLevel)].map((_, starIndex) => (
                            <span className="star-empty" key={starIndex}>☆</span>
                            ))}
                        </div>
                        </div>
                    ))}
                    </div>
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