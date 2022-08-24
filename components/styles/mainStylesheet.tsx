import { useEffect, useState } from "react";
import { Dimensions, StyleSheet } from "react-native";

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

export const screenDimensions = () => {
	const [dimensions, setDimensions] = useState({ window, screen });

	useEffect(() => {
		const subscription = Dimensions.addEventListener("change", ({ window, screen }) => {
			setDimensions({ window, screen });
		});
		return () => subscription?.remove();
	});

	return { sw: dimensions.screen.width, sh: dimensions.screen.height, ww: dimensions.window.width, wh: dimensions.window.height };
};

export const colours = {
	primary: "#FF9472",
	secondary: "#717EC3",
	background: "#E4E6F1",
	grey: "#A5A5A5",
	black: "#1B1C22",
	green: "#3E885B",
	red: "#C20114",
	orange: "#FF9472",
};

export const mainStyles = () => {
	const { ww, wh } = screenDimensions();

	return StyleSheet.create({
		backgroundContainer: { display: "flex", justifyContent: "center", alignItems: "center", height: wh, width: ww, backgroundColor: colours.background, overflow: "hidden" },

		itemHeader: { fontFamily: "Inter_500Medium", fontSize: 14, color: colours.black },
		itemBody: { fontFamily: "Inter_200ExtraLight", fontSize: 12, color: colours.black, flex: 1 },
		itemMainContainer: { display: "flex", flexDirection: "row", margin: 10, justifyContent: "space-between", width: "90%", maxWidth: 400 },
		itemTextContainer: { display: "flex", flexDirection: "column", width: "60%" },

		overlayButton: {
			position: "absolute",
			bottom: 120,
			width: "80%",
			maxWidth: 1000,
			zIndex: 100,
			backgroundColor: colours.black,
			display: "flex",
			flexDirection: "row",
			justifyContent: "center",
			alignItems: "center",
			paddingVertical: 10,
			borderRadius: 16,
		},
		overlayButtonText: { color: "#FFFFFF", fontFamily: "Inter_700Bold", fontSize: 20 },

		modalHeader: { fontFamily: "Inter_700Bold", fontSize: 20, paddingVertical: 20 },
		modalTitle: { fontFamily: "Inter_700Bold", fontSize: 24, paddingVertical: 20 },
		modalBody: { fontFamily: "Inter_200ExtraLight", fontSize: 12, color: colours.black, flex: 1 },
		modalBold: { fontFamily: "Inter_500Medium", fontSize: 14, color: colours.black },
	});
};
