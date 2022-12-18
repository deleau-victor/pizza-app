import { pizzaType } from "../store/pizzas/types"

const filterByIngredientType = (
	pizzas: pizzaType[],
	ingredientTypes: string[],
) => {
	if (ingredientTypes.length === 0) {
		return pizzas
	} else {
		return pizzas.filter((pizza) => {
			return pizza.Compose.some(({ Ingredient }) =>
				ingredientTypes.includes(Ingredient.Ingredient_Type.name),
			)
		})
	}
}

export default filterByIngredientType
