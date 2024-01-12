
'use client'

import ImpairmentSelector from "@/app/components/ImpairmentSelector/ImpairmentSelector";
import Impairments from "@/app/components/Impairments/Impairments";
import ProfileInfo from "@/app/components/ProfileInfo/ProfileInfo";
import WhenBox from "@/app/components/WhenBox/page";
import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import { useParams, useRouter } from "next/navigation";
import { Fragment, useState } from "react";
import './session.css'
import { CreateExercises } from "@/app/components/LLM/CreateExercises";
import { ChosenImpairment } from "@/app/types";
import { useSelector } from "react-redux";
import { RootState } from "@/app/_redux/store";


export default function Session() {
  // Access chosenImpairments from Redux store


  // Access chosenImpairments from Redux store
 const chosenImpairments = useSelector((state: RootState) => state.userProfile.chosenImpairments);

 // Update the childInfo object based on chosenImpairments
 const childInfo = {
ChildInfoGender: "boy" as string,
ChildInfoAge: 8 as number,
ChildInfoSkills: chosenImpairments.map((impairment) => `'${impairment.description}': ${impairment.skillLevel}/5`) as string[],
FocusWords: chosenImpairments.map((impairment) => impairment.description) as string[],
};

    const params = useParams();
    const userID = params.id; 
    const router = useRouter();

    const onHandleCreateExercise = () => {
      console.log(childInfo.ChildInfoSkills);
      //const test = CreateExercises(childInfo);
    }

    const onHandleCancel = () => {
      router.push(`/users/${userID}`);
    }

    const onHandleGenerate = () => {
      router.push(`/session/${userID}/create`);
    }


    return(
        <Card className="sessionCard">
          <CardHeader className="sessionHeader">
            Create Session
          </CardHeader>
          <CardBody className="sessionBody">
            <div className="timeProfile">
                <WhenBox/>
                <Card className="profileCard">
                  <ProfileInfo userID={Number(userID)} />
                </Card>
            </div>
            <p className="exercisesText">Exercises</p>

            <div className="textGroup">
              <p className="impairment">Impairment</p>
              <p className="skill">SkillLevel</p>
              <p className="focus">Focus</p>
            </div>
            <ImpairmentSelector />
            <div className="flex flex-row gap-y-4">
              <Button className="cancelButton" onClick={onHandleCancel}>Cancel</Button>
              <Button className="cancelButton" onClick={onHandleCreateExercise}>CreateExercise</Button>
              <Button className="generateButton"onClick={onHandleGenerate}>Generate Exercises</Button>
            </div>
          </CardBody>
        </Card>
    );
}