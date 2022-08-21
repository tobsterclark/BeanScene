import React from "react";
import { Text, View } from "react-native";
import { colours, mainStyles } from "../styles/mainStylesheet";
import StatusCircle from "../svgs/StatusCircle";

const Orders = () => {
	const allOrders = () => {
		const fetchData = [
			{ table: 15, status: "completed", food: ["BLT", "Chips", "Hot Chocolate", "Ice Tea"] },
			{ table: 15, status: "cooking", food: ["BLT", "Chips", "Hot Chocolate", "Ice Tea"] },
			{ table: 20, status: "pickup", food: ["BLT", "Chips", "Hot Chocolate", "Ice Tea"] },
		];

		const output = fetchData.map((data, index) => {
			var statusColor = colours.orange;
			var statusMsg = "Order is ready for service";
			if (data.status === "completed") {
				statusColor = colours.green;
				statusMsg = "Order is completed";
			} else if (data.status === "cooking") {
				statusColor = colours.red;
				statusMsg = "Order is being cooked";
			}
			return (
				<View key={index} style={[mainStyles().itemMainContainer]}>
					<View style={mainStyles().itemTextContainer}>
						<Text style={mainStyles().itemHeader}>Table {data.table}</Text>
						<Text style={mainStyles().itemBody}>{data.food.join(", ")}</Text>
						<Text style={mainStyles().itemHeader}>{statusMsg}</Text>
					</View>
					<StatusCircle fill={statusColor} />
				</View>
			);
		});

		return output;
	};

	return <View style={[mainStyles().backgroundContainer, { justifyContent: "flex-start", paddingTop: 100 }]}>{allOrders()}</View>;
};

export default Orders;
