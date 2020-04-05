import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        paddingTop: 100,
        flex: 1,
        backgroundColor: "#deeaff",
        alignItems: "center",
        justifyContent: "center",
    },
    textInput: {
        backgroundColor: "#fff",
        borderRadius: 10,
        margin: 10,
        padding: 10,
        fontSize: 18,
        width: 200,
        height: 50,
        borderColor: "black",
        borderWidth: 1,
    },
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
