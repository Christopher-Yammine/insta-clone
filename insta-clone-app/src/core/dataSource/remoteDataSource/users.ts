import { sendRequest } from "../../helpers/request";

export const usersDataSource = {
  getFollowers: async () => {
    const followers = await sendRequest({ route: "get_feed" });

    return followers;
  },
};
