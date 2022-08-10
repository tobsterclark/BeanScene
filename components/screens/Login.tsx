import React from "react";
import { Dimensions, TextInput, TouchableOpacity } from "react-native";
import { View, Text } from "react-native";
import ArrowRight from "./svg/ArrowRight";
import User from "./svg/User";
import Password from "./svg/Password";
import CircleOrange from "./svg/CircleOrange";

const Login = ({ navigation }: any) => {
	const sw = Dimensions.get("window").width;
	const sh = Dimensions.get("window").height;

	return (
		<View style={{ display: "flex", justifyContent: "center", alignItems: "center", height: sh, backgroundColor: "#E4E6F1" }}>
			<View style={{ width: 0.8 * sw, maxWidth: "300px", display: "flex", justifyContent: "space-between", height: 0.25 * sh }}>
				<View style={{ display: "flex" }}>
					<View style={{ display: "flex", marginVertical: 5, flexDirection: "row" }}>
						<User style={{ padding: "10px" }} />
						<View style={{ display: "flex", justifyContent: "center" }}>
							<Text style={{ fontFamily: "Inter_600SemiBold", marginVertical: 5, fontSize: 12, color: "#FF9472" }}>EMAIL</Text>
							<TextInput style={{ borderColor: "#FF9472", borderWidth: 2, borderRadius: 100, paddingHorizontal: "10px", paddingVertical: "5px", fontFamily: "Inter_700Bold", color: "#1B1C22", fontSize: 12 }} placeholder="johndoe@email.com" />
						</View>
					</View>
					<View style={{ display: "flex", flexDirection: "row" }}>
						<Password style={{ padding: "10px" }} />
						<View style={{ display: "flex", justifyContent: "center" }}>
							<Text style={{ fontFamily: "Inter_600SemiBold", marginVertical: 5, fontSize: 12, color: "#FF9472" }}>PASSWORD</Text>
							<TextInput
								secureTextEntry={true}
								style={{ borderColor: "#FF9472", borderWidth: 2, borderRadius: 100, paddingHorizontal: "10px", paddingVertical: "5px", fontFamily: "Inter_700Bold", color: "#1B1C22", fontSize: 12 }}
								placeholder="password1234"
							/>
						</View>
					</View>
				</View>
				<TouchableOpacity
					onPress={() => navigation.navigate("Home")}
					style={{
						width: "fit-content",
						paddingVertical: "7px",
						paddingHorizontal: "30px",
						backgroundColor: "#FF9472",
						borderRadius: 16,
						display: "flex",
						alignItems: "center",
						justifyContent: "space-around",
						flexDirection: "row",
						alignSelf: "flex-end",
					}}
				>
					<Text style={{ fontFamily: "Inter_700Bold", fontSize: 12 }}>LOGIN</Text>
					<ArrowRight />
				</TouchableOpacity>
			</View>
			<View style={{ position: "absolute", top: 0.1 * sh, width: 0.8 * sw, maxWidth: "300px" }}>
				<Text style={{ fontFamily: "Inter_900Black", fontSize: 40 }}>Login</Text>
				<Text style={{ fontFamily: "Inter_400Regular", fontSize: 12 }}>Please sign in to continue</Text>
			</View>
			<CircleOrange style={{ position: "absolute", right: 0, top: 0 }} />
		</View>
	);
};

export default Login;
