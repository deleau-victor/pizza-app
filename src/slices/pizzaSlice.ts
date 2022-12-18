import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { pizzaType } from "../store/pizzas/types"
import axios from "axios"

export const getPizzas = createAsyncThunk("", async () => {
	const { data } = await axios.get("http://10.0.2.2:4000")
	return data
})

interface pizzaState {
	data: pizzaType[]
	loading: string
	error: null | string
}

const initialState: pizzaState = {
	data: [],
	loading: "idle",
	error: null,
}

const pizzaSlice = createSlice({
	name: "pizza",
	initialState: initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getPizzas.pending, (state, action) => {
			if (state.loading === "idle") {
				state.loading = "pending"
			}
		})
		builder.addCase(getPizzas.fulfilled, (state, action) => {
			if (state.loading === "pending") {
				state.data = action.payload
				state.loading = "idle"
			}
		})
		builder.addCase(getPizzas.rejected, (state, action) => {
			if (state.loading === "pending") {
				state.loading = "idle"
				state.error = "Error occured"
			}
		})
	},
})

const { reducer } = pizzaSlice
const pizzaReducer = reducer
export default pizzaReducer
