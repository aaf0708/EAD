import React from "react";
import PasswordStrengthChecker from "./password";

const App = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Password Strength Checker</h1>
      <PasswordStrengthChecker />
    </div>
  );
};

export default App;
