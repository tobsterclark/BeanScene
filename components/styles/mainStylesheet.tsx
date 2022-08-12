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

export const mainStyles = () => {
	const { ww, wh } = screenDimensions();

	return StyleSheet.create({
		backgroundContainer: { display: "flex", justifyContent: "center", alignItems: "center", height: wh, width: ww, backgroundColor: "#E4E6F1", overflow: "hidden" },
		itemHeader: { fontFamily: "Inter_500Medium", fontSize: 14, color: "#1B1C22" },
		itemBody: { fontFamily: "Inter_200ExtraLight", fontSize: 12, color: "#1B1C22" },
		itemMainContainer: { display: "flex", flexDirection: "row", marginVertical: 10, justifyContent: "space-between", width: "90%", maxWidth: 400 },
		itemTextContainer: { display: "flex", flexDirection: "column" },
	});
};
