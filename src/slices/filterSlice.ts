import { createSlice } from "@reduxjs/toolkit"

const initialState: string[] = []

const filterSlice = createSlice({
	name: "filter",
	initialState: initialState,
	reducers: {
		addFilter: (state, action) => {
			return (state = [...state, action.payload])
		},
		removeFilter: (state, action) => {
			const indexToRemove = state.findIndex(
				(element) => element === action.payload,
			)
			state.splice(+indexToRemove, 1)
			return state
		},
	},
})

const { actions, reducer } = filterSlice

export const { addFilter, removeFilter } = actions

export default reducer
