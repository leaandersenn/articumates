// eslint-disable-next-line @typescript-eslint/no-redeclare
import React, { useState } from "react";

import NavBar from "./components/NavBar";
import LoginComponent from "./components/LoginComponent";
import PersonasCardContainer from "./components/PersonasCardContainer";
import "./styling/App.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  const handleLogin = (enteredUserName: string) => {
    setLoggedIn(true);
    setUsername(enteredUserName);
  };

  return (
    <div className="App">
      {!loggedIn && <LoginComponent onLogin={handleLogin} />}
      {loggedIn && <NavBar username={username} />}
      <PersonasCardContainer></PersonasCardContainer>
    </div>
  );
}

export default App;
