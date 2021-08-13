import React from "react";
import "./style.scss";
import { Input } from "antd";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  UnlockOutlined,
  UserOutlined,
} from "@ant-design/icons";

export default function Register({ handleChangeFrom }) {
  return (
    <div className="_authForm">
      <h3>Register</h3>
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
      <div className="_input">
        <Input.Password
          size="large"
          placeholder="Confirm Password"
          prefix={<UnlockOutlined />}
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
      </div>
      <div className="_action">
        <button id="_actionBtn">Register</button>
      </div>
      <div className="_changeForm">
        <p>
          Have an account?{" "}
          <span id="_changeFormBtn" onClick={() => handleChangeFrom(false)}>
            Login
          </span>
        </p>
      </div>
    </div>
  );
}
