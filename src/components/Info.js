import React from "react";

import { View, Text, StyleSheet } from "react-native";

import globalStyles from "./global-styles";

export const Info = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Real Time Systems</Text>
            <Text style={globalStyles.subheader}>Labs 3.1 - 3.3</Text>
            <Text style={globalStyles.subheader}>Кривошей Денис ІО-71</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingBottom: 50,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
