import { Inter_500Medium } from "@expo-google-fonts/inter";
import React, { useContext, useEffect, useState } from "react";
import { TouchableOpacity, View, Text, FlatList, StyleProp, ViewStyle } from "react-native";
import { OrderContext } from "../contexts/OrderContext";
import { mainStyles, screenDimensions } from "../styles/mainStylesheet";

const Checkout = () => {
	const [flatListStyle, setFlatListStyle] = useState<{ columnWrapperStyle?: StyleProp<ViewStyle> } | {}>({});

	const styles = mainStyles();
	const { ww, wh } = screenDimensions();
	const numColumns = Math.floor(ww / 400);

	const orderContext = useContext(OrderContext);

	useEffect(() => {
		if (ww / 400 > 2.05) setFlatListStyle({ columnWrapperStyle: { flex: 1, justifyContent: "space-around" } });
		else setFlatListStyle({ contentContainerStyle: { display: "flex", justifyContent: "center", alignItems: "center" } });
	}, [ww]);

	return (
		<View style={[styles.backgroundContainer, { justifyContent: "flex-start", paddingVertical: 70, overflow: "hidden" }]}>
			<TouchableOpacity style={styles.overlayButton} onPress={() => console.log()}>
				<Text style={styles.overlayButtonText}>Confirm</Text>
			</TouchableOpacity>
			<FlatList
				key={"flatList" + numColumns}
				data={orderContext.items}
				numColumns={numColumns}
				style={{ width: ww }}
				{...flatListStyle}
				renderItem={({ item, index }) => (
					<View key={index} style={styles.itemMainContainer}>
						<View style={styles.itemTextContainer}>
							<Text style={styles.itemHeader}>{item.name}</Text>
							<Text style={styles.itemBody}>{item.ingredients.join(", ")}</Text>
							<Text style={styles.itemHeader}>${item.cost}</Text>
							<Text style={styles.itemBody}>{item.calories}</Text>
						</View>
					</View>
				)}
			/>
		</View>
	);
};

export default Checkout;
