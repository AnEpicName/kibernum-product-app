import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { User } from "@/types/user";

const initialState: User = {
  id: 1,
  username: "John Doe",
  email: "johndoe@example.com",
  password: "password",
  name: {
    firstname: "John",
    lastname: "Doe",
  },
  address: {
    street: "123 Main St",
    city: "Anytown",
    number: 1234,
    zipcode: "12345",
    geolocation: {
      lat: 40.7128,
      long: -74.0060,
    },
  },
  phone: "555-123-4567",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.address = action.payload.address;
      state.phone = action.payload.phone;
      state.username = action.payload.username;
      state.password = action.payload.password;
    },
  },
});

export const { setUser } = userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;