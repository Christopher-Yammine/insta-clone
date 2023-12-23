import { User } from "../../../types/User";
import { createSlice } from "@reduxjs/toolkit";

const initialState: User = {
  token: "",
  email: "",
  username: "",
  profilePicture: "",
};

export const userSliceName = "User";

export const userSlice = createSlice({
  name: userSliceName,
  initialState,
  reducers: {
    loggedIn: (state, { payload, type }: { payload: User; type: string }) => {
      const { email, token, username, profilePicture } = payload;

      return {
        token,
        email,
        username,
        profilePicture,
      };
    },
    cleanData: (state, action) => {
      return { ...initialState };
    },
  },
});

export const { loggedIn, cleanData } = userSlice.actions;

export default userSlice.reducer;
