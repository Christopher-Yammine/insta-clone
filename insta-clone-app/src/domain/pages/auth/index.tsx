import React, { ChangeEvent, FC } from "react";
import Input from "../../common/base/Input";
import Button from "../../common/base/Button";
import InstaLogo from "../../icons/instaLogo";
import "./style.css";

const AuthPage: FC = () => {
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
              console.log(e.target.value);
            }}
          />
          <Input
            placeholder="Passoword"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              console.log(e.target.value);
            }}
            type="password"
          />

          <Button
            text="Login"
            onClicked={() => {
              console.log("Login");
            }}
          />
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
