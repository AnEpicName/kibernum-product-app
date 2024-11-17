import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    sizeSelector: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 20,
    },
    sizeButton: {
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 10,
        margin: 5,
        borderRadius: 10,
        width: 40,
        height: 40,
    },
    selectedSizeButton: {
        borderWidth: 1,
        borderColor: "#4287f5",
        padding: 10,
        margin: 5,
        borderRadius: 10,
        width: 40,
        height: 40,
    },
    sizeButtonText: {
        color: "#4287f5",
        fontSize: 14,
        textAlign: "center",
    },
});  

export default styles;