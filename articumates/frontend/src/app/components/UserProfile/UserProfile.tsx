import React from 'react';
import { useRouter } from 'next/navigation';
import { User } from '@/app/utils/TypeDef';
import { Card, CardBody, Avatar, Button } from '@nextui-org/react';
import './UserProfile.css';

const UserProfile = ({id, name, age}: User) => {
  const router = useRouter();

  const viewDetails = () => {
    if (router) {
      router.push(`/users/${id}`);
    } else {
      console.log("Error with router");
    }
  };

  return (
    <Card className="card">
      <CardBody className="userCard">
        <div className="userComponent">
          <Avatar radius="full" size="lg" className="userPicture" />
          <div className="userInfo">
            <p id="name">{name}</p>
            <p>{age} years old</p>
          </div>
        </div>
        <Button className="viewDetails" radius="md" variant="light" onClick={viewDetails}>
          View Profile
        </Button>
      </CardBody>
    </Card>
  );
};

export default UserProfile;
