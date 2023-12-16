import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../common/base/Input";
import Button from "../../common/base/Button";
import InstaLogo from "../../icons/instaLogo";
import { authDataSource } from "../../../core/dataSource/remoteDataSource/auth";
import { local } from "../../../core/helpers/localstorage";
import "./style.css";

type LoginCredentials = {
  email: string;
  password: string;
};

const AuthPage: FC = () => {
  const [credentials, setCredentials] = useState<LoginCredentials>({
    email: "",
    password: "",
  });

  const [error, setError] = useState<string>("");

  const navigateTo = useNavigate();

  const handleFormChange = (key: string, value: string) => {
    setCredentials((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleLogin = async () => {
    try {
      const response = await authDataSource.login(credentials);

      console.log(response);

      local("token", response.authorisation.token);
      local("type", response.authorisation.type);

      navigateTo("/feed");
    } catch (error: any) {
      setError(error!.message);
    }
  };

  useEffect(() => {
    console.log(credentials);
  }, [credentials]);

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
