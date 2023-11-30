'use client'

import { FormEvent, useState } from "react";
import Searchbar from "../components/Searchbar/Searchbar";
import UserProfile from "../components/UserProfile/UserProfile";
import './dashboard.css'


const Dashboard = () => {

    return (
        <div className="flex flex-col items-center">
             <Searchbar />

            <UserProfile />
            <UserProfile />
            <UserProfile />
         </div>
       
    );
};

export default Dashboard;