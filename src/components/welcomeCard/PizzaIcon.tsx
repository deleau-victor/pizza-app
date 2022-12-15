import { Image } from 'native-base'
import React from 'react'

const PizzaIcon = () => {
	return (
		<Image
			source={require('../../assets/pizza-slice.webp')}
			size='80'
			alt='PizzaIcon'
			alignSelf='center'
			resizeMode='contain'
		/>
	)
}

export default PizzaIcon
