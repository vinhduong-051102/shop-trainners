import { createSlice } from "@reduxjs/toolkit";

const registerPageSlice = createSlice({
  name: 'registerPage',
  initialState: [{
    email: "abc@gmail.com",
    userName: "admin",
    password: "1"
  }],
  reducers: {
    register: (state, action) => {
      state.push(action.payload);
    }
  }
})

export default registerPageSlice.reducer
export const { register } = registerPageSlice.actions
export const selectLoginInfo = (state) => state.registerPageReducer

