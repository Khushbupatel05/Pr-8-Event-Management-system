import { createSlice, nanoid } from "@reduxjs/toolkit";
const value = JSON.parse(localStorage.getItem("list")) || []
console.log(value);

const eventsSlice = createSlice({
  name: "events",
  initialState: {
    list:value 
  },
  reducers: {
    addEvent: (state, action) => {
      state.list.push({ id: nanoid(), ...action.payload })
      localStorage.setItem("list", JSON.stringify(state.list));
    },
    deleteEvent: (state, action) => {
      const removeEvnt = state.list.filter((evnt) => {
        return evnt.id != action.payload
      })
      state.list = removeEvnt
      localStorage.setItem("list", JSON.stringify(state.list));
    }
  }
});

export const { addEvent, deleteEvent } = eventsSlice.actions;
export default eventsSlice.reducer;
