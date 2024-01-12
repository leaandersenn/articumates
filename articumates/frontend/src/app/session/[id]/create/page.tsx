'use client'

import React from 'react';
import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import './create.css';
import ExerciseCard from "@/app/components/Exercise/ExerciseCard";
import { useSelector } from 'react-redux';
import { useRouter } from "next/navigation"; 
import { RootState } from '@/app/_redux/store';

export default function Create() {

  const exercises = useSelector((state: RootState) => state.userProfile.exercises);
  const router = useRouter();
  const userID = useSelector((state: RootState) => state.userProfile.id);


  const onHandleNotes = () => {
    //TODO Implement modal to add notes to the session.
  }

  const onHandleBack = () => {   
    router.push(`/session/${userID}`);
  }

  const onHandleSave = () => { 
    router.push(`/sessionStart`);
  }

  return (
    <Card className="createCard">
      <CardHeader className="sessionHeader">
        Create Session
      </CardHeader>
      <p className="exercisesText">Exercises</p>
      <p className="timeText">60 minutes</p>
      <CardBody className="createBody">
        <Card className="exerciseCard">
          {exercises.map((exercise, index) => (
            <ExerciseCard key={index} exercise={exercises} number={index} />
          ))}
        </Card>
        <Button className="addNotesButton" onClick={onHandleNotes}>Add Notes</Button>
        <div className="flex flex-row gap-y-4">
          <Button className="goBackButton" onClick={onHandleBack}>Go Back</Button>
          <Button className="saveButton" onClick={onHandleSave}>Start Session</Button>
        </div>
      </CardBody>
    </Card>
  );
}
