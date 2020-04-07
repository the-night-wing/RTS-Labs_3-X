import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        flex: 1,
        backgroundColor: "#f8dbff",
        alignItems: "center",
        justifyContent: "center",
    },
    select: { height: 50, width: 150, borderWidth: 2, borderColor: "#000" },
    item: { color: "blue" },
    output: {
        height: 80,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
    },
    button: {
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: "#68a0cf",
        borderRadius: 5,
        borderWidth: 2,
        borderColor: "black",
    },
    selectBlock: {
        height: 200,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});

export default styles;
