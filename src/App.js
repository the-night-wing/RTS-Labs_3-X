import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ferma } from "./components/Ferma/Ferma";
import { Home } from "./components/Home";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="Ferma"
                    component={Ferma}
                    options={{ title: "Ferma Factorization" }}
                />
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{ title: "Home Tab" }}
                />
                {/* <View style={styles.container}>
                    <Text>Open up App.js to start working on your app!</Text>
                </View> */}
            </Tab.Navigator>
        </NavigationContainer>
    );
}
