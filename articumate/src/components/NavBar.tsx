import React, { useState } from "react";
import "../styling/NavBar.css";

interface NavBarProps {
  username: string;
}

export default function NavBar(props: NavBarProps) {
  const [username, setUsername] = useState(props.username);

  return (
    <div className="navbar">
      <h1>Articumate</h1>
    </div>
  );
}
