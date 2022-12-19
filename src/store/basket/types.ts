export interface IBasket {
	pizzas: {
		name: string
		picture: string
		price: number
		id: number
		count: number
	}[]
	totalCount: number
	totalPrice: number
}
