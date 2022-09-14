import { View, Text, FlatList, TouchableOpacity, StyleProp, ViewStyle } from "react-native";
import React, { useEffect, useState } from "react";
import { mainStyles, screenDimensions } from "../styles/mainStylesheet";
import PlusCircle from "../svgs/PlusCircle";

const ManageFoods = () => {
	const [currentEdit, setCurrentEdit] = useState<"categories" | "foods">("foods");
	const [allFoods, setAllFoods] = useState<any[]>();

	const { ww, wh } = screenDimensions();
	const styles = mainStyles();
	const numColumns = Math.floor(ww / 400);

	const [flatListStyle, setFlatListStyle] = useState<{ columnWrapperStyle?: StyleProp<ViewStyle> } | {}>({});

	useEffect(() => {
		fetchFoods();
	}, []);

	useEffect(() => {
		if (ww / 400 > 2.05) setFlatListStyle({ columnWrapperStyle: { flex: 1, justifyContent: "space-around" } });
		else setFlatListStyle({ contentContainerStyle: { display: "flex", justifyContent: "center", alignItems: "center" } });
	}, [ww]);

	const fetchFoods = () => {
		fetch("https://localhost:44378/api/Food")
			.then((response) => response.json())
			.then((json) => {
				setAllFoods(json);
			});
	};

	return (
		<View style={[mainStyles().backgroundContainer, { justifyContent: "flex-start", paddingVertical: 70, overflow: "hidden" }]}>
			<View>
				<Text>Edit Categories</Text>
			</View>
			<FlatList
				key={"flatList"}
				data={allFoods}
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
						<TouchableOpacity onPress={() => {}}>
							<PlusCircle />
						</TouchableOpacity>
					</View>
				)}
			/>
		</View>
	);
};

export default ManageFoods;
