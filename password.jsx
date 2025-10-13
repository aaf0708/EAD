import React, { useState } from "react";

const PasswordStrengthChecker = () => {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState("");

  const checkStrength = (pwd) => {
    let strengthScore = 0;

    if (pwd.length >= 8) strengthScore++;
    if (/[A-Z]/.test(pwd)) strengthScore++;
    if (/[0-9]/.test(pwd)) strengthScore++;
    if (/[^A-Za-z0-9]/.test(pwd)) strengthScore++;

    if (strengthScore <= 1) {
      setStrength("Weak");
    } else if (strengthScore === 2 || strengthScore === 3) {
      setStrength("Medium");
    } else if (strengthScore === 4) {
      setStrength("Strong");
    } else {
      setStrength("");
    }
  };

  const handleChange = (e) => {
    const pwd = e.target.value;
    setPassword(pwd);
    checkStrength(pwd);
  };

  return (
    <div>
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={handleChange}
      />
      <p>Password strength: <strong>{strength}</strong></p>
    </div>
  );
};

export default PasswordStrengthChecker;
