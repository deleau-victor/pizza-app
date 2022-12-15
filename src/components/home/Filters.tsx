import {
	faBacon,
	faCheese,
	faDrumstickBite,
	faEgg,
	faFish,
	faSeedling,
	IconDefinition,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { Pressable, Radio, Row, ScrollView } from "native-base"
import React, { useEffect, useState } from "react"

const filters = [
	{ name: "cheese", icon: faCheese, id: 1 },
	{ name: "meat", icon: faDrumstickBite, id: 2 },
	{ name: "veggie", icon: faSeedling, id: 3 },
	{ name: "egg", icon: faEgg, id: 4 },
	{ name: "fish", icon: faFish, id: 5 },
	{ name: "bacon", icon: faBacon, id: 6 },
]

const Filters = () => {
	const [selectedFilters, setSelectedFilters] = useState<number[]>([])

	const isSelected = (id: number) => selectedFilters.includes(id)

	const handlePress = (id: number) =>
		setSelectedFilters(
			!isSelected(id)
				? [...selectedFilters, id]
				: selectedFilters.filter((currentId) => currentId !== id),
		)

	return (
		<ScrollView horizontal={true} py='4'>
			<Row space={4}>
				{filters.map(({ icon, name, id }) => (
					<Pressable
						key={id}
						bg={isSelected(id) ? "#f97316" : "white"}
						rounded='full'
						p={2}
						accessibilityLabel={`Filter pizza by ${name}`}
						onPress={() => handlePress(id)}>
						<FontAwesomeIcon
							icon={icon}
							color={isSelected(id) ? "white" : "#f97316"}
							size={25}
						/>
					</Pressable>
				))}
			</Row>
		</ScrollView>
	)
}

export default Filters