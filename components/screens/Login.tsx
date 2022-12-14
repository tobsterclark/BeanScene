import React from "react";
import { TextInput, TouchableOpacity } from "react-native";
import { View, Text } from "react-native";
import ArrowRight from "../svgs/ArrowRight";
import User from "../svgs/User";
import Password from "../svgs/Password";
import ColorCircle from "../svgs/Circle";
import { screenDimensions, mainStyles, colours } from "../styles/mainStylesheet";
import { Colors } from "react-native/Libraries/NewAppScreen";

const Login = ({ navigation }: any) => {
	const { ww, wh } = screenDimensions();

	return (
		<View style={mainStyles().backgroundContainer}>
			<View style={{ width: 0.95 * ww, maxWidth: "300px", display: "flex", justifyContent: "space-between", height: 0.4 * wh, zIndex: 20 }}>
				<View style={{ display: "flex" }}>
					<View style={{ display: "flex", marginVertical: 5, flexDirection: "row" }}>
						<User style={{ padding: "10px" }} />
						<View style={{ display: "flex", justifyContent: "center" }}>
							<Text style={{ fontFamily: "Inter_600SemiBold", marginVertical: 5, fontSize: 12, color: colours.primary }}>EMAIL</Text>
							<TextInput
								style={{ borderColor: colours.primary, borderWidth: 2, borderRadius: 100, paddingHorizontal: "10px", paddingVertical: "5px", fontFamily: "Inter_700Bold", color: colours.black, fontSize: 12 }}
								placeholder="johndoe@email.com"
								placeholderTextColor={colours.grey}
							/>
						</View>
					</View>
					<View style={{ display: "flex", flexDirection: "row" }}>
						<Password style={{ padding: "10px" }} />
						<View style={{ display: "flex", justifyContent: "center" }}>
							<Text style={{ fontFamily: "Inter_600SemiBold", marginVertical: 5, fontSize: 12, color: colours.primary }}>PASSWORD</Text>
							<TextInput
								secureTextEntry={true}
								style={{ borderColor: colours.primary, borderWidth: 2, borderRadius: 100, paddingHorizontal: "10px", paddingVertical: "5px", fontFamily: "Inter_700Bold", color: colours.black, fontSize: 12 }}
								placeholder="password1234"
								placeholderTextColor={colours.grey}
							/>
						</View>
					</View>
				</View>
				<TouchableOpacity
					onPress={() => navigation.navigate("Main")}
					style={{
						width: "fit-content",
						paddingVertical: "7px",
						paddingHorizontal: "30px",
						backgroundColor: colours.primary,
						borderRadius: 16,
						display: "flex",
						alignItems: "center",
						justifyContent: "space-around",
						flexDirection: "row",
						alignSelf: "flex-end",
						shadowColor: "#000000",
						shadowOffset: { width: -2, height: 4 },
						shadowOpacity: 0.2,
						shadowRadius: 16,
					}}
				>
					<Text style={{ fontFamily: "Inter_700Bold", fontSize: 12 }}>LOGIN</Text>
					<ArrowRight />
				</TouchableOpacity>
			</View>
			<View style={{ position: "absolute", top: 0.1 * wh, width: 0.8 * ww, maxWidth: "300px", zIndex: 20 }}>
				<Text style={{ fontFamily: "Inter_900Black", fontSize: 40 }}>Login</Text>
				<Text style={{ fontFamily: "Inter_400Regular", fontSize: 12 }}>Please sign in to continue</Text>
			</View>
			<ColorCircle color={colours.primary} style={{ position: "absolute", right: -66.95, top: -70, zIndex: 10 }} />
			<ColorCircle color={colours.secondary} style={{ position: "absolute", left: -118, top: wh * 0.6, zIndex: 10 }} />
		</View>
	);
};

export default Login;
