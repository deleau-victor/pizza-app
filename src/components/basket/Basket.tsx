import { View, Text, Column } from 'native-base'
import React from 'react'
import { useSelector } from 'react-redux'
import BasketTable from './BasketTable'

const Basket = () => {
	const basketData = useSelector((state: any) => state.basket)

	return (
		<View>
			<Text>count: {basketData.count}</Text>
			<BasketTable />
		</View>
	)
}

export default Basket
