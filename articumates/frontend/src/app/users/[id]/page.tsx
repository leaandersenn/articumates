'use client'

import Goals from "@/app/components/Goals/Goals";
import { Button, Card, CardBody, Spinner } from "@nextui-org/react";
import { useParams, useRouter } from 'next/navigation';
import './user.css';
import { Suspense, useEffect } from "react";
import ProfileInfo from "@/app/components/ProfileInfo/ProfileInfo";
import Impairments from "@/app/components/Impairments/Impairments";
import { useDispatch } from "react-redux";
import { updateId } from "@/app/_redux/userProfileSlice";


export default function Users() {

    const dispatch = useDispatch();
    const params = useParams();
    const userID = params.id;
    const router = useRouter();
    console.log(userID + "This is the userID");

    if (!userID) {
        return <div><Spinner color="default"/></div>;
    }

    useEffect(() => {
      if (userID) {
          dispatch(updateId(Number(userID)));
      }
  }, [userID, dispatch]);

    const navigateToSession = () => {
      router.push(`/session/${userID}`);
    };

    return (
      <Suspense fallback={<div>Loading...</div>}>
        <div className="flex flex-col items-center">
          <Button className="session-button" onClick={navigateToSession}>Create a new session</Button>
          <Card className="profileCardStart">
            <CardBody>
              <ProfileInfo userID={Number(userID)} />
              <Goals userID={Number(userID)} />
              <Impairments userID={Number(userID)} />
              <Button className="profile-button">Edit Profile</Button>
            </CardBody>
          </Card>
        </div>
      </Suspense>
    );
  }



