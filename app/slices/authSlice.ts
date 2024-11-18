import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@app/store";
import { AuthState } from "@app/types";

const initialState: AuthState = {
  isLoggedIn: false,
  error: undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setIsLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
    setError: (state, action: PayloadAction<string | undefined>) => {
      state.error = action.payload;
    },
  },
});

export const { setIsLoggedIn, setError } = authSlice.actions;

export const AuthSelector = (state: RootState) => state.auth;

export default authSlice.reducer;
