import React from "react";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { View } from "react-native";
import { createNativeStackNavigator, NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { BottomTabNavigationOptions, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "./components/screens/Login";
import Home from "./components/screens/Home";
import { useFonts, Inter_200ExtraLight, Inter_900Black, Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_500Medium } from "@expo-google-fonts/inter";
import ShoppingBag from "./components/screens/svg/shoppingBag";
import Timer from "./components/screens/svg/timer";
import Orders from "./components/screens/Orders";
const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

export default function App() {
	let [loaded] = useFonts({
		Inter_200ExtraLight,
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
				<Stack.Screen name="Main" component={MainTabs} options={{ headerShown: false }} />
				<Stack.Screen name="Checkout" component={Home} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const MainTabs = ({ navigation }: any) => {
	const initialParams = { MainNavigation: navigation };

	return (
		<Tabs.Navigator
			initialRouteName="New Order"
			screenOptions={{
				headerTitleAlign: "center",
				headerLeft: () => null,
				headerTitleStyle: { fontFamily: "Inter_700Bold", fontSize: 24 },
				headerTransparent: true,
				tabBarStyle: { borderTopWidth: 0, backgroundColor: "#E4E6F1", height: 100, elevation: 0 },
			}}
		>
			<Tabs.Screen
				name="New Order"
				component={Home}
				initialParams={initialParams}
				options={{
					tabBarShowLabel: false,
					tabBarIcon: ({ focused, color }) => {
						const size = 58;
						if (focused) return <ShoppingBag width={size} height={size} stroke="#FF9472" />;
						return <ShoppingBag width={size} height={size} stroke="#1B1C22" />;
					},
				}}
			/>
			<Tabs.Screen
				name="Orders"
				component={Orders}
				initialParams={initialParams}
				options={{
					tabBarShowLabel: false,
					tabBarIcon: ({ focused, color }) => {
						const size = 58;
						if (focused) return <Timer width={size} height={size} stroke="#FF9472" />;
						return <Timer width={size} height={size} stroke="#1B1C22" />;
					},
				}}
			/>
		</Tabs.Navigator>
	);
};
