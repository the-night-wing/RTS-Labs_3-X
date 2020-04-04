import React from "react";

import { StyleSheet, View, Button } from "react-native";

export const Home = ({ navigation }) => {
    const navigate = where => {
        navigation.navigate(where);
    };

    return (
        <View style={styles.container}>
            <Button
                title="Ferma Factorization"
                onPress={() => navigate("Ferma")}
            />
            <Button title="Perceptron" onPress={() => navigate("Perceptron")} />
            <Button
                title="Genetic Algorithm"
                onPress={() => navigate("Genetic")}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }
});
