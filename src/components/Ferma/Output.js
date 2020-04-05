import React from "react";

import { Text, View } from "react-native";

import styles from "./styles";

export const Output = ({ result: { a, b, steps, n } }) => {
    return (
        <View style={styles.output}>
            <Text>{`Last results:`}</Text>
            <Text>{`n : ${n}`}</Text>
            <Text>{`A : ${a}; B : ${b}`}</Text>
            <Text>{`Amount of steps : ${steps}`}</Text>
        </View>
    );
};
