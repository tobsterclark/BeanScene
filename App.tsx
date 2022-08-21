import React, { useState } from "react";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { View } from "react-native";
import { createNativeStackNavigator, NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { BottomTabNavigationOptions, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "./components/screens/Login";
import Home from "./components/screens/Home";
import { useFonts, Inter_200ExtraLight, Inter_900Black, Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_500Medium } from "@expo-google-fonts/inter";
import ShoppingBag from "./components/svgs/shoppingBag";
import Timer from "./components/svgs/timer";
import Orders from "./components/screens/Orders";
import { foodItem } from "./components/types/Types";
import { OrderContext } from "./components/contexts/OrderContext";
import Checkout from "./components/screens/Checkout";
const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

export default function App() {
	const [items, setItems] = useState<foodItem[]>([]);
	const [notes, setNotes] = useState<string>("");
	let [loaded] = useFonts({
		Inter_200ExtraLight,
		Inter_900Black,
		Inter_400Regular,
		Inter_700Bold,
		Inter_600SemiBold,
		Inter_500Medium,
	});

	const updateItems = (item: foodItem) => {
		const newItems = [...items];
		newItems.push(item);
		setItems(newItems);
	};

	if (!loaded) return null;
	return (
		<OrderContext.Provider
			value={{
				items,
				updateItems: updateItems,
				orderNotes: { notes: notes, setNotes: setNotes },
			}}
		>
			<NavigationContainer>
				<Stack.Navigator initialRouteName="Login" screenOptions={{ headerTitleAlign: "center", headerLeft: () => null, headerTitleStyle: { fontFamily: "Inter_700Bold", fontSize: 24 }, headerTransparent: true }}>
					<Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
					<Stack.Screen name="Main" component={MainTabs} options={{ headerShown: false }} />
					<Stack.Screen name="Checkout" component={Checkout} />
				</Stack.Navigator>
			</NavigationContainer>
		</OrderContext.Provider>
	);
}

const MainTabs = ({ navigation }: any) => {
	return (
		<Tabs.Navigator
			initialRouteName="New Order"
			screenOptions={{
				headerTitleAlign: "center",
				headerLeft: () => null,
				headerTitleStyle: { fontFamily: "Inter_700Bold", fontSize: 24 },
				headerTransparent: true,
				tabBarStyle: { borderTopWidth: 0, backgroundColor: "#E4E6F1", height: 100 },
			}}
		>
			<Tabs.Screen
				name="New Order"
				component={Home}
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
