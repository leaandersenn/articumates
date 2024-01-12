'use client';

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../_redux/store';
import { Impairment, ChosenImpairment } from '@/app/types';
import {
  addChosenImpairment,
  removeChosenImpairment,
} from '../../_redux/userProfileSlice';
import { Checkbox } from '@nextui-org/react';
import '../ImpairmentSelector/ImpairmentSelector.css'

const ImpairmentSelector: React.FC = () => {
  const dispatch = useDispatch();
  const { impairments, chosenImpairments } = useSelector((state: RootState) => state.userProfile);

  const handleAddOrToggleImpairment = (impairment: Impairment) => {
    const existing = chosenImpairments.find((chosen) => chosen.description === impairment.description);

    if (existing) {
      dispatch(removeChosenImpairment(impairment.description));
    } else {
      const chosenImpairment: ChosenImpairment = {
        ...impairment,
      };
      dispatch(addChosenImpairment(chosenImpairment));
    }
  };

  // const handleFocusChange = (description: string, focus: ChosenImpairment['focus']) => {
  //   dispatch(updateChosenImpairmentFocus({ description, focus }));
  // };

  const renderSkillLevel = (skillLevel: number) => {
    return [...Array(5)].map((_, index) => (
      <span key={index} className={index < skillLevel ? 'skill-level selected' : 'skill-level'}>
        ★
      </span>
    ));
  };

  return (
    <div className="exercises">
      {impairments.map((impairment) => (
        <div key={impairment.description} className="impairmentRow">
          <Checkbox
            checked={chosenImpairments.some((chosen) => chosen.description === impairment.description)}
            onChange={() => handleAddOrToggleImpairment(impairment)}
          />
          <span className="impairmentDescription">{impairment.description}</span>
          <div className="skillLevel">{renderSkillLevel(impairment.skillLevel)}</div>
          {/* <select
            className="select"
            value={
              chosenImpairments.find((chosen) => chosen.description === impairment.description)?.focus || 'No focus'
            }
            onChange={(e) => handleFocusChange(impairment.description, e.target.value as ChosenImpairment['focus'])}
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
            <option value="No focus">No focus</option>
          </select> */}
        </div>
      ))}
    </div>
  );
};

export default ImpairmentSelector;
