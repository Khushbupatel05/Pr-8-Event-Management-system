import { createSlice, nanoid } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const value = JSON.parse(localStorage.getItem("list")) || [];

const eventsSlice = createSlice({
  name: "events",
  initialState: {
        list: JSON.parse(localStorage.getItem("list")) || [],
        isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn")) || false,
    },
  reducers: {
    loginDeta: (state, action) => {
      const { email, password } = action.payload;
      if (email == "admin@gmail.com" && password == "admin@123") {
        state.isLoggedIn = true;
        localStorage.setItem("isLoggedIn", JSON.stringify(true));
        toast.success("Admin Logged In Successfully !");
      } else {
        state.isLoggedIn = false;
        localStorage.setItem("isLoggedIn", JSON.stringify(false));
        toast.error("Invalid Email Id or Password !");
      }
    },
    toLogout: (state) => {
      state.isLoggedIn = false;
      localStorage.setItem("isLoggedIn", JSON.stringify(false));
      toast.success("Admin Logged Out Successfully !");
    },
    addEvent: (state, action) => {
      state.list.push({ id: nanoid(), ...action.payload });
      localStorage.setItem("list", JSON.stringify(state.list));
    },
    deleteEvent: (state, action) => {
      state.list = state.list.filter((evnt) => evnt.id !== action.payload);
      localStorage.setItem("list", JSON.stringify(state.list));
    },
    updateEvent: (state, action) => {
      const { id, updatedData } = action.payload;
      const index = state.list.findIndex((evnt) => evnt.id === id);
      if (index !== -1) {
        state.list[index] = { ...state.list[index], ...updatedData };
        localStorage.setItem("list", JSON.stringify(state.list));
      }
    }
  }
});

export const { addEvent, deleteEvent, updateEvent, loginDeta, toLogout } = eventsSlice.actions;
export default eventsSlice.reducer;
