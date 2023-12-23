import React, { ChangeEvent, FC } from "react";
import Input from "../../common/base/Input";
import Button from "../../common/base/Button";
import InstaLogo from "../../icons/instaLogo";
import "./style.css";
import { useLogic } from "./logic.hook";

const AuthPage: FC = () => {
  const { error, handleFormChange, handleLogin } = useLogic();

  return (
    <div className="flex center page">
      <div className="hero-section">
        <img src="assets/landing-hero.png" alt="hero" />
      </div>
      <div className="flex column hero-section">
        <div className="flex column center secondary-border full-width auth-box">
          <div className="auth-logo">
            <InstaLogo />
          </div>

          <Input
            placeholder="Username"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              handleFormChange("email", e.target.value);
            }}
          />
          <Input
            placeholder="Passoword"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              handleFormChange("password", e.target.value);
            }}
            type="password"
          />

          <Button
            text="Login"
            onClicked={() => {
              handleLogin();
            }}
          />

          {error !== "" ? <p>{error}</p> : null}
        </div>
        <div className="flex center full-width secondary-border switcher-box">
          <p>Don't have an account?</p>
          <p className="blue-text">Sign up</p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
