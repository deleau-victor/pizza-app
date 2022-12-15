import { Icon, Pressable, Radio } from 'native-base'
import React, { FC, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { GestureResponderEvent } from 'react-native'

type FilterItemProps = {
	item: IconDefinition
	value: string
}

const FilterItem: FC<FilterItemProps> = ({ item, value }) => {
	return (
		<Radio
			w='10'
			h='10'
			mx={2}
			alignItems='center'
			justifyContent='center'
			shadow='3'
			value={value}
			_unchecked={{
				accessibilityElementsHidden: false,
				icon: <Icon as=<FontAwesomeIcon icon={item} color='#f97316' /> />,
				importantForAccessibility: 'yes',
				bg: 'white',
			}}
			_checked={{
				bg: 'orange.500',
				icon: <Icon as=<FontAwesomeIcon icon={item} color='#f97316' /> />,
			}}
			accessibilityLabel={'Filters pizza by ' + value}
		/>
	)
}

export default FilterItem
