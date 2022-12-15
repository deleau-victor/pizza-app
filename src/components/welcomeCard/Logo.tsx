import { Image } from 'native-base'
import React from 'react'

const Logo = () => {
	return (
		<Image
			source={require('../../assets/logo.png')}
			size='80'
			alt='logo'
			alignSelf='center'
			resizeMode='contain'
		/>
	)
}

export default Logo
