import React from "react";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./components/screens/Login";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Login">
				<Stack.Screen name="Login" component={Login} />
				<Stack.Screen name="Home" component={Login} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
