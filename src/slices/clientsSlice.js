import { createSlice } from "@reduxjs/toolkit";

const clientsSlice = createSlice({
  name: "clients",
  initialState: {
    clients: [],
  },
  reducers: {
    addClient: (state, action) => {
      state.clients.push(action.payload);
    },
    deleteClient: (state, action) => {
      state.clients = state.clients.filter(
        (client) => client.id !== action.payload
      );
    },
  },
});

export const { addClient, deleteClient } = clientsSlice.actions;
export default clientsSlice.reducer;
