'use client'

import React, { useEffect, useState } from 'react';
import { Button } from '@nextui-org/react';
import './sessionStart.css';
import ExerciseFull from '../components/Exercise/ExerciseFull';
import { useSelector } from 'react-redux';
import { RootState } from '../_redux/store'; 
import { Exercise } from '../types';

const SessionStart = () => {
    const exercises = useSelector((state: RootState) => state.userProfile.exercises);

    const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
    const [feedback, setFeedback] = useState({ performance: "", exercise: "" });

    useEffect(() => {
        setFeedback({ performance: "", exercise: "" });
    }, [currentExerciseIndex]);


    const goToNextCard = () => {
        setCurrentExerciseIndex((prevIndex) => (prevIndex + 1) % exercises.length);
    };

    const goBackCard = () => {
        setCurrentExerciseIndex((prevIndex) => {
            if (prevIndex === 0) return exercises.length - 1;
            return prevIndex - 1;
        });
    };

    return (
        <div className="sessionStart">
            <ExerciseFull 
                exercise={exercises[currentExerciseIndex]} 
            />
            <div className="navigationButtons">
                <Button className="goBack" onClick={goBackCard}>Go Back</Button>
                <Button className="goToNext" onClick={goToNextCard}>Next</Button>
            </div>
        </div>
    );
};

export default SessionStart;
