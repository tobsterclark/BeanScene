import React from "react";
import { Text, View } from "react-native";
import { mainStyles, screenDimensions } from "../styles/mainStylesheet";

const Home = () => {
	return (
		<View style={mainStyles().backgroundContainer}>
			<Text>Test</Text>
		</View>
	);
};

export default Home;
