import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { Text, Column, ScrollView, Row, Image, Pressable } from "native-base"
import React from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/typedReduxHooks"
import { addPizza, removePizza } from "../../slices/basketSlice"

const BasketTable = () => {
	const basketData = useAppSelector((state) => state.basket)
	const dispatch = useAppDispatch()

	// Ajout d'une pizza
	const handleAddPizza = (
		pizzaName: string,
		price: number,
		picture_url: string,
		id_pizza: number,
	) => {
		dispatch(
			addPizza({
				name: pizzaName,
				picture: picture_url,
				price: price,
				id: id_pizza,
				count: 1,
			}),
		)
	}

	// retrait d'une pizza
	const handleRemovePizza = (id: number) => {
		dispatch(removePizza(id))
	}

	return (
		<ScrollView w='full'>
			<Column space={2}>
				{basketData.pizzas.map(
					({ count, id, name, picture, price }, index: any) => (
						<Row
							justifyContent='space-between'
							alignItems='center'
							key={id}>
							<Image
								source={{ uri: picture }}
								alt={`Pizza ${name}`}
								size='sm'
								resizeMode='contain'
							/>
							<Text fontSize='md'>{name}</Text>
							<Row alignItems='center' space={1}>
								<Pressable
									bg='orange.500'
									p={1}
									rounded='full'
									onPress={() => handleRemovePizza(id)}>
									<FontAwesomeIcon
										icon={faMinus}
										size={18}
										color='white'
									/>
								</Pressable>
								<Text>{count}</Text>
								<Pressable
									bg='orange.500'
									p={1}
									rounded='full'
									onPress={() =>
										handleAddPizza(name, Number(price), picture, id)
									}>
									<FontAwesomeIcon
										icon={faPlus}
										size={18}
										color='white'
									/>
								</Pressable>
							</Row>
						</Row>
					),
				)}
			</Column>
		</ScrollView>
	)
}

export default BasketTable
