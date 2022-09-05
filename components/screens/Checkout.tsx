import { Inter_500Medium } from "@expo-google-fonts/inter";
import React, { useContext, useEffect, useState } from "react";
import { TouchableOpacity, View, Text, FlatList, StyleProp, ViewStyle, TextInput, Modal } from "react-native";
import { OrderContext } from "../contexts/OrderContext";
import { colours, mainStyles, screenDimensions } from "../styles/mainStylesheet";
import ArrowLeft from "../svgs/ArrowLeft";
import DeleteCircle from "../svgs/DeleteCircle";
import EditCircle from "../svgs/EditCircle";
import { foodItem } from "../types/Types";

const Checkout = ({ navigation }: any) => {
	const [flatListStyle, setFlatListStyle] = useState<{ columnWrapperStyle?: StyleProp<ViewStyle> } | {}>({});

	const styles = mainStyles();
	const { ww, wh } = screenDimensions();
	const numColumns = Math.floor(ww / 400);

	const orderContext = useContext(OrderContext);

	const [currentItem, setCurrentItem] = useState<number>(-1);
	const [modalView, setModalView] = useState<boolean>(false);
	const [itemNotes, setItemNotes] = useState<string>("");

	const [orderNotes, setOrderNotes] = useState<string>("");

	useEffect(() => {
		if (ww / 400 > 2.05) setFlatListStyle({ columnWrapperStyle: { flex: 1, justifyContent: "space-around" } });
		else setFlatListStyle({ contentContainerStyle: { display: "flex", justifyContent: "center", alignItems: "center" } });
	}, [ww]);

	const confirmOrder = () => {
		//PUSH to API

		navigation.navigate("Orders");
	};

	const confirmEdits = () => {
		orderContext.updateItem(currentItem, itemNotes);
		setCurrentItem(-1);
		setModalView(false);
	};

	const getTotalCost = () => {
		let total: number = 0;

		orderContext.items.forEach((foodItem) => {
			total += foodItem.cost;
		});

		return total;
	};

	const deleteFoodItem = (index: number) => {
		orderContext.deleteItems(index);
		if (orderContext.items.length === 1) navigation.goBack();
	};

<<<<<<< HEAD
	return (
		<View style={[styles.backgroundContainer, { justifyContent: "flex-start", paddingVertical: 70, overflow: "hidden" }]}>
			<Modal animationType="slide" visible={modalView} presentationStyle={"pageSheet"} transparent={true}>
				<View
					style={[
						{ position: "absolute", display: "flex", justifyContent: "flex-start", alignItems: "center", bottom: 0, backgroundColor: colours.primary, width: ww, borderRadius: 16 },
						wh > 550 ? { height: 0.8 * wh } : { height: wh, borderRadius: 0 },
						ww > 800 ? { height: wh, borderRadius: 0 } : { height: 0.8 * wh },
					]}
				>
					<TouchableOpacity
						style={[styles.overlayButton, wh > 700 ? { bottom: 100 } : { bottom: 20 }]}
						onPress={() => {
							confirmEdits();
						}}
=======
	const EditModal = () => {
		if (currentItem === -1) return <View />;
		else {
			return (
				<Modal animationType="slide" visible={modalView} presentationStyle={"pageSheet"} transparent={true}>
					<View
						style={[
							{ position: "absolute", display: "flex", justifyContent: "flex-start", alignItems: "center", bottom: 0, backgroundColor: colours.primary, width: ww, borderRadius: 16 },
							wh > 550 ? { height: 0.8 * wh } : { height: wh },
							ww > 800 ? { height: wh } : { height: 0.8 * wh },
						]}
>>>>>>> d5663e19d6e288ab9551367a5e61e9f07d1d5dc4
					>
						<TouchableOpacity
							style={[styles.overlayButton, wh > 650 ? { bottom: 100 } : { bottom: 20 }]}
							onPress={() => {
								confirmEdits();
							}}
						>
							<Text style={styles.overlayButtonText}>Confirm Edits</Text>
						</TouchableOpacity>

						<View style={[
							{ position: "absolute", display: "flex", justifyContent: "flex-start", alignItems: "center", bottom: 0, backgroundColor: colours.primary, width: ww, borderRadius: 16 },
							wh > 550 ? { height: 0.8 * wh } : { height: wh, borderRadius: 0 },
							ww > 800 ? { height: wh, borderRadius: 0 } : { height: 0.8 * wh },
						]}>
							<TouchableOpacity
								style={[styles.overlayButton, wh > 700 ? { bottom: 100 } : { bottom: 20 }]}
								onPress={() => {
									setCurrentItem(-1);
									setModalView(!modalView);
								}}
							>
								<ArrowLeft stroke={colours.black} />
							</TouchableOpacity>
							<Text style={styles.modalTitle}>Add {orderContext.items[currentItem].name} to order</Text>
							<ArrowLeft stroke={"transparent"} style={{ padding: 5 }} />
						</View>
						<View style={{ width: "100%", paddingHorizontal: 20, display: "flex", alignItems: "flex-start" }}>
							<Text style={styles.modalHeader}>Item Details</Text>
							<View style={{ paddingVertical: 20 }}>
								<Text style={styles.modalBody}>Ingredients: {orderContext.items[currentItem].ingredients.join(", ")}</Text>
								<Text style={styles.modalBold}>Cost: ${orderContext.items[currentItem].cost}</Text>
								<Text style={styles.modalBody}>Calories: {orderContext.items[currentItem].calories}</Text>
							</View>
							<Text style={styles.modalHeader}>Item Notes</Text>
							<TextInput
								placeholder="Item notes"
								value={itemNotes}
								onChangeText={(text) => setItemNotes(text)}
								placeholderTextColor={colours.grey}
								style={{ backgroundColor: colours.background, width: ww - 40, height: 80, padding: 10, borderRadius: 16 }}
							/>
						</View>
					</View>
<<<<<<< HEAD
				</View>
			</Modal>
			<TouchableOpacity style={[styles.overlayButton, wh > 700 ? { bottom: 100 } : { bottom: 20 }]} onPress={() => confirmOrder()}>
=======
				</Modal>
			);
		}
	};

	return (
		<View style={[styles.backgroundContainer, { justifyContent: "flex-start", paddingVertical: 70, overflow: "hidden" }]}>
			<EditModal />
			<TouchableOpacity style={[styles.overlayButton, wh > 650 ? { bottom: 100 } : { bottom: 20 }]} onPress={() => confirmOrder()}>
>>>>>>> d5663e19d6e288ab9551367a5e61e9f07d1d5dc4
				<Text style={styles.overlayButtonText}>Confirm</Text>
			</TouchableOpacity>
			<View style={{ height: 0.4 * wh }}>
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
							<TouchableOpacity
								onPress={() => {
									setCurrentItem(index);
									setItemNotes(orderContext.items[index].notes ?? "");
									setModalView(true);
								}}
							>
								<EditCircle />
							</TouchableOpacity>
							<TouchableOpacity onPress={() => deleteFoodItem(index)}>
								<DeleteCircle />
							</TouchableOpacity>
						</View>
					)}
				/>
			</View>
			<View style={{ display: "flex", alignItems: "flex-start", padding: 20, width: ww, justifyContent: "flex-start" }}>
				<Text style={{ fontFamily: "Inter_700Bold", fontSize: 20 }}>Total: ${getTotalCost()}</Text>
				<Text style={{ fontFamily: "Inter_700Bold", fontSize: 20 }}>
					Table: <TextInput placeholder="M32" style={{ fontFamily: "Inter_700Bold", fontSize: 20 }} placeholderTextColor={colours.grey} />
				</Text>
				<Text style={{ fontFamily: "Inter_700Bold", fontSize: 20 }}>Order Notes:</Text>
			</View>
			<TextInput
				placeholder="Order notes"
				onChangeText={(text) => {
					setOrderNotes(text);
				}}
				placeholderTextColor={colours.grey}
				style={{ backgroundColor: colours.background, borderWidth: 1, width: ww - 40, height: 80, padding: 10, borderRadius: 16 }}
			/>
		</View>
	);
};

export default Checkout;
