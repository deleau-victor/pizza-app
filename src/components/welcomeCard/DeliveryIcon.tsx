import { Image } from 'native-base'
import React from 'react'

const DeliveryIcon = () => {
	return (
		<Image
			source={require('../../assets/delivery-man.png')}
			size='80'
			alt='DeliveryIcon'
			alignSelf='center'
			resizeMode='contain'
		/>
	)
}

export default DeliveryIcon
