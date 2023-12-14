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
                <p className="exerciseText">Exercise Title</p>
                <p className="time">Estimated time: 20 minutes</p>
              </ModalHeader>
              <ModalBody>
               TEEEST
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
