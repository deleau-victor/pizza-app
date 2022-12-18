import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { Center, Text, Column, StatusBar, ScrollView, Row } from "native-base"
import React, { FC } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { RootStackParamList } from "../routes/types"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import Filters from "../components/home/Filters"
import { faBars, faShoppingBasket } from "@fortawesome/free-solid-svg-icons"
import PizzaCard from "../components/home/PizzaCard"

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Home">

const Home: FC<HomeScreenProps> = ({ navigation }) => {
	return (
		<>
			<StatusBar barStyle={"light-content"}></StatusBar>
			<SafeAreaView>
				<Center w='full' mx='auto' py='6'>
					<Column w='85%'>
						<ScrollView>
							<Row justifyContent='space-between' w='full'>
								<FontAwesomeIcon icon={faBars} size={30} />
								<FontAwesomeIcon icon={faShoppingBasket} size={30} />
							</Row>
							<Text fontWeight='bold' fontSize='xl' mt='8'>
								Filter pizzas by ingredients
							</Text>
							<Filters />
							<PizzaCard />
						</ScrollView>
					</Column>
				</Center>
			</SafeAreaView>
		</>
	)
}

export default Home
