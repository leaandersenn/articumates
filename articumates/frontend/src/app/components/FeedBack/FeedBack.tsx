'use client'

import { faRotateRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardBody, Button, Radio, RadioGroup } from "@nextui-org/react";
import { useEffect, useState } from "react"
import React from "react";
import './FeedBack.css';
import { faThumbsUp, faThumbsDown, faSmile, faSadTear } from '@fortawesome/free-solid-svg-icons';
import PerformanceThumbsUp from '../FeedBackQuestions/PerformanceThumbsUp';
import PerformanceThumbsDown from '../FeedBackQuestions/PerformanceThumbsDown';
import ExerciseSad from '../FeedBackQuestions/ExerciseSad';
import ExerciseSmile from '../FeedBackQuestions/ExerciseSmile';


export default function FeedBack() {

    const [selectedPerformance, setSelectedPerformance] = useState("");

    const [selectedExercise, setSelectedExercise] = useState("");

    useEffect(() => {
        console.log("selectedPerformance" + selectedPerformance);
        console.log("selectedExercise" + selectedExercise);
    }, [selectedPerformance, selectedExercise]);
    
    const onHandlePerformanceThumbsUp = () => {
        setSelectedPerformance("thumbsup");
        console.log("selectedPerformance" + selectedPerformance);
    }

    const onHandlePerformanceThumbsDown = () => {
        setSelectedPerformance("thumbdown");
        console.log("selectedPerformance" + selectedPerformance);
    }

    const onHandleExerciseSmile = () => {
        setSelectedExercise("smile");
        console.log("selectedExercise" + selectedExercise);
    }

    const onHandleExerciseSad = () => {
        setSelectedExercise("sad");
        console.log("selectedExercise" + selectedExercise);
    }

    return (
        <div className="FeedBackBoxes">
            <Card className="performance">
                <CardBody className="performanceBody">
                    <p>How was the performance?</p>
                  <div className="satisfy">
                    <Button
                        isIconOnly
                        className="thumbsUp"
                        onClick={onHandlePerformanceThumbsUp}
                    >
                         <FontAwesomeIcon icon={faThumbsUp} />
                    </Button>
                    <Button
                        isIconOnly
                        className="thumbsDown"
                        onClick={onHandlePerformanceThumbsDown}
                    >
                         <FontAwesomeIcon icon={faThumbsDown} />
                    </Button>
                </div>
                    {selectedPerformance === "thumbsup" && <PerformanceThumbsUp />}
                    {selectedPerformance === "thumbdown" && <PerformanceThumbsDown />}
                </CardBody>
            </Card>
            <Card className="exercise">
               <CardBody className="exerciseBody">
                    <p>How was the exercise?</p>
                  <div className="satisfy">
                    <Button
                        isIconOnly
                        className="smile"
                        onClick={onHandleExerciseSmile}
                    >
                         <FontAwesomeIcon icon={faSmile} />
                    </Button>
                    <Button
                        isIconOnly
                        className="sad"
                        onClick={onHandleExerciseSad}
                    >
                         <FontAwesomeIcon icon={faSadTear} />
                    </Button>
                </div>
                    {selectedExercise === "smile" && <ExerciseSmile/>}
                    {selectedExercise === "sad" && <ExerciseSad />}
                </CardBody>
            </Card>

        </div>
    );
}