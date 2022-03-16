import { configureStore } from "@reduxjs/toolkit";
import clientReducer from "../slices/clientsSlice";
import modelReducer from "../slices/modelSlice";

export default configureStore({
  reducer: {
    clients: clientReducer,
    models: modelReducer,
  },
});
