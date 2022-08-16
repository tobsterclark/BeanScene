import React, { useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { mainStyles, screenDimensions, colours } from "../styles/mainStylesheet";
import PlusCircle from "./svg/PlusCircle";

const Home = () => {
	const [currentCategory, setCurrentCategory] = useState("All");
	const styles = mainStyles();

	const fetchFoods = () => {
		return [
			{ name: "BLT", cost: 16, table: 12, ingredients: ["Bacon", "Lettuce", "Tomato", "Mayonnaise", "Cucumber"], calories: 6000, dietary: "VG", availability: "available", categories: ["All", "Drinks"] },
			{ name: "BLT", cost: 16, table: 12, ingredients: ["Bacon", "Lettuce", "Tomato", "Mayonnaise", "Cucumber"], calories: 6000, dietary: "VG", availability: "available", categories: ["All", "Entrees"] },
			{ name: "BLT", cost: 16, table: 12, ingredients: ["Bacon", "Lettuce", "Tomato", "Mayonnaise", "Cucumber"], calories: 6000, dietary: "VG", availability: "available", categories: ["All", "Mains"] },
			{ name: "BLT", cost: 16, table: 12, ingredients: ["Bacon", "Lettuce", "Tomato", "Mayonnaise", "Cucumber"], calories: 6000, dietary: "VG", availability: "available", categories: ["All", "Mains"] },
			{ name: "BLT", cost: 16, table: 12, ingredients: ["Bacon", "Lettuce", "Tomato", "Mayonnaise", "Cucumber"], calories: 6000, dietary: "VG", availability: "available", categories: ["All", "Mains"] },
			{ name: "BLT", cost: 16, table: 12, ingredients: ["Bacon", "Lettuce", "Tomato", "Mayonnaise", "Cucumber"], calories: 6000, dietary: "VG", availability: "available", categories: ["All", "Mains"] },
			{ name: "BLT", cost: 16, table: 12, ingredients: ["Bacon", "Lettuce", "Tomato", "Mayonnaise", "Cucumber"], calories: 6000, dietary: "VG", availability: "available", categories: ["All", "Mains"] },
			{ name: "BLT", cost: 16, table: 12, ingredients: ["Bacon", "Lettuce", "Tomato", "Mayonnaise", "Cucumber"], calories: 6000, dietary: "VG", availability: "available", categories: ["All", "Mains"] },
		].filter((item) => {
			if (item.categories.includes(currentCategory)) return true;
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
			<TouchableOpacity style={styles.overlayButton}>
				<Text style={styles.overlayButtonText}>Complete</Text>
			</TouchableOpacity>
			{categories()}
			<FlatList
				data={fetchFoods()}
				renderItem={({ item, index }) => (
					<View key={index} style={[styles.itemMainContainer]}>
						<View style={styles.itemTextContainer}>
							<Text style={styles.itemHeader}>{item.name}</Text>
							<Text style={styles.itemBody}>Table: {item.table}</Text>
							<Text style={styles.itemBody}>{item.ingredients.join(", ")}</Text>
							<Text style={styles.itemHeader}>${item.cost}</Text>
							<Text style={styles.itemBody}>{item.calories}</Text>
						</View>
						<TouchableOpacity>
							<PlusCircle />
						</TouchableOpacity>
					</View>
				)}
			/>
		</View>
	);
};

export default Home;
