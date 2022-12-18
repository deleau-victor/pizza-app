import { NativeStackScreenProps } from "@react-navigation/native-stack"
import {
	Button,
	Center,
	Column,
	StatusBar,
	Radio,
	Row,
	Text,
} from "native-base"
import React, { FC, useState } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import Card from "../components/welcomeCard/Card"
import { RootStackParamList } from "../routes/types"

type WelcomeScreenProps = NativeStackScreenProps<RootStackParamList, "Welcome">

const Welcome: FC<WelcomeScreenProps> = ({ navigation }) => {
	const [image, setImage] = useState<string>("logo")
	const [title, setTitle] = useState<string>("Pizzeria Massimiliano de Roma")
	const [description, setDescription] = useState<string>(
		"The authentic italian pizzeria",
	)

	const handleChangeCard = (value: string) => {
		switch (value) {
			case "one":
				setImage("logo")
				setTitle("Pizzeria Massimiliano de Roma")
				setDescription("The authentic Italian pizzeria")
				break
			case "two":
				setImage("pizza")
				setTitle("Order your favorite pizzas")
				setDescription("Authentic Italian pizzas cooked over a wood fire")
				break
			case "three":
				setImage("delivery")
				setTitle("Quick & fastest delivery pizza for you")
				setDescription("Get your favorite pizza the fatest way possible")
				break
		}
	}

	return (
		<>
			<StatusBar barStyle='dark-content'></StatusBar>
			<SafeAreaView>
				<Center w='85%' mx='auto'>
					<Column justifyContent={"space-between"} h='full' py='8'>
						<Card image={image} title={title} description={description}>
							<Radio.Group
								name='image'
								defaultValue='one'
								accessibilityLabel='Pick an image'
								colorScheme='amber'
								onChange={(value) => handleChangeCard(value)}>
								<Row alignSelf='center' space='4'>
									<Radio
										value='one'
										accessibilityLabel='card one'
										size='sm'
									/>
									<Radio
										value='two'
										accessibilityLabel='card two'
										size='sm'
									/>
									<Radio
										value='three'
										accessibilityLabel='card three'
										size='sm'
									/>
								</Row>
							</Radio.Group>
						</Card>
						<Button
							onPress={() => navigation.push("Home")}
							bg='orange.500'
							rounded='full'
							py='3'
							shadow='3'
							_pressed={{ bg: "orange.700" }}>
							<Text color='white' fontSize='lg'>
								Get Started
							</Text>
						</Button>
					</Column>
				</Center>
			</SafeAreaView>
		</>
	)
}

export default Welcome
