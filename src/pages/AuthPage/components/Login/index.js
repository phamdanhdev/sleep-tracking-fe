import React from "react";
import "./style.scss";
import { Input } from "antd";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  UnlockOutlined,
  UserOutlined,
} from "@ant-design/icons";

export default function Login({ handleChangeFrom }) {
  return (
    <div className="_authForm">
      <h3>Login</h3>
      <div className="_input">
        <Input size="large" placeholder="Username" prefix={<UserOutlined />} />
      </div>
      <div className="_input">
        <Input.Password
          size="large"
          placeholder="Password"
          prefix={<UnlockOutlined />}
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
      </div>
      <div className="_action">
        <button id="_actionBtn">Login</button>
      </div>
      <div className="_changeForm">
        <p>
          Don't have an account?{" "}
          <span id="_changeFormBtn" onClick={() => handleChangeFrom(true)}>
            Sign up now!
          </span>
        </p>
      </div>
      <div className="_connectSocial">
        <div className="_connectTitle">
          <div className="_line"></div>
          <div>or connect with</div>
          <div className="_line"></div>
        </div>
        <div className="_connectIcon">
          <div className="_connectItem">
            <i className="fab fa-facebook-f"></i>
          </div>
          <div className="_connectItem">
            <i className="fab fa-google"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
