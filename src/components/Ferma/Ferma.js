import React, { useState } from "react";

import { View, Text, TextInput, Button } from "react-native";

import styles from "./styles";

import { calcFactorization } from "./functions";

import { Output } from "./Output";

export const Ferma = () => {
    const [n, setN] = useState(-1);
    const [infoMessage, setinfoMessage] = useState(
        "Input n and press 'Calculate'"
    );
    const [result, setResult] = useState({});

    const inputN = (n) => {
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

    const fermaFactor = (n) => {
        const result = calcFactorization(n);
        setResult({
            a: result[0],
            b: result[1],
            steps: result[2],
        });
    };

    return (
        <View style={styles.container}>
            <Text>Ferma</Text>
            <TextInput
                style={styles.textInput}
                onChangeText={(text) => inputN(text)}
                keyboardType={"number-pad"}
            />
            <Text>{infoMessage}</Text>
            <Button
                title="Calculate"
                onPress={() => fermaFactor(n)}
                disabled={n < 1 || isNaN(+n)}
            />
            {Object.keys(result).length == 0 ? null : (
                <Output result={result} />
            )}
        </View>
    );
};
