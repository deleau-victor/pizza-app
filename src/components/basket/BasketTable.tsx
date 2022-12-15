import { View, Text, Column } from 'native-base'
import React from 'react'
import { useSelector } from 'react-redux'

const BasketTable = () => {
	const basketData = useSelector((state: any) => state.basket)

	return (
		<Column>
			{basketData &&
				basketData.pizzas &&
				basketData.pizzas.map((pizza: any, index: any) => (
					<Text key={index}>
						{pizza.name} {pizza.count}
					</Text>
				))}
		</Column>
	)
}

export default BasketTable
