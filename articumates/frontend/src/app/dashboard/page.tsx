'use client'

import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import Searchbar from '../components/Searchbar/Searchbar';
import UserProfile from '../components/UserProfile/UserProfile';
import './dashboard.css';
import { db } from '../../firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';

interface Impairment {
  description: string;
  skillLevel: number;
}

interface User {
  goals?: string[];
  impairments?: Impairment[];
  name: string;
  age: number;
}


const Dashboard = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    
    useEffect(() => {
      const fetchUsers = async () => {
        const usersRef = collection(db, 'client');
        const usersSnapshot = await getDocs(usersRef);
        const usersList = usersSnapshot.docs.map((doc) => doc.data() as User);
        setUsers(usersList);
        console.log('Fetched users:', JSON.stringify(usersList, null, 2));
      };
      
      fetchUsers();
    }, []);
   
    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    
      const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
      };
    
  
    return (
      <div className="flex flex-col items-center">
        <Searchbar value={searchTerm} onChange={handleInputChange} />
        {filteredUsers.map((user, index) => (
            <UserProfile key={index} {...user} />
        ))}
      </div>
  );
};

export default Dashboard;

