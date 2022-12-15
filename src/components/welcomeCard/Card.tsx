import { View, Text, Column, Image, Box } from 'native-base'
import React, { FC, useEffect, useState } from 'react'
import DeliveryIcon from './DeliveryIcon'
import Logo from './Logo'
import PizzaIcon from './PizzaIcon'

type cardProps = {
	children: any
	image: string
	title: string
	description: string
}

const Card: FC<cardProps> = ({ children, image, title, description }) => {
	const [imageToDisplay, setImageToDisplay] = useState(<Logo />)

	useEffect(() => {
		switch (image) {
			case 'logo':
				setImageToDisplay(<Logo />)
				break
			case 'pizza':
				setImageToDisplay(<PizzaIcon />)
				break
			case 'delivery':
				setImageToDisplay(<DeliveryIcon />)
				break
		}
	}, [image])

	return (
		<Column space='8'>
			<Box maxW={'80'}>{imageToDisplay}</Box>

			{children}
			<Text textAlign='center' fontSize='3xl' fontWeight='bold'>
				{title}
			</Text>
			<Text textAlign='center' fontSize='lg' color='gray.500'>
				{description}
			</Text>
		</Column>
	)
}

export default Card
