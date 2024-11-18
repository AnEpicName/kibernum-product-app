import { COLOURS } from "@/constants";
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
        borderColor: COLOURS.PRIMARY,
        padding: 10,
        margin: 5,
        borderRadius: 10,
        width: 40,
        height: 40,
    },
    sizeButtonText: {
        color: COLOURS.PRIMARY,
        fontSize: 14,
        textAlign: "center",
    },
});  

export default styles;