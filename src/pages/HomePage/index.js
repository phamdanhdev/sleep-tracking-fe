import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import Home from "./components/Home";
import Landing from "./components/Landing";
export default function AppHomePage() {
  return (
    <div className="_homePage">
      <div className="_navbar">
        <div className="_logo">
          <h2>Sleep Tracker</h2>
        </div>
        <div className="_account">
          <div className="_username">Username</div>
          <div className="_accountBtn">
            <Link to="/auth">Login</Link>
          </div>
        </div>
      </div>
      <div className="_container">
        <Home />
        {/* <Landing /> */}
      </div>
      <div className="_footer">
        <p>Copyright ©2021 phamdanhdev. All Rights Reserved</p>
      </div>
    </div>
  );
}
