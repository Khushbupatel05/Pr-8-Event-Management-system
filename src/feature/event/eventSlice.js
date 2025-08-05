import { createSlice } from "@reduxjs/toolkit";
import { list } from "postcss";

const eventSlice = createSlice({
    name:"event",
    initialState:{
        list: [],
    },
    reducers: {

    }
})

export default eventSlice.reducer;