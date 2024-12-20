import { COLOURS } from "@/constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 0,
    alignItems: "center",
    width: "100%",
  },
  contentContainer: {
    alignItems: "center",
    paddingBottom: 100,
    paddingLeft: 20,
    paddingRight: 20,
  },
  productImage: {
    marginTop: 20,
    marginBottom: 20,
    width: "100%",
    height: 300,
    resizeMode: "contain",
  },
  productTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "left",
    marginBottom: 10,
    alignSelf: "flex-start",
  },
  productPrice: {
    fontSize: 20,
    color: COLOURS.PRIMARY,
    textAlign: "left",
    left: 0,
    alignSelf: "flex-start",
  },
  productDescription: {
    fontSize: 16,
    textAlign: "left",
    marginBottom: 10,
    marginTop: 10,
  },
  addToCartButton: {
    position: "absolute",
    bottom: 20,
    width: "90%",
    backgroundColor: COLOURS.PRIMARY,
    borderRadius: 10,
    padding: 10,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  addToCartButtonText: {
    color: "white",
    fontSize: 20,
  },
});

export default styles;