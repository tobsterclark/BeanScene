import React, { useEffect, useState } from "react";
import { FlatList, Modal, StyleProp, Text, TextInput, TouchableOpacity, View, ViewStyle } from "react-native";
import { mainStyles, screenDimensions, colours } from "../styles/mainStylesheet";
import PlusCircle from "./svg/PlusCircle";

const Home = () => {
	const { ww, wh } = screenDimensions();
	const styles = mainStyles();
	const numColumns = Math.floor(ww / 400);

	const [modalView, setModalView] = useState(false);
	const [flatListStyle, setFlatListStyle] = useState<{ columnWrapperStyle?: StyleProp<ViewStyle> } | {}>({});
	const [currentItem, setCurrentItem] = useState<{ name: string; cost: number; ingredients: string[]; calories: number; dietary: string; availability: string; categories: string[] }>({
		name: "",
		cost: 0,
		ingredients: [],
		calories: 0,
		dietary: "",
		availability: "",
		categories: [],
	});
	const [currentCategory, setCurrentCategory] = useState("All");

	useEffect(() => {
		if (ww / 400 > 2.05) setFlatListStyle({ columnWrapperStyle: { flex: 1, justifyContent: "space-around" } });
		else setFlatListStyle({ contentContainerStyle: { display: "flex", justifyContent: "center", alignItems: "center" } });
	}, [ww]);

	const fetchFoods = () => {
		return [
			{ name: "BLT", cost: 16, ingredients: ["Bacon", "Lettuce", "Tomato", "Mayonnaise", "Cucumber"], calories: 6000, dietary: "VG", availability: "available", categories: ["All", "Drinks"] },
			{ name: "BLT", cost: 16, ingredients: ["Bacon", "Lettuce", "Tomato", "Mayonnaise", "Cucumber"], calories: 6000, dietary: "VG", availability: "available", categories: ["All", "Entrees"] },
			{ name: "BLT", cost: 16, ingredients: ["Bacon", "Lettuce", "Tomato", "Mayonnaise", "Cucumber"], calories: 6000, dietary: "VG", availability: "available", categories: ["All", "Mains"] },
			{ name: "BLT", cost: 16, ingredients: ["Bacon", "Lettuce", "Tomato", "Mayonnaise", "Cucumber"], calories: 6000, dietary: "VG", availability: "available", categories: ["All", "Mains"] },
			{ name: "BLT", cost: 16, ingredients: ["Bacon", "Lettuce", "Tomato", "Mayonnaise", "Cucumber"], calories: 6000, dietary: "VG", availability: "available", categories: ["All", "Mains"] },
			{ name: "Random", cost: 16, ingredients: ["Bacon", "Lettuce", "Tomato", "Mayonnaise", "Cucumber"], calories: 6000, dietary: "VG", availability: "available", categories: ["All", "Mains"] },
			{ name: "BLT", cost: 16, ingredients: ["Bacon", "Lettuce", "Tomato", "Mayonnaise", "Cucumber"], calories: 6000, dietary: "VG", availability: "available", categories: ["All", "Mains"] },
			{ name: "BLT", cost: 16, ingredients: ["Bacon", "Lettuce", "Tomato", "Mayonnaise", "Cucumber"], calories: 6000, dietary: "VG", availability: "available", categories: ["All", "Mains"] },
		].filter((item) => {
			if (item.categories.includes(currentCategory) && item.availability === "available") return true;
			return false;
		});
	};
	const fetchCategories = () => {
		return ["Drinks", "Entrees", "Mains"];
	};

	const categories = () => {
		const output = fetchCategories().map((category: string, index: number) => {
			return (
				<TouchableOpacity
					style={[{ padding: 5 }, currentCategory === category ? { borderBottomWidth: 1 } : {}]}
					onPress={() => {
						setCurrentCategory(category);
					}}
				>
					<Text>{category}</Text>
				</TouchableOpacity>
			);
		});

		output.unshift(
			<TouchableOpacity
				style={[{ padding: 5 }, currentCategory === "All" ? { borderBottomWidth: 1 } : {}]}
				onPress={() => {
					setCurrentCategory("All");
				}}
			>
				<Text>All</Text>
			</TouchableOpacity>
		);

		return <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", width: "100%", zIndex: 10 }}>{output}</View>;
	};

	return (
		<View style={[mainStyles().backgroundContainer, { justifyContent: "flex-start", paddingVertical: 70, overflow: "hidden" }]}>
			<Modal animationType="slide" visible={modalView} presentationStyle={"pageSheet"} transparent={true}>
				<View
					style={[
						{ position: "absolute", display: "flex", justifyContent: "flex-start", alignItems: "center", bottom: 0, backgroundColor: colours.primary, width: ww, borderRadius: 16 },
						wh > 550 ? { height: 0.8 * wh } : { height: wh },
						ww > 800 ? { height: wh } : { height: 0.8 * wh },
					]}
				>
					<TouchableOpacity style={[styles.overlayButton, wh > 650 ? { bottom: 100 } : { bottom: 20 }]}>
						<Text style={styles.overlayButtonText}>Add To Order</Text>
					</TouchableOpacity>

					<Text style={styles.modalTitle}>Add {currentItem.name} to order</Text>
					<View style={{ width: "100%", paddingHorizontal: 20, display: "flex", alignItems: "flex-start" }}>
						<Text style={styles.modalHeader}>Item Details</Text>
						<View style={{ paddingVertical: 20 }}>
							<Text style={styles.modalBody}>Ingredients: {currentItem.ingredients.join(", ")}</Text>
							<Text style={styles.modalBold}>Cost: ${currentItem.cost}</Text>
							<Text style={styles.modalBody}>Calories: {currentItem.calories}</Text>
						</View>
						<Text style={styles.modalHeader}>Item Notes</Text>
						<TextInput placeholder="Item notes" placeholderTextColor={colours.grey} style={{ backgroundColor: colours.background, width: ww - 40, height: 80, padding: 10, borderRadius: 16 }} />
					</View>
				</View>
			</Modal>
			<TouchableOpacity style={styles.overlayButton}>
				<Text style={styles.overlayButtonText}>Complete</Text>
			</TouchableOpacity>
			{categories()}
			<FlatList
				key={"flatList" + numColumns}
				data={fetchFoods()}
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
						<TouchableOpacity
							onPress={() => {
								setCurrentItem(item);
								setModalView(true);
							}}
						>
							<PlusCircle />
						</TouchableOpacity>
					</View>
				)}
			/>
		</View>
	);
};

export default Home;
