import React, { useState } from 'react';
import ExerciseModal from './ExerciseModal';
import { Button, Card, CardBody, CardHeader } from '@nextui-org/react';
import './ExerciseCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightAndDownLeftFromCenter } from '@fortawesome/free-solid-svg-icons';
export default function ExerciseCard() {
    
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const onOpen = () => setIsOpen(true);
    const onClose = () => setIsOpen(false);
    
    
    return(

        /* TODO: Remove div, just width did not respond when card is button */
        <div className="cardStyling">
        <Card 
            className="cardExercise"   
            isPressable
            onPress={onOpen} 
        >
            <CardHeader className="exerciseHeader">
                Exercise Title
                <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} />
            </CardHeader>
            <CardBody className="exerciseCardBody">
                Estimated Time: 20 minutes
            </CardBody>
        </Card>
        
        <ExerciseModal
            onOpen={onOpen}
            isOpen={isOpen}
            onClose={onClose} 
        />
    </div>
    );
}