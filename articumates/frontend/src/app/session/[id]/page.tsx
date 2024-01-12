'use client'

import ImpairmentSelector from "@/app/components/ImpairmentSelector/ImpairmentSelector";
import Impairments from "@/app/components/Impairments/Impairments";
import ProfileInfo from "@/app/components/ProfileInfo/ProfileInfo";
import WhenBox from "@/app/components/WhenBox/page";
import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import { useParams, useRouter } from "next/navigation";
import { Fragment } from "react";
import './session.css'
import { CreateExercises } from "@/app/components/LLM/CreateExercises";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/_redux/store";
import { addExercises } from "@/app/_redux/userProfileSlice";

 

export default function Session() {

  const dispatch = useDispatch();

  const params = useParams();
  const userID = params.id; 
  const router = useRouter();

  // Access chosenImpairments from Redux store
 const chosenImpairments = useSelector((state: RootState) => state.userProfile.chosenImpairments);
 const age = useSelector((state: RootState) => state.userProfile.age);

 // Update the childInfo object based on chosenImpairments
  const childInfo = {
  ChildInfoGender: "boy" as string,
  ChildInfoAge: age,
  ChildInfoSkills: chosenImpairments.map((impairment) => `'${impairment.description}': ${impairment.skillLevel}/5`) as string[],
  };


  const onHandleCreateExercise = () => {
    if (childInfo.ChildInfoSkills.length > 0) {
      const testPromise = CreateExercises(childInfo);
      console.log(childInfo.ChildInfoSkills)
      testPromise.then((test) => {
      // You can access the 'test' variable here when it's resolved
      console.log(test);
      router.push(`/session/${userID}/create`);
      dispatch(addExercises(test))
    });
    } else {
      console.log("You must choose some exercises");
    }
  }

  const onHandleCancel = () => {
    router.push(`/users/${userID}`);
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
              {/* <p className="focus">Focus</p> */}
            </div>
            <ImpairmentSelector />
            <div className="flex flex-row gap-y-4">
              <Button className="cancelButton" onClick={onHandleCancel}>Cancel</Button>
              <Button className="generateButton" onClick={onHandleCreateExercise}>Generate Exercises</Button>
            </div>
          </CardBody>
        </Card>
    );
}