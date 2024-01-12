
import React, { useState } from 'react';
import ExerciseModal from './ExerciseModal';
import { Button, Card, CardBody, CardHeader } from '@nextui-org/react';
import './ExerciseCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightAndDownLeftFromCenter } from '@fortawesome/free-solid-svg-icons';


export default function ExerciseCard({exercise, number}: any) {
    
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const onToggleOpen= () => setIsOpen(!isOpen);
    const exerciseType = ["WORD REPETITION", "MIME GAME", "STORYTELLING"];
    
    const slicedText = exercise[number].slice(0,290);
    const fullText = exercise[number];

    return(

        <div className="cardStyling">
        <Card 
            className="cardExercise"   
            isPressable
            onPress={onToggleOpen} 
        >
            <CardHeader className="exerciseHeader">
                <p>{exerciseType[number]}</p>
                <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} />
            </CardHeader>
            <CardBody className="exerciseCardText">
                <pre className="test">{isOpen ? fullText : slicedText}</pre>
                <p className="estimatedTime">Estimated Time: 20 minutes</p>
            </CardBody>
        </Card>
    </div>
    );
}