import { User } from "@/app/utils/TypeDef";
import { db } from "@/firebase";
import { Avatar, Card, CardBody } from "@nextui-org/react";
import { collection, getDocs, query, where } from "firebase/firestore";
import './ProfileInfo.css';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { updateAge, updateName } from "@/app/_redux/userProfileSlice";
import { RootState } from "@/app/_redux/store";

interface UserProps {
    userID: number;
}

export default function ProfileInfo({userID}: UserProps) {

    const dispatch = useDispatch();
    
    useEffect(() => {
        const fetchProfileInfo = async () => {
            try {
                const usersRef = collection(db, 'client');
                const q = query(usersRef, where("id", "==", userID));
                const querySnapshot = await getDocs(q);
        
                if(!querySnapshot.empty) {
                    const userDoc = querySnapshot.docs[0];
                    const userData = userDoc.data();
                    console.log(userData)
                    dispatch(updateName(userData.Name))
                    dispatch(updateAge(userData.age))
        
            } else {
                console.log("Could not find user, profileinfo");
            }
            }
            catch (error) {
                console.log("Error retrieving data profileinfo")
            }
    
        };

        fetchProfileInfo();

    }, [userID, dispatch]);

    const profileInfo = useSelector((state: RootState) => state.userProfile)

    return(
        <div className="userComponent">
            <Avatar radius="full" className="userPicture" />
            <div className="userInfo">
                <p className="name">{profileInfo.name}</p>
                <p className="age">{profileInfo.age} years old</p>
            </div>
         </div>
    );
}