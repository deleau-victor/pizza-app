import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IBasket } from "../store/basket/types"

const INITIAL_STATE: IBasket = {
	pizzas: [],
	totalCount: 0,
}

const basketSlice = createSlice({
	name: "basket",
	initialState: INITIAL_STATE,
	reducers: {
		addPizza: (state, action: PayloadAction<IBasket["pizzas"][0]>) => {
			if (state.pizzas.some((pizza) => pizza.id === action.payload.id)) {
				let index = state.pizzas.findIndex(
					(pizza) => pizza.id === action.payload.id,
				)
				state.pizzas[index].count += action.payload.count
			} else {
				state.pizzas = [...state.pizzas, action.payload]
			}
			state.totalCount += action.payload.count
			return state
		},
		removePizza: (state, action: PayloadAction<number>) => {
			let index = state.pizzas.findIndex(
				(pizza) => pizza.id === action.payload,
			)
			if (state.pizzas[index].count === 1) {
				state.pizzas.splice(index, 1)
			} else {
				state.pizzas[index].count -= 1
			}
			state.totalCount -= 1
			return state
		},
	},
})

const { actions, reducer } = basketSlice

export const { addPizza, removePizza } = actions

export default reducer
