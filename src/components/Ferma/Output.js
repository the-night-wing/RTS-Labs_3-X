import React from "react";

import { Text, View } from "react-native";

import styles from "./styles";

export const Output = ({ result: { a, b, steps } }) => {
    return (
        <View style={styles.output}>
            <Text>{`Results:`}</Text>
            <Text>{`A : ${a}; B : ${b}`}</Text>
            <Text>{`Amount of steps : ${steps}`}</Text>
        </View>
    );
};
