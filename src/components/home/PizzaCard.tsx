import { Box, Column, Text, Image, Flex, Pressable } from "native-base"
import React, { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/typedReduxHooks"
import PizzaModal from "./PizzaModal"
import { getPizzas } from "../../slices/pizzaSlice"

const pizzaCard = () => {
	const dispatch = useAppDispatch()
	const [isModalOpen, setIsModalOpen] = useState<number | null>(null)
	const filterState = useAppSelector((state) => state.filter)
	const { data, loading, error } = useAppSelector((state) => state.pizza)

	useEffect(() => {
		dispatch(getPizzas())
	}, [filterState, dispatch])

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
					{data.map(
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
											onPress={() => {}}>
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
										price={Number(price)}
									/>
								</Pressable>
							)
						},
					)}
				</Flex>
			</Box>
		)
	} else if (loading === "pending") {
		return <Text>Loading</Text>
	} else if (error !== null) {
		return <Text>{error}</Text>
	}
}

export default pizzaCard
