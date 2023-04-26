import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL =
  'https://64479c0150c25337442977cd.mockapi.io/tweets-user';

export const fetchUsers = createAsyncThunk(
  'users/fetchAll',
  async (_, thunkAPI) => {
    try {
      const responce = await axios.get();
      return responce.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const fetchFollow = createAsyncThunk(
  'users/fetchFollow',
  async (user, thunkAPI) => {
    try {
      const response = await axios.put(`/${user.id}`, {
        follow: !user.follow,
        followers: user.follow
          ? Number(user.followers) - 1
          : Number(user.followers) + 1,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
