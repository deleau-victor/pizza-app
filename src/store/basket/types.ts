export interface IBasket {
	pizzas: {
		name: string
		picture: string
		price: string
		id: number
		count: number
	}[]
	totalCount: number
}
