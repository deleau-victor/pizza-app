import {
	Box,
	Column,
	Text,
	Image,
	Flex,
	Pressable,
	Center,
	Spinner,
} from "native-base"
import React, { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/typedReduxHooks"
import PizzaModal from "./PizzaModal"
import { getPizzas } from "../../slices/pizzaSlice"
import { pizzaType } from "../../store/pizzas/types"
import filterByIngredientType from "../../utils/filterByIngredientType"
import { addPizza } from "../../slices/basketSlice"

const pizzaCard = () => {
	const dispatch = useAppDispatch()
	const [isModalOpen, setIsModalOpen] = useState<number | null>(null)
	const filterState = useAppSelector((state) => state.filter)
	const { data, loading, error } = useAppSelector((state) => state.pizza)
	const [pizzas, setPizzas] = useState<pizzaType[]>(data)

	useEffect(() => {
		dispatch(getPizzas())
	}, [dispatch])

	useEffect(() => {
		setPizzas(filterByIngredientType(data, filterState))
	}, [filterState, data])

	const handleAddPizza = (
		pizzaName: string,
		price: string,
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

	if (loading === "idle") {
		return (
			<Box>
				<Text></Text>
				<Text fontSize='xl' fontWeight='bold'>
					Pizzas
				</Text>
				<Flex
					direction='row'
					w='full'
					wrap='wrap'
					justifyContent='space-between'
					px='2'>
					{pizzas.map(
						({ name, picture_url, price, Compose, id_pizza }, index) => {
							return (
								<Pressable
									key={id_pizza}
									w='47%'
									bg='white'
									my={2}
									shadow='4'
									rounded='xl'
									overflow='hidden'
									onPress={() => setIsModalOpen(index)}>
									<Column
										alignItems='center'
										position='relative'
										space='2'
										py='2'
										px='2'>
										<Image
											source={{ uri: picture_url }}
											alt={`Pizza ${name}`}
											size='lg'
											resizeMode='contain'
										/>
										<Text fontWeight='bold' fontSize='md' mb='-1'>
											{name}
										</Text>
										<Text
											color='orange.500'
											fontWeight='bold'>{`$${Number(price).toFixed(
											2,
										)}`}</Text>
										<Pressable
											bg='orange.500'
											position='absolute'
											right='-5'
											bottom='-5'
											pr='4'
											pb='1'
											pl='3'
											rounded='lg'
											onPress={() =>
												handleAddPizza(
													name,
													price,
													picture_url,
													id_pizza,
												)
											}>
											<Text
												color='white'
												fontSize='lg'
												fontWeight='bold'>
												+
											</Text>
										</Pressable>
									</Column>
									<PizzaModal
										closeModal={() => setIsModalOpen(null)}
										name={name}
										ingredientList={Compose}
										picture={picture_url}
										modalIndex={isModalOpen}
										index={index}
										price={price}
										id={id_pizza}
									/>
								</Pressable>
							)
						},
					)}
				</Flex>
			</Box>
		)
	} else if (loading === "pending") {
		return (
			<Center w='full' h='full'>
				<Spinner accessibilityLabel='Loading' />
			</Center>
		)
	} else {
		return <Text>{error}</Text>
	}
}

export default pizzaCard
