import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { RootNavigator } from "./src/routes/RootNavigator"
import { NativeBaseProvider } from "native-base"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { Provider } from "react-redux"
import { store } from "./src/store/store"

const App = () => {
	return (
		<NavigationContainer>
			<NativeBaseProvider>
				<SafeAreaProvider>
					<Provider store={store}>
						<RootNavigator />
					</Provider>
				</SafeAreaProvider>
			</NativeBaseProvider>
		</NavigationContainer>
	)
}

export default App
