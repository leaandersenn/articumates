import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@nextui-org/react';
import React, { useState } from 'react';
import './ExerciseModal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateRight } from '@fortawesome/free-solid-svg-icons';
import { CreateExercises } from '../LLM/CreateExercises'

interface ExerciseModalProps {
  onOpen: () => void;
  isOpen: boolean;
  onClose: () => void;
  exercise: string;
}

export default function ExerciseModal(props: ExerciseModalProps) {
  
  const onHandleRegenerate = () => {
    //console.log("Regenerate");
  }

  return (
    <>
      <Modal className="exerciseModal" isOpen={props.isOpen} onClose={props.onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <p className="textFormatting">{props.exercise}</p>
               </ModalBody>
              <ModalFooter className="generateGroup">
                <pre className="generate">Regenerate Exercise</pre>
                <Button
                  isIconOnly
                  onClick={onHandleRegenerate}
                  className="regenerateButton"
                >
                <FontAwesomeIcon icon={faRotateRight} />
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
