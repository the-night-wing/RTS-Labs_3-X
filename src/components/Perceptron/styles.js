import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        paddingTop: 100,
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
        // marginRight: 40,
        // marginLeft: 40,
        marginTop: 20,
        marginBottom: 20,
        // paddingTop: 20,
        // paddingBottom: 20,
        backgroundColor: "#68a0cf",
        borderRadius: 5,
        borderWidth: 2,
        borderColor: "black",
        // borderRadius: 20,
        // marginTop: 20,
        // margin: "20px 0",
    },
});

export default styles;
