import React, { useEffect, useState } from 'react';
import {
  Card,
  CardBody,
  Avatar,
  Button,
} from '@nextui-org/react';
import './UserProfile.css';

interface Impairment {
  description: string,
  skillLevel: number,
}

interface User {
  goals?: string[],
  impairment?: Impairment[],
  name: string,
  age: number,
}

const UserProfile = (user: User) => {
  return (
    <Card className="card">
      <CardBody className="userCard">
        <div className="userComponent">
          <Avatar radius="full" size="lg" className="userPicture" />
          <div className="userInfo">
            <p id="name">{user.name}</p>
            <p>{user.age} years old</p>
          </div>
        </div>
        <Button className="viewDetails" radius="md" variant="light">
          View Details
        </Button>
      </CardBody>
    </Card>
  );
}

export default UserProfile;


