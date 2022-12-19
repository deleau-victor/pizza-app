import {
	Text,
	Modal,
	Pressable,
	Column,
	Image,
	Row,
	Flex,
	Button,
} from "native-base"
import React, { FC, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faArrowLeft, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons"
import { useAppDispatch } from "../../hooks/typedReduxHooks"
import { addPizza } from "../../slices/basketSlice"

type PizzaModal = {
	name: string
	ingredientList: { Ingredient: { name: string } }[]
	picture: string
	modalIndex: number | null
	closeModal: () => void
	index: number
	price: string
	id: number
}

const pizzaModal: FC<PizzaModal> = ({
	name,
	ingredientList,
	picture,
	modalIndex,
	closeModal,
	index,
	price,
	id,
}) => {
	const [pizzaCount, setPizzaCount] = useState<number>(0)
	const [isAllergensSelected, setisAllergensSelected] =
		useState<boolean>(false)
	const dispatch = useAppDispatch()

	const handleCloseModal = () => {
		setPizzaCount(0)
		closeModal()
	}

	const handleSelectIngredients = () => {
		setisAllergensSelected(false)
	}

	const handleSelectAllergens = () => {
		setisAllergensSelected(true)
	}

	const handleAddPizza = (
		pizzaName: string,
		price: string,
		picture_url: string,
		id_pizza: number,
	) => {
		if (pizzaCount === 0) {
		} else {
			dispatch(
				addPizza({
					name: pizzaName,
					picture: picture_url,
					price: price,
					id: id_pizza,
					count: pizzaCount,
				}),
			)
			handleCloseModal()
		}
	}

	return (
		<Modal
			isOpen={modalIndex === index ? true : false}
			size={"xl"}
			_backdrop={{ bg: "rgba(0,0,0,0.5)" }}
			onClose={() => setPizzaCount(0)}>
			<Modal.Content bg='white' rounded='3xl'>
				<Column bg='white' alignItems='center' space='4' px='6' py='6'>
					<Row w='full' justifyContent='flex-start'>
						<Pressable size={"10"} onPress={handleCloseModal}>
							<FontAwesomeIcon icon={faArrowLeft} size={25} />
						</Pressable>
					</Row>

					<Text fontWeight='bold' fontSize='3xl' mt='-10'>
						{name}
					</Text>
					<Image
						source={{ uri: picture }}
						alt={`Pizza ${name}`}
						size='2xl'
						resizeMode='contain'
					/>
					<Row alignItems='center' shadow='6'>
						<Pressable
							bg='orange.500'
							px='3'
							py='2'
							roundedLeft='full'
							onPress={
								pizzaCount === 0
									? () => {}
									: () => setPizzaCount(pizzaCount - 1)
							}>
							<FontAwesomeIcon icon={faMinus} size={25} color='white' />
						</Pressable>
						<Flex h='full' px='4' direction='row' alignItems='center'>
							<Text fontSize='2xl' fontWeight='bold'>
								{pizzaCount}
							</Text>
						</Flex>
						<Pressable
							bg='orange.500'
							px='3'
							py='2'
							roundedRight='full'
							onPress={() => setPizzaCount(pizzaCount + 1)}>
							<FontAwesomeIcon icon={faPlus} size={25} color='white' />
						</Pressable>
					</Row>
					<Row justifyContent='space-between' w='full'>
						<Column>
							<Text fontSize='md'>Size</Text>
							<Text fontSize='md' fontWeight='bold'>
								Medium
							</Text>
						</Column>
						<Column
							borderColor='gray.200'
							borderRightWidth='1'
							borderLeftWidth='1'
							px='8'>
							<Text fontSize='md' textAlign='center'>
								Waight
							</Text>
							<Text fontSize='md' textAlign='center' fontWeight='bold'>
								400gr
							</Text>
						</Column>
						<Column>
							<Text fontSize='md' textAlign='right'>
								Price
							</Text>
							<Text fontSize='md' textAlign='right' fontWeight='bold'>
								{`$${Number(price).toFixed(2)}`}
							</Text>
						</Column>
					</Row>
					<Column justifyItems='flex-start' w='full'>
						<Row space={3}>
							<Pressable onPress={() => handleSelectIngredients()}>
								<Text
									fontSize='md'
									fontWeight={!isAllergensSelected ? "bold" : "normal"}
									color={!isAllergensSelected ? "black" : "gray.500"}>
									Ingrédients
								</Text>
							</Pressable>
							<Pressable onPress={() => handleSelectAllergens()}>
								<Text
									fontSize={"md"}
									fontWeight={isAllergensSelected ? "bold" : "normal"}
									color={isAllergensSelected ? "black" : "gray.500"}>
									Allergènes
								</Text>
							</Pressable>
						</Row>

						<Text>
							{isAllergensSelected
								? ""
								: ingredientList.map(({ Ingredient }, index) => {
										return index === ingredientList.length - 1
											? `${Ingredient.name}`
											: `${Ingredient.name}, `
								  })}
						</Text>
					</Column>
					<Button
						w='full'
						colorScheme='orange'
						rounded='full'
						onPress={() => handleAddPizza(name, price, picture, id)}>
						<Text fontWeight='bold' color='white' fontSize='md'>
							Add to cart
						</Text>
					</Button>
				</Column>
			</Modal.Content>
		</Modal>
	)
}

export default pizzaModal
