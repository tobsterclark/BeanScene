import React from "react";
import { Dimensions, TouchableOpacity } from "react-native";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Login = ({ navigation }: any) => {
	const sw = Dimensions.get("window").width;
	const sh = Dimensions.get("window").height;

	return (
		<View style={{ display: "flex", justifyContent: "center", alignItems: "center", height: sh }}>
			<View style={{ display: "flex", justifyContent: "space-between", height: 0.25 * sh }}>
				<View>Login Input</View>
				<TouchableOpacity onPress={() => navigation.navigate("Home")} style={{ padding: "5px", backgroundColor: "#FF9472", borderRadius: 16, display: "flex", justifyContent: "space-around", flexDirection: "row" }}>
					<Text>LOGIN</Text>
				</TouchableOpacity>
			</View>
			<View style={{ position: "absolute", top: 0.1 * sh, left: 0.1 * sw }}>
				<Text>Login</Text>
				<Text>Please sign in to continue</Text>
			</View>
		</View>
	);
};

export default Login;
