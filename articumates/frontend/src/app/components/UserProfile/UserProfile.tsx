import React from 'react';
import {
  Card,
  CardBody,
  Avatar,
  Button,
} from '@nextui-org/react';
import './UserProfile.css';

export default function UserProfile() {
  return (
    <Card className="card">
      <CardBody className="userCard">
        <div className="userComponent">
          <Avatar radius="full" size="lg" className="userPicture" />
          <div className="userInfo">
            <p id="name">Amundsen Jonas</p>
            <p>8 years old</p>
          </div>
        </div>
        <Button className="viewDetails" radius="md" variant="light">
          View Details
        </Button>
      </CardBody>
    </Card>
  );
}


