import { configureStore } from "@reduxjs/toolkit";
import messagesSlice from "./reducer/messagesSlice";

const store = configureStore({
  reducer: {
    message: messagesSlice,
  },
});

export default store;
