import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { Text, Button, Modal, Pressable, Row, Center } from "native-base"
import React, { FC } from "react"
import { useAppSelector } from "../../hooks/typedReduxHooks"
import BasketTable from "./BasketTable"

type BasketProps = {
	isOpen: boolean
	closeModal: () => void
}

const Basket: FC<BasketProps> = ({ isOpen, closeModal }) => {
	const basketData = useAppSelector((state) => state.basket)

	return (
		<Modal isOpen={isOpen} size={"xl"}>
			<Modal.Content bg='white' rounded='3xl' p={4}>
				<Row w='full' justifyContent='flex-start'>
					<Pressable size={"10"} onPress={closeModal}>
						<FontAwesomeIcon icon={faArrowLeft} size={25} />
					</Pressable>
				</Row>
				<Center>
					<Text mt={-2} mb={4} fontWeight='bold' fontSize='lg'>
						Total count of pizzas : {basketData.totalCount}
					</Text>
					<BasketTable />
					<Button colorScheme='orange' rounded='full' px={4} mt={4}>
						<Text color='white' fontSize='lg' fontWeight='bold'>
							Order
						</Text>
					</Button>
				</Center>
			</Modal.Content>
		</Modal>
	)
}

export default Basket
