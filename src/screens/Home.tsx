import { NativeStackScreenProps } from '@react-navigation/native-stack'
import {
	Button,
	Center,
	Text,
	Column,
	StatusBar,
	ScrollView,
	Row,
} from 'native-base'
import React, { FC } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { RootStackParamList } from '../../types'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import Filters from '../components/home/Filters'
import { faBars, faShoppingBasket } from '@fortawesome/free-solid-svg-icons'

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>

const Home: FC<HomeScreenProps> = ({ navigation }) => {
	const dispatch = useDispatch()

	const count = useSelector((store: any) => store.count)

	return (
		<>
			<StatusBar barStyle={'dark-content'}></StatusBar>
			<SafeAreaView>
				<Center w='full' mx='auto' py='6'>
					<Column w='85%'>
						<Row justifyContent='space-between' w='full'>
							<FontAwesomeIcon icon={faBars} size={30} />
							<FontAwesomeIcon icon={faShoppingBasket} size={30} />
						</Row>
						<Text fontWeight='bold' fontSize='xl' mt='8'>
							Filter pizzas by ingredients
						</Text>
						<Filters />
						<ScrollView></ScrollView>
					</Column>
				</Center>
			</SafeAreaView>
		</>
	)
}

export default Home
