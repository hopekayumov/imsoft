import { createSlice } from "@reduxjs/toolkit";

const clientsSlice = createSlice({
  name: "models",
  initialState: {
    models: [
      {
        id: "1",
        name: "Iphone 13 pro max",
        photo:
          "https://www.apple.com/v/iphone-11/c/images/1a/f9/1af9f9f9-f9f9-f9f9-f9f9-f9f9f9f9f9f9_large.jpg",
      },
      {
        id: "2",
        name: "Iphone 11 pro",
        photo:
          "https://www.apple.com/v/iphone-11/c/images/1a/f9/1af9f9f9-f9f9-f9f9-f9f9-f9f9f9f9f9f9_large.jpg",
      },
    ],
  },
  reducers: {
    addModel: (state, action) => {
      state.models.push(action.payload);
    },
    deleteModel: (state, action) => {
      state.models = state.models.filter(
        (model) => model.id !== action.payload
      );
    },
  },
});

export const { addModel, deleteModel } = clientsSlice.actions;
export default clientsSlice.reducer;
