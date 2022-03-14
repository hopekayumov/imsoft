import { configureStore } from "@reduxjs/toolkit";
import clientReducer from "../slices/clientsSlice";

export default configureStore({
  reducer: {
    clients: clientReducer,
  },
});
