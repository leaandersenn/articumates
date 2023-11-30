'use client'

import React from 'react';
import './Searchbar.css';
import { Input } from '@nextui-org/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';



export default function Searchbar() {
    return (
        <Input
            placeholder="Search for client names..."
            size="lg"
            color="primary"
            className="searchClient"
            startContent={
                <FontAwesomeIcon icon={faSearch} />
              }
        />
    );

}