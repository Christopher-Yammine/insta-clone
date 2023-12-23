import { createSlice } from "@reduxjs/toolkit";
import { Post } from "core/types/Post";

type PostsSliceState = {
  posts: Post[];
  curerntSelected?: Post;
};

const initialState: PostsSliceState = {
  posts: [],
};

export const PostsSliceName = "Posts";

export const postsSlice = createSlice({
  initialState,
  name: PostsSliceName,
  reducers: {
    loadPosts: (
      state,
      { payload, type }: { payload: Post[]; type: string }
    ) => {
      return {
        ...state,
        posts: payload,
      };
    },
    selectPost: (state, { payload, type }: { payload: Post; type: string }) => {
      return {
        ...state,
        curerntSelected: payload,
      };
    },
    cleanPosts: () => {
      return { ...initialState };
    },
  },
});
