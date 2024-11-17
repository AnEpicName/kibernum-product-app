import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    categoryContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 20,
        alignSelf: "flex-start",
    },
    categoryName: {
        fontSize: 14,
        textAlign: "left",
        marginBottom: 10,
        alignSelf: "flex-start",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 15,
        padding: 5,
    },
    categoryTitle: {
        fontSize: 16,
        textAlign: "left",
        marginBottom: 10,
        padding: 5,
        alignSelf: "flex-start",
    },
});

export default styles;