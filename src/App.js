import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Info } from "./components/Info";
import { Home } from "./components/Home";

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="Info"
                    component={Info}
                    options={{ title: "Info" }}
                />
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{ title: "Labs" }}
                />
                {/* <View style={styles.container}>
                    <Text>Open up App.js to start working on your app!</Text>
                </View> */}
            </Tab.Navigator>
        </NavigationContainer>
    );
}
