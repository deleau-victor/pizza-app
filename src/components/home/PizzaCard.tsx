import { Box, Column, Text, Image, Flex, Pressable } from "native-base"
import React, { FC, useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { pizzas } from "../../../pizza.json"
import filterSlice from "../../slices/filterSlice"
import PizzaModal from "./PizzaModal"

const pizzaCard = () => {
	const [isModalOpen, setIsModalOpen] = useState<number | null>(null)

	const filterState = useSelector((state: string[]) => state.filter)

	useEffect(() => {
		console.log(filterState)
	}, [filterState])

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
				{pizzas.map(({ name, ingredients, picture, price, id }, index) => {
					const modalIndex = index
					return (
						<Pressable
							key={id}
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
									source={{ uri: picture }}
									alt={`Pizza ${name}`}
									size='lg'
									resizeMode='contain'
								/>
								<Text fontWeight='bold' fontSize='md' mb='-1'>
									{name}
								</Text>
								<Text
									color='orange.500'
									fontWeight='bold'>{`$${price.toFixed(2)}`}</Text>
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
									<Text color='white' fontSize='lg' fontWeight='bold'>
										+
									</Text>
								</Pressable>
							</Column>
							<PizzaModal
								closeModal={() => setIsModalOpen(null)}
								name={name}
								ingredients={ingredients}
								picture={picture}
								modalIndex={isModalOpen}
								index={index}
								price={price}
							/>
						</Pressable>
					)
				})}
			</Flex>
		</Box>
	)
}

export default pizzaCard
