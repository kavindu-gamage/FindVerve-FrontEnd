import { createAsyncThunk } from "@reduxjs/toolkit";
import { logIn } from "../../services/authServices";

export const userLogin = createAsyncThunk(
    "auth/login",
    async (userCredentials, { rejectWithValue }) =>
      logIn(userCredentials).catch((error) => rejectWithValue(error))
  );
