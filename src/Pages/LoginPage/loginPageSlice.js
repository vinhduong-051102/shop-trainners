import { createSlice } from "@reduxjs/toolkit";

const loginPageSlice = createSlice({
  name: "loginPage",
  initialState: { isLogin: false, email: "", password: "" },
  reducers: {
    login: (state, action) => {
      Object.assign(state, { isLogin: true, ...action.payload})
    },
    logout: (state) => {
      state.isLogin = false;
    },
  },
});

export default loginPageSlice.reducer;
export const { login, logout } = loginPageSlice.actions;
export const selectLoginInfo = (state) => state.loginPageReducer;
