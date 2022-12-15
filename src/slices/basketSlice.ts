import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = {
	pizzas: [
		{
			name: '',
			count: 0,
		},
	],
	count: 0,
}

const basketSlice = createSlice({
	name: 'basket',
	initialState: INITIAL_STATE,
	reducers: {
		addPizza: () => {},
		removePizza: () => {},
	},
})

export default basketSlice.reducer
