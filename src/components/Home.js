import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { Navigation } from "../components/Navigation/Navigation";
import { Ferma } from "../components/Ferma/Ferma";
import { Perceptron } from "../components/Perceptron/Perceptron";
import { Genetic } from "../components/Genetic/Genetic";

const Stack = createStackNavigator();

export const Home = () => {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator>
                <Stack.Screen name="Navigation" component={Navigation} />
                <Stack.Screen name="Ferma" component={Ferma} />
                <Stack.Screen name="Perceptron" component={Perceptron} />
                <Stack.Screen name="Genetic" component={Genetic} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
