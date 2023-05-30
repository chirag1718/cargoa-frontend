import { configureStore } from "@reduxjs/toolkit";
import authUserReducer from "../reducers/userReducer";

const store = configureStore({
  reducer: {
    auth: authUserReducer,
  },
});

export default store;
