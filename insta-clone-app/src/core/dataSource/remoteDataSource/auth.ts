import { sendRequest } from "../../helpers/request";

export const authDataSource = {
  login: async (data: {}) => {
    const response = await sendRequest({
      body: data,
      route: "/login",
      method: "POST",
    });

    return response;
  },
  register: async (data: {}) => {
    const response = await sendRequest({
      body: data,
      route: "/register",
      method: "POST",
    });

    return response;
  },
};
