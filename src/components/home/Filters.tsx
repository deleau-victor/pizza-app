import {
	faBacon,
	faCheese,
	faDrumstickBite,
	faEgg,
	faFish,
	faSeedling,
	IconDefinition,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { Pressable, Radio, Row, ScrollView } from 'native-base'
import React, { useEffect, useState } from 'react'
import FilterItem from './FilterItem'

const Filters = () => {
	const [filterOption, setFilterOption] = useState([
		{ name: 'cheese', icon: faCheese, filter: 1, selected: false },
		{ name: 'meat', icon: faDrumstickBite, filter: 2, selected: false },
		{ name: 'veggie', icon: faSeedling, filter: 3, selected: false },
		{ name: 'egg', icon: faEgg, filter: 4, selected: false },
		{ name: 'fish', icon: faFish, filter: 5, selected: false },
		{ name: 'bacon', icon: faBacon, filter: 6, selected: false },
	])

	useEffect(() => {
		console.log(filterOption)
	}, [filterOption])

	return (
		<ScrollView horizontal={true} py='4'>
			<Row space={4}>
				{filterOption.map((filter, index) => {
					return (
						<Pressable
							key={index}
							bg={filter.selected ? '#f97316' : 'white'}
							rounded='full'
							p={2}
							accessibilityLabel={`Filter pizza by ${filter.name}`}
							onPress={() => {
								const filterState = filterOption
								if (
									filterState.some((filter) => {
										if (filter.selected) return true
									})
								) {
									const selectedIndex = filterState.findIndex(
										(filter) => filter.selected === true
									)
									if (selectedIndex == index) {
										filterState[selectedIndex].selected = false
									} else {
										filterState[selectedIndex].selected = false
										filterState[index].selected = !filterState[index].selected
									}
								} else {
									filterState[index].selected = !filterState[index].selected
								}
								setFilterOption(filterState)
							}}
						>
							<FontAwesomeIcon
								icon={filter.icon}
								color={filter.selected ? '#ffffff' : '#f97316'}
								size={25}
							/>
						</Pressable>
					)
				})}
			</Row>
		</ScrollView>
	)
}

export default Filters
