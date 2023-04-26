import { createSlice } from '@reduxjs/toolkit';
import { fetchFollow, fetchUsers } from './services';

const followSlice = createSlice({
  name: 'following',
  initialState: {
    users: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchFollow.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchFollow.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const following = state.users.find(e => e.id === action.payload.id);
        following.follow = action.payload.follow;
        following.followers = action.payload.followers;
      })
      .addCase(fetchFollow.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
export const followReducer = followSlice.reducer;
export const { follow, unFollow } = followSlice.actions;
