export interface pizzaType {
	id_pizza: number
	name: string
	price: string
	picture_url: string
	Compose: {
		Ingredient: { name: string; Ingredient_Type: { name: string } }
	}[]
}
