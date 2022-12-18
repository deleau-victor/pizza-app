import React, { useEffect, useState } from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { RootStackParamList } from "./types"
import Home from "../screens/Home"
import Welcome from "../screens/Welcome"
import { SafeAreaView } from "react-native-safe-area-context"
import { Center, Spinner } from "native-base"
import * as SecureStore from "expo-secure-store"

const Stack = createNativeStackNavigator<RootStackParamList>()

export const RootNavigator = () => {
	const [shouldDisplayWelcome, setShouldDisplayWelcome] =
		useState<boolean>(true)
	const [loading, setLoading] = useState<boolean>(true)

	const chooseScreen = async () => {
		await SecureStore.getItemAsync("firstTime")
			.then(async (result) => {
				if (result != undefined) {
					setShouldDisplayWelcome(false)
				} else {
					await SecureStore.setItemAsync("firstTime", "false")
				}
			})
			.finally(() => {
				setLoading(false)
			})
	}

	useEffect(() => {
		chooseScreen()
	}, [])

	return (
		<>
			{loading ? (
				<SafeAreaView>
					<Center w='full' h='full'>
						<Spinner accessibilityLabel='Loading' />
					</Center>
				</SafeAreaView>
			) : (
				<Stack.Navigator
					initialRouteName={shouldDisplayWelcome ? "Welcome" : "Home"}>
					<Stack.Group>
						<Stack.Screen
							name='Home'
							component={Home}
							options={{
								animation: "fade",
								headerTransparent: true,
								title: "",
								headerBackVisible: false,
							}}
						/>
						<Stack.Screen
							name='Welcome'
							component={Welcome}
							options={{
								animation: "fade",
								headerTransparent: true,
								title: "",
								headerBackVisible: false,
							}}
						/>
					</Stack.Group>
				</Stack.Navigator>
			)}
		</>
	)
}
