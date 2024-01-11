import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { db } from "@/firebase";
import { Card, CardBody } from "@nextui-org/card";
import { collection, getDocs, query, where } from "firebase/firestore";
import './Goals.css';
import { updateGoals } from "@/app/_redux/userProfileSlice";
import { RootState } from '@/app/_redux/store';


interface UserProps {
    userID: number;
}

export default function Goal({ userID }: UserProps) {
    const dispatch = useDispatch();


    useEffect(() => {
        const fetchGoals = async () => {
            try {
                const usersRef = collection(db, 'client');
                const q = query(usersRef, where("id", "==", userID));
                const querySnapshot = await getDocs(q);

                if(!querySnapshot.empty) {
                    const userDoc = querySnapshot.docs[0];
                    const userData = userDoc.data();        
                    console.log(userData)
                    dispatch(updateGoals(userData.goals));
                } else {
                    console.log("No user with the given ID found");
                }
            } catch (error) {
                console.error("Error fetching goals:", error);
            }
        };

        fetchGoals();
    }, [userID, dispatch]);

    const goals = useSelector((state: RootState) => state.userProfile.goals);


    return (
        <div className="flex flex-col">
            <p className="goals-title">Main Goals</p>
            <Card className="card">
                <CardBody className="userCard">
                    <ul>
                        {goals && goals.map((goal: string, index: number) => (
                            <li key={index}>{goal}</li>
                        ))}
                    </ul>
                </CardBody>
            </Card>
        </div>
    );
}
