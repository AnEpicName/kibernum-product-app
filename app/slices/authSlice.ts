import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@app/store";
import { AuthState } from "@app/types";

const initialState: AuthState = {
  token: "",
  error: undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setError: (state, action: PayloadAction<string | undefined>) => {
      state.error = action.payload;
    },
  },
});

export const { setToken, setError } = authSlice.actions;

export const AuthSelector = (state: RootState) => state.auth;

export default authSlice.reducer;
