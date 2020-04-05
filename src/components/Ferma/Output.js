import React from "react";

import { Text, View } from "react-native";

export const Output = ({ result: { a, b, steps } }) => {
    return (
        <View>
            <Text>{`Results:`}</Text>
            <Text>{`A : ${a}`}</Text>
            <Text>{`B : ${b}`}</Text>
            <Text>{`Amount of steps : ${steps}`}</Text>
        </View>
    );
};
