import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Link } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Tab = createMaterialTopTabNavigator();

export default function foryou() {
	return (
		<Tab.Navigator>
			<Tab.Screen name='Library' component={Library} />
			<Tab.Screen name='Suggested' component={Suggested} />
			<Tab.Screen name='Like' component={Like} />
		</Tab.Navigator>
	);
}

function Suggested() {
	return (
		<View>
			<Text>Hi there from the home screen</Text>
		</View>
	);
}

function Like() {
	return (
		<View>
			<Text>Hi there from the setting screen</Text>
		</View>
	);
}

function Library() {
	return (
		<View>
			<Text>Hi there from the library screen</Text>
		</View>
	);
}
