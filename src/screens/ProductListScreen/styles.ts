import { COLOURS } from "@/constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 0,
    height: "100%",
    width: "100%",
  },
  productList: {
    top: 40,
    paddingHorizontal: 5,
    width: "90%",
    marginBottom: 50,
},
  loading: {
    position: "absolute",
    top: "50%",
    left: "50%",
    color: COLOURS.PRIMARY,
    zIndex: 100,
  },
  emptyListText: {
    fontSize: 16,
    color: COLOURS.BLACK,
    textAlign: "center",
  },
});

export default styles;