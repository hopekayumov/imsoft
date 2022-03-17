import { configureStore } from "@reduxjs/toolkit";
import clientReducer from "../slices/clientsSlice";
import modelReducer from "../slices/modelSlice";
import detalReducer from "..//slices/detalSlice";

export default configureStore({
  reducer: {
    clients: clientReducer,
    models: modelReducer,
    detals: detalReducer,
  },
});
