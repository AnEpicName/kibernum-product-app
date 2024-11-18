import { COLOURS } from "@/constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: COLOURS.PRIMARY,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingTop: 50
  },
  profilePicContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
    paddingHorizontal: 5,
    color: COLOURS.WHITE,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLOURS.WHITE,
  },
  profilePic: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
  },
});

export default styles;