import { createSlice } from "@reduxjs/toolkit";

const clientsSlice = createSlice({
  name: "clients",
  initialState: {
    clients: [
      {
        id: "1",
        name: "Umid",
        dateOfbirth: "26.12.2022",
        phoneNumber: "+998939781332",
        email: "umidjonkayumov2000@gmail.com",
        address: "Fergana",
        socialMedia: "Facebook",
      },
      {
        id: "2",
        name: "Farruh",
        dateOfbirth: "26.12.2022",
        phoneNumber: "+998905624743",
        email: "Farruh@gmail.com",
        address: "Andijon",
        socialMedia: "Instagram",
      },
      {
        id: "3",
        name: "Ozod",
        dateOfbirth: "26.12.2022",
        phoneNumber: "+998993051332",
        email: "OzodBekGM@gmail.com",
        address: "Toshkent",
        socialMedia: "Facebook",
      },
      {
        id: "4",
        name: "Bobur",
        dateOfbirth: "26.12.2022",
        phoneNumber: "+998901234567",
        email: "Boburchek@gmail.com",
        address: "Andijon",
        socialMedia: "Telegram",
      },
      {
        id: "5",
        name: "Doniyor",
        dateOfbirth: "26.12.2022",
        phoneNumber: "+998939781332",
        email: "Donik@gmail.com",
        address: "Fergana",
        socialMedia: "Facebook",
      },
      {
        id: "6",
        name: "Kamran",
        dateOfbirth: "26.12.2022",
        phoneNumber: "+998939781332",
        email: "Donik@gmail.com",
        address: "Fergana",
        socialMedia: "Telegram",
      },
      {
        id: "7",
        name: "Begzod",
        dateOfbirth: "26.12.2022",
        phoneNumber: "+998939781332",
        email: "Donik@gmail.com",
        address: "Toshkent",
        socialMedia: "Instagram",
      },
      {
        id: "8",
        name: "Eldor",
        dateOfbirth: "26.12.2022",
        phoneNumber: "+998939781332",
        email: "Donik@gmail.com",
        address: "Fergana",
        socialMedia: "Instagram",
      },
      {
        id: "9",
        name: "Tanya",
        dateOfbirth: "26.12.2022",
        phoneNumber: "+998939781332",
        email: "Donik@gmail.com",
        address: "Andijon",
        socialMedia: "Facebook",
      },
      {
        id: "10",
        name: "Umid",
        dateOfbirth: "26.12.2022",
        phoneNumber: "+998939781332",
        email: "Donik@gmail.com",
        address: "Namangan",
        socialMedia: "Telegram",
      },
      {
        id: "11",
        name: "MuhammadAli",
        dateOfbirth: "26.12.2022",
        phoneNumber: "+998939781332",
        email: "Donik@gmail.com",
        address: "Namangan",
        socialMedia: "Facebook",
      },
      {
        id: "12",
        name: "Diyor",
        dateOfbirth: "26.12.2022",
        phoneNumber: "+998939781332",
        email: "Donik@gmail.com",
        address: "Toshkent",
        socialMedia: "Facebook",
      },
      {
        id: "13",
        name: "Elbek",
        dateOfbirth: "26.12.2022",
        phoneNumber: "+998939781332",
        email: "Donik@gmail.com",
        address: "Samarqand",
        socialMedia: "Facebook",
      },
      {
        id: "14",
        name: "Ali",
        dateOfbirth: "26.12.2022",
        phoneNumber: "+998939781332",
        email: "Donik@gmail.com",
        address: "Samarqand",
        socialMedia: "Facebook",
      },
      {
        id: "15",
        name: "Nodir",
        dateOfbirth: "26.12.2022",
        phoneNumber: "+998939781332",
        email: "Donik@gmail.com",
        address: "Fergana",
        socialMedia: "Facebook",
      },
      {
        id: "16",
        name: "Ilhom",
        dateOfbirth: "26.12.2022",
        phoneNumber: "+998939781332",
        email: "Donik@gmail.com",
        address: "Andijon",
        socialMedia: "Telegram",
      },
      {
        id: "17",
        name: "Iqboljon",
        dateOfbirth: "26.12.2022",
        phoneNumber: "+998939781332",
        email: "Donik@gmail.com",
        address: "Toshkent",
        socialMedia: "Facebook",
      },
      {
        id: "18",
        name: "Bekzod",
        dateOfbirth: "26.12.2022",
        phoneNumber: "+998939781332",
        email: "Donik@gmail.com",
        address: "Samarqand",
        socialMedia: "Telegram",
      },
      {
        id: "19",
        name: "Nurmatjon",
        dateOfbirth: "26.12.2022",
        phoneNumber: "+998939781332",
        email: "Donik@gmail.com",
        address: "Toshkent",
        socialMedia: "Instagram",
      },
      {
        id: "20",
        name: "Aziza",
        dateOfbirth: "26.12.2022",
        phoneNumber: "+998939781332",
        email: "Donik@gmail.com",
        address: "Fergana",
        socialMedia: "Telegram",
      },
      {
        id: "21",
        name: "Malika",
        dateOfbirth: "26.12.2022",
        phoneNumber: "+998939781332",
        email: "Donik@gmail.com",
        address: "Andijon",
        socialMedia: "Instagram",
      },
      {
        id: "22",
        name: "Muslima",
        dateOfbirth: "26.12.2022",
        phoneNumber: "+998939781332",
        email: "Donik@gmail.com",
        address: "Toshkent",
        socialMedia: "Telegram",
      },
      {
        id: "23",
        name: "Joni",
        dateOfbirth: "26.12.2022",
        phoneNumber: "+998939781332",
        email: "Donik@gmail.com",
        address: "Namangan",
        socialMedia: "Telegram",
      },
      {
        id: "24",
        name: "Islom",
        dateOfbirth: "26.12.2022",
        phoneNumber: "+998939781332",
        email: "Donik@gmail.com",
        address: "Fergana",
        socialMedia: "Facebook",
      },
    ],
  },
  reducers: {
    addClient: (state, action) => {
      const { name, dateOfbirth, phoneNumber, email, address, socialMedia } =
        action.payload;
      const newClient = {
        id: state.clients.length + 1,
        name,
        dateOfbirth,
        phoneNumber,
        email,
        address,
        socialMedia,
      };
      return {
        ...state,
        clients: [...state.clients, newClient],
      };
    },
    deleteClient: (state, action) => {
      const { id } = action.payload;
      return {
        ...state,
        clients: state.clients.filter((client) => client.id !== id),
      };
    },
  },
});

export const { addClient, deleteClient } = clientsSlice.actions;
export default clientsSlice.reducer;
