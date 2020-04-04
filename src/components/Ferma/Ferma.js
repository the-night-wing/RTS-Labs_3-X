import React, { useState } from "react";

import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";

import styles from "./styles";

import { calcFactorization } from "./functions";

export const Ferma = () => {
    const [n, setN] = useState(-1);
    const [infoMessage, setinfoMessage] = useState(
        "Input n and press 'Calculate'"
    );

    const [result, setResult] = useState([]);

    const inputN = n => {
        if (!isNaN(+n)) {
            if (n > 1) {
                setN(+n);
                setinfoMessage("n is successfuly writen");
            } else {
                setinfoMessage("Enter n greater than 0");
                if (n == "") {
                    setN(-1);
                }
            }
        } else {
            setinfoMessage("Enter a number");
        }
    };

    const fermaFactor = n => {
        const result = calcFactorization(n);
        setResult(result);
    };

    return (
        <View style={styles.container}>
            <Text>Ferma</Text>
            <TextInput
                style={styles.textInput}
                onChangeText={text => inputN(text)}
                keyboardType={"number-pad"}
            />
            <Text>{infoMessage}</Text>
            <TouchableOpacity activeOpacity={0.5} disabled={n < 1}>
                <Button
                    title="Calculate"
                    onPress={fermaFactor}
                    disabled={n < 1 || isNaN(+n)}
                />
            </TouchableOpacity>
            <Text>{result}</Text>
        </View>
    );
};
