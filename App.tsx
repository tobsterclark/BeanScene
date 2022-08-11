import React from "react";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./components/screens/Login";
import Home from "./components/screens/Home";
import { useFonts, Inter_900Black, Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_500Medium } from "@expo-google-fonts/inter";
const Stack = createNativeStackNavigator();

export default function App() {
	let [loaded] = useFonts({
		Inter_900Black,
		Inter_400Regular,
		Inter_700Bold,
		Inter_600SemiBold,
		Inter_500Medium,
	});

	if (!loaded) return null;
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Login" screenOptions={{ headerTitleAlign: "center", headerLeft: () => null, headerTitleStyle: { fontFamily: "Inter_700Bold", fontSize: 24 }, headerTransparent: true }}>
				<Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
				<Stack.Screen name="Home" component={Home} options={{ title: "New Order" }} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
