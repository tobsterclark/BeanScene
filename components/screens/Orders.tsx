import React from "react";
import { Text, View } from "react-native";
import { mainStyles, screenDimensions } from "../styles/mainStylesheet";
import StatusCircle from "./svg/StatusCircle";

const Orders = () => {
	const allOrders = () => {
		const fetchData = [
			{ table: 15, status: "pickup", food: ["BLT", "Chips", "Hot Chocolate", "Ice Tea"] },
			{ table: 15, status: "pickup", food: ["BLT", "Chips", "Hot Chocolate", "Ice Tea"] },
			{ table: 15, status: "pickup", food: ["BLT", "Chips", "Hot Chocolate", "Ice Tea"] },
		];

		const output = fetchData.map((data, index) => {
			var statusColor = "";
			if (data.status === "pickup") {
				statusColor = "";
			}
			return (
				<View key={index} style={mainStyles().itemMainContainer}>
					<View style={mainStyles().itemTextContainer}>
						<Text style={mainStyles().itemHeader}>Table {data.table}</Text>
						<Text style={mainStyles().itemBody}>{data.food.join(", ")}</Text>
						<Text style={mainStyles().itemHeader}>Order {data.status}</Text>
					</View>
					<StatusCircle fill={statusColor} />
				</View>
			);
		});

		return output;
	};

	return <View style={mainStyles().backgroundContainer}>{allOrders()}</View>;
};

export default Orders;
