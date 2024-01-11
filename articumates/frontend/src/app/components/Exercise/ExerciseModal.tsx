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
}

export default function ExerciseModal(props: ExerciseModalProps) {
  
  const onHandleRegenerate = () => {
    console.log("Regenerate");
  }

  return (
    <>
      <Modal className="exerciseModal" isOpen={props.isOpen} onClose={props.onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <p className="exerciseText">The Daring Adventure of Captain Sam and the Lost Treasure</p>
                <p className="time">Estimated time: 20 minutes</p>
              </ModalHeader>
              <ModalBody>
              This exercise aims to help the child improve his speech sounds, specifically the s, r and l sounds. The therapist will guide the child through reading an exciting story out loud, focusing on correct pronunciation and articulation. The goal is to make the exercise engaging and enjoyable while addressing the speech difficulties.
               </ModalBody>
              <ModalFooter className="generateGroup">
                <p className="generate">Regenerate Exercise</p>
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
