import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    marginTop: 20,
    width: "80%",
    height: 40,
  },
  loginButton: {
    marginTop: 20,
    width: "80%",
    height: 40,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalView: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: "#ed1313",
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
  },
  modalText: {
    color: "white",
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
    color: "#ed1313",
    fontWeight: "bold",
    fontSize: 14,
  },
});

export default styles;
