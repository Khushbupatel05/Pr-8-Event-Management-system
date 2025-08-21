import { configureStore } from '@reduxjs/toolkit'
import evenetReducer from '../feature/event/eventSlice'

export const store = configureStore({
    reducer: {
        reducer: evenetReducer,
    }
})
