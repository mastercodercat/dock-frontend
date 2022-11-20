import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { RateState, ReviewBodyProps } from "./types";
import api from "../../../services/api";

const initialState: RateState = {
  users: [],
  loading: false,
  reviewing: false,
};

export const fetchUsers = createAsyncThunk("rate/fetchUsers", async () => {
  const response = await api.fetchUsers();

  return response.data;
});

export const reviewUser = createAsyncThunk(
  "rate/reviewUser",
  async ({ rating, user }: ReviewBodyProps) => {
    const response = await api.reviewUser(rating, user);

    return response.data;
  }
);

export const rateSlice = createSlice({
  name: "rate",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.loading = false;
      })
      .addCase(reviewUser.pending, (state) => {
        state.reviewing = true;
      })
      .addCase(reviewUser.fulfilled, (state, action) => {
        state.reviewing = false;
        state.users = state.users.map((user) => {
          if (action.payload.userId === user.id) {
            return {
              ...user,
              ratings: [...(user.ratings || []), action.payload],
            };
          }
          return user;
        });
      })
      .addCase(reviewUser.rejected, (state) => {
        state.reviewing = false;
      });
  },
});

export default rateSlice.reducer;
