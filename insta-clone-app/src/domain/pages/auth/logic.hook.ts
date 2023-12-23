import { loggedIn } from "../../../core/dataSource/localDataSource/user";
import { authDataSource } from "../../../core/dataSource/remoteDataSource/auth";
import { local } from "../../../core/helpers/localstorage";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

type LoginCredentials = {
  email: string;
  password: string;
};

export const useLogic = () => {
  const [credentials, setCredentials] = useState<LoginCredentials>({
    email: "",
    password: "",
  });

  const [error, setError] = useState<string>("");

  const navigateTo = useNavigate();
  const dispatch = useDispatch();

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

      const { user, authorisation } = response;

      dispatch(
        loggedIn({
          email: user.email,
          username: user.username,
          profilePicture: user.profile_picture,
          token: authorisation.token,
        })
      );

      navigateTo("/feed");
    } catch (error: any) {
      setError(error!.message);
    }
  };

  return { error, handleLogin, handleFormChange };
};
