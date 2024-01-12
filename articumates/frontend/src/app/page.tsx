'use client'
import React from "react";
import UserProfile from "./components/UserProfile/UserProfile";
import { CreateExercises } from "./components/LLM/CreateExercises";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  const gotoUsers = () => {
  router.push(`/users/`);
}

  return (
    <div>
      <Button onClick={gotoUsers}>Go to application</Button>
    </div>
  );
}
