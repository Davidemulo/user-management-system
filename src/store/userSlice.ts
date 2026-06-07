import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface User {
  id: number;
  name: string;
  email: string;
  address: {
    city: string;
    street: string;
  };
}

interface UserState {
  users: User[];
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};

// FETCH ONLY (API)
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
});

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    // ADD USER
    addUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    },

    // UPDATE USER
    updateUser: (state, action: PayloadAction<User>) => {
      const index = state.users.findIndex(
        (u) => u.id === action.payload.id
      );
      if (index !== -1) {
        state.users[index] = action.payload;
      }
    },

    // DELETE USER
    deleteUser: (state, action: PayloadAction<number>) => {
      state.users = state.users.filter((u) => u.id !== action.payload);
    },
  },

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
        state.error = "Failed to fetch users";
      });
  },
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;