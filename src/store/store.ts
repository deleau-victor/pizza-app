import { configureStore } from "@reduxjs/toolkit"
import basketReducer from "../slices/basketSlice"
import filterReducer from "../slices/filterSlice"
import pizzaReducer from "../slices/pizzaSlice"

export const store = configureStore({
	reducer: {
		basket: basketReducer,
		filter: filterReducer,
		pizza: pizzaReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
