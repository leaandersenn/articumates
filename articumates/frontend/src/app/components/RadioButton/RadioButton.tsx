'use client'
import React from 'react';
import { Radio } from '@nextui-org/react';
import { FaRegCircle, FaDotCircle } from 'react-icons/fa';

interface IconRadioProps {
  value: string;
  checkedValue: string;
  onCheckedValueChange: (value: string) => void;
}

const IconRadio: React.FC<IconRadioProps> = ({ value, checkedValue, onCheckedValueChange, ...props }) => {
  return (
    <Radio
      checked={value === checkedValue}
      value={value}
      onChange={(e) => onCheckedValueChange(e.target.value)}
      {...props}
    >
      {value === checkedValue ? <FaDotCircle /> : <FaRegCircle />}
      {props.children}
    </Radio>
  );
};

export default IconRadio;
