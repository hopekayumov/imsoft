import { createSlice } from "@reduxjs/toolkit";

const clientsSlice = createSlice({
  name: "models",
  initialState: {
    models: [
      {
        id: "1",
        name: "Iphone 13 pro max",
        photo:
          "https://assets.swappie.com/swappie-product-iphone-12-pro-pacific-blue-back.png",
      },
      {
        id: "2",
        name: "Iphone 11 pro",
        photo:
          "https://my-apple-store.ru/wa-data/public/shop/products/38/17/11738/images/17257/17257.750x0.jpg",
      },
      {
        id: "3",
        name: "Iphone 11",
        photo:
          "https://www.theioutlet.com/wp-content/uploads/2019/11/iphone11-yellow-select-2019_GEO_EMEA.png",
      },
      {
        id: "4",
        name: "Iphone 11 pro max",
        photo:
          "https://unblast.com/wp-content/uploads/2019/10/Floating-iPhone-11-Pro-Max-Mockup-2.jpg",
      },
    ],
  },
  reducers: {
    addModel: (state, action) => {
      state.models.push(action.payload);
      console.log(state.models);
    },
    deleteModel: (state, action) => {
      const { id } = action.payload;
      return {
        ...state,
        models: state.models.filter((model) => model.id !== id),
      };
    },
  },
});

export const { addModel, deleteModel } = clientsSlice.actions;
export default clientsSlice.reducer;
