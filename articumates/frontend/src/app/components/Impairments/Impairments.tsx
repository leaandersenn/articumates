import { db } from "@/firebase";
import { Card, CardBody } from "@nextui-org/card";
import { collection, getDocs, query, where } from "firebase/firestore";
import './Impairments.css';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { updateImpairments } from "@/app/_redux/userProfileSlice";
import { RootState } from "@/app/_redux/store";

interface UserProps {
    userID: number;
}

interface Impairment {
    description: string;
    skillLevel: number;
  }

export default function Impairments({ userID }: UserProps) {

    const dispatch = useDispatch();

    useEffect(() => {
        const fetchImpairments = async () => {
            try {
                const usersRef = collection(db, 'client');
                const q = query(usersRef, where("id", "==", userID));
                const querySnapshot = await getDocs(q);
        
                if(!querySnapshot.empty) {
                    const userDoc = querySnapshot.docs[0];
                    const userData = userDoc.data();
                    console.log(userData)
                    dispatch(updateImpairments(userData.impairments));
                } else {
                    console.log("No user with the given ID found");
                }
            } catch (error) {
                console.error("Error fetching impairments:", error);
            }
        };

        fetchImpairments();
    }, [userID, dispatch]);

    const impairments = useSelector((state: RootState) => state.userProfile.impairments);
    console.log(impairments + "impairments");

            return (
                <div className="impairments-container">
                    <span className="title-container">
                        <p className="impairment-title">Impairments</p>
                        <p className="skillLevel-title">SkillLevel</p>
                    </span>
                    <div className="impairments-list">
                    {impairments && impairments.map((impairment: Impairment, index: number) => (
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
        } 
