'use client'

import ImpairmentSelector from "@/app/components/ImpairmentSelector/ImpairmentSelector";
import Impairments from "@/app/components/Impairments/Impairments";
import ProfileInfo from "@/app/components/ProfileInfo/ProfileInfo";
import WhenBox from "@/app/components/WhenBox/page";
import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import { useParams, useRouter } from "next/navigation";
import { Fragment } from "react";
import './session.css'



export default function Session() {

    const params = useParams();
    const userID = params.id; 
    const router = useRouter();

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
              <Button className="generateButton"onClick={onHandleGenerate}>Generate Exercises</Button>
            </div>
          </CardBody>
        </Card>
    );
}
