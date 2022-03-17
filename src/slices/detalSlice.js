import { createSlice } from "@reduxjs/toolkit";

const detalsSlice = createSlice({
  name: "detals",
  initialState: {
    detals: [
      {
        id: "1",
        name: "Display product",
        barcode: "123456789",
        photo:
          "https://w7.pngwing.com/pngs/544/438/png-transparent-silver-imac-macintosh-macbook-pro-apple-thunderbolt-display-computer-monitor-monitor-television-electronics-computer.png",
      },
      {
        id: "2",
        name: "Display product",
        barcode: "IMSOFT",
        photo:
          "https://static.techspot.com/images/products/2020/graphics-cards/org/2021-06-09-product-3.jpg",
      },
    ],
  },
  reducers: {
    addDetal: (state, action) => {
      state.detals.push(action.payload);
    },
    deleteDetal: (state, action) => {
      const { id } = action.payload;
      return {
        ...state,
        detals: state.detals.filter((detal) => detal.id !== id),
      };
    },
  },
});

export const { addDetal, deleteDetal } = detalsSlice.actions;
export default detalsSlice.reducer;
