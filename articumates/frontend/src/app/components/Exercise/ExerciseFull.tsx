import React from 'react';
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/react';
import './ExerciseFull.css';
import FeedBack from '../FeedBack/FeedBack';



function ExerciseFull({ exercise }: any) {
    return (
        <Card className="fullExerciseCard">
            <CardBody className="exerciseCardBody">
                <p className="estimated">Estimated Time: 20 minutes</p>
                <pre className="formatting">{exercise}</pre>
            </CardBody>
            <CardFooter>
                <FeedBack />
            </CardFooter>
        </Card>
    );
}

export default ExerciseFull;