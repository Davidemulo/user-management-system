import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import type { User } from "../types/user";

interface UserState {
  users: User[];
  loading: boolean;
  initialized: boolean;
}

const initialState: UserState = {
  users: [],
  loading: false,
  initialized: false,
};

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async () => {
    const res = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    return res.data as User[];
  }
);

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    },

    updateUser: (state, action: PayloadAction<User>) => {
      const index = state.users.findIndex(
        (u) => u.id === action.payload.id
      );

      if (index !== -1) {
        state.users[index] = action.payload;
      }
    },

    deleteUser: (state, action: PayloadAction<number>) => {
      state.users = state.users.filter(
        (u) => u.id !== action.payload
      );
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      // IMPORTANT: only set API users once
      if (!state.initialized) {
        state.users = action.payload;
        state.initialized = true;
      }

      state.loading = false;
    });

    builder.addCase(fetchUsers.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const { addUser, updateUser, deleteUser } =
  userSlice.actions;

export default userSlice.reducer;