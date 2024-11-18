import { COLOURS } from "@/constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: "rgba(0,0,0,0.5)",
        height: "100%",
        width: "100%",
    },
    modalView: {
        width: "90%",
        position: "absolute",
        left: 20,
        backgroundColor: COLOURS.WHITE,
        borderRadius: 10,
        padding: 30,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        height: 200,
        alignContent: "center",
        justifyContent: "center",
    },
    logoutButton: {
        width: "90%",
        backgroundColor: "#D4362F",
        borderRadius: 10,
        padding: 10,
        marginTop: 20,
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
    },
    logoutButtonText: {
        fontSize: 16,
        color: "white",
        textAlign: "center",
    },
    logoutText: {
        fontSize: 16,
        color: COLOURS.BLACK,
        textAlign: "center",
    },
    closeButton: {
        position: "absolute",
        top: 10,
        right: 10,
        backgroundColor: "white",
        borderRadius: 10,
        width: 20,
        height: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    closeButtonText: {
        color: COLOURS.BLACK,
        fontWeight: "bold",
        fontSize: 18,
    },
});

export default styles;