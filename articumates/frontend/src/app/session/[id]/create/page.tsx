'use client'

import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import './create.css';
import Exercise from "@/app/components/Exercise/ExerciseModal";
import ExerciseCard from "@/app/components/Exercise/ExerciseCard";


export default function Create() {

    const onHandleNotes = () => {
    }

    const onHandleBack= () => {   
    }

    const onHandleSave = () => {  
    }

    return(
        <Card className="createCard">
            <CardHeader className="sessionHeader">
            Create Session
          </CardHeader>
          <p className="exercisesText">Exercises</p>
          <p className="timeText">60 minutes</p>
          <CardBody className="createBody">
            <Card className="exerciseCard">
                <ExerciseCard></ExerciseCard>
                <ExerciseCard></ExerciseCard>
                <ExerciseCard></ExerciseCard>
                {/* Add in exercises card. */}
                {/* <ExerciseSheet userID={state.id} type={exercise type 1}> */}
                {/* <ExerciseSheet userID={state.id} type={exercise type 2}> */}
                {/* <ExerciseSheet userID={state.id} type={exercise type 3}> */}
            </Card>
            <Button className="addNotesButton" onClick={onHandleNotes}>Add Notes</Button>
            <div className="flex flex-row gap-y-4">
              <Button className="goBackButton" onClick={onHandleBack}>Go Back</Button>
              <Button className="saveButton"onClick={onHandleSave}>Start and review session</Button>
            </div>
          </CardBody>

        </Card>
    );
}