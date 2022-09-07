import { View, Text } from "react-native";
import React from "react";
import { mainStyles } from "../styles/mainStylesheet";

const ManageFoods = () => {
	return (
		<View style={mainStyles().backgroundContainer}>
			<View>
				<Text>Edit Categories</Text>
			</View>
		</View>
	);
};

export default ManageFoods;
