'use client'

import UserList from '../components/UserList/UserList';
import { ChangeEvent, Suspense, useState } from 'react';
import './users.css';
import { Spinner } from '@nextui-org/react';
import Searchbar from '../components/Searchbar/Searchbar';


export default function Users() {


  return (
    <div className="flex flex-col items-center">
      <Suspense fallback={<div><Spinner color="default"/></div>}>
        <UserList/>
      </Suspense>
    </div>
  );
}


/*  const [searchTerm, setSearchTerm] = useState('');
 const filteredUsers = users.filter(user =>
     user.name.toLowerCase().includes(searchTerm.toLowerCase())
   );
  
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
     setSearchTerm(event.target.value);
   }; 
  */




