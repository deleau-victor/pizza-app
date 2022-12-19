import { NativeStackScreenProps } from "@react-navigation/native-stack"
import {
	Center,
	Text,
	Column,
	StatusBar,
	ScrollView,
	Row,
	Pressable,
} from "native-base"
import React, { FC, useEffect, useState } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { RootStackParamList } from "../routes/types"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import Filters from "../components/home/Filters"
import { faBars, faShoppingBasket } from "@fortawesome/free-solid-svg-icons"
import PizzaCard from "../components/home/PizzaCard"
import Basket from "../components/basket/Basket"

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Home">

const Home: FC<HomeScreenProps> = ({ navigation }) => {
	const [isBasketOpen, setIsBasketOpen] = useState<boolean>(false)

	return (
		<>
			<StatusBar barStyle={"light-content"}></StatusBar>
			<SafeAreaView>
				<Center w='full' mx='auto' mt={6}>
					<Column w='85%' mt={8}>
						<Row
							justifyContent='space-between'
							w='full'
							alignItems='center'>
							<FontAwesomeIcon icon={faBars} size={30} />
							<Pressable onPress={() => setIsBasketOpen(true)}>
								<FontAwesomeIcon icon={faShoppingBasket} size={30} />
							</Pressable>
						</Row>
						<ScrollView mb={12}>
							<Text fontWeight='bold' fontSize='xl' mt={8}>
								Filter pizzas by ingredients
							</Text>
							<Filters />
							<PizzaCard />
							<Basket
								isOpen={isBasketOpen}
								closeModal={() => setIsBasketOpen(false)}
							/>
						</ScrollView>
					</Column>
				</Center>
			</SafeAreaView>
		</>
	)
}

export default Home
