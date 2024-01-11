'use client'

import React, { ChangeEvent } from 'react';
import './Searchbar.css';
import { Input } from '@nextui-org/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

interface SearchbarProps {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  }
  
  const Searchbar: React.FC<SearchbarProps> = ({ value, onChange }) => {
    return (
      <Input
        placeholder="Search for client names..."
        size="lg"
        color="primary"
        className="searchClient"
        startContent={<FontAwesomeIcon icon={faSearch} />}
        value={value}
      />
    );
  };
  
  export default Searchbar;