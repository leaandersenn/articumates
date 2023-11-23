import React, { useState } from "react";
import "../styling/LoginPage.css";

const Login: React.FC<{ onLogin: (username: string) => void }> = ({
  onLogin,
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    onLogin(username); // Trigger the callback to indicate successful login
  };

  if (!isLoggedIn) {
    return (
      <div className="login">
        <h2>Login</h2>
        <form>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </form>
      </div>
    );
  }

  // Render nothing if the user is logged in (or render a different component)
  return null;
};

export default Login;
