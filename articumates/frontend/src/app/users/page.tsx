'use client'

import UserList from '../components/UserList/UserList';
import { ChangeEvent, Suspense, useState } from 'react';
import './users.css';
import { Spinner } from '@nextui-org/react';
import Searchbar from '../components/Searchbar/Searchbar';


export default function Users() {


  return (
      <Suspense fallback={<div><Spinner color="default"/></div>}>
        <UserList/>
      </Suspense>
  );
}




