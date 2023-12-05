import { User } from "@/app/utils/TypeDef";
import { db } from "@/firebase";
import { Avatar, Card, CardBody } from "@nextui-org/react";
import { collection, getDocs, query, where } from "firebase/firestore";
import './ProfileInfo.css';

interface UserProps {
    userID: number;
}

export default async function ProfileInfo({userID}: UserProps) {
    try {
        const usersRef = collection(db, 'client');
        const q = query(usersRef, where("id", "==", userID));
        const querySnapshot = await getDocs(q);

        if(!querySnapshot.empty) {
            const userDoc = querySnapshot.docs[0];
            const userData = userDoc.data();

        return(
            <div className="userComponent">
                <Avatar radius="full" className="userPicture" />
                <div className="userInfo">
                    <p className="name">{userData.name}</p>
                    <p className="age">{userData.age} years old</p>
                </div>
             </div>
        );
    } else {
        console.log("Could not find user, profileinfo");
    }
    }
    catch (error) {
        console.log("Error retrieving data profileinfo")
    }

}


