import React, { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import "./style.scss";

export default function AppAuthPage() {
  const [registerForm, setRegisterForm] = useState(false);

  const handleChangeFrom = (e) => {
    setRegisterForm(e);
  };

  return (
    <div className="_authPage">
      <div className="_container">
        <div className="_form">
          {registerForm ? (
            <Register handleChangeFrom={handleChangeFrom} />
          ) : (
            <Login handleChangeFrom={handleChangeFrom} />
          )}
        </div>
        <div className="_intro">
          <h2>Welcome!</h2>
          <h3>Sleep Sensing & Tracking</h3>
          <h4>Know your</h4>
          <h4>nights, for your</h4>
          <h4>better life!</h4>
        </div>
      </div>
    </div>
  );
}
