import { sendRequest } from "../../helpers/request";

export const postsDataSource = {
  create: async (data: any) => {
    const created = await sendRequest({
      route: "/create_post",
      method: "POST",
      body: data,
    });

    return created;
  },
};
