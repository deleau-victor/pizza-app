Paste this code in Home Screen

```ts
useEffect(() => {
	const displayWelcomeScreen = async () => {
		await SecureStore.deleteItemAsync('firstTime')
	}
	displayWelcomeScreen()
}, [])
```
