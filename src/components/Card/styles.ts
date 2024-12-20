import { COLOURS } from "@/constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 2,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    height: 250,
    width: 150,
  },
  productImage: {
    width: 100,
    height: 150,
    resizeMode: 'contain',
  },
  productTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 10,
  },
  productPrice: {
    position: "absolute",
    fontSize: 14,
    color: COLOURS.PRIMARY,
    textAlign: 'center',
    left: 0,
    right: 0,
    bottom: 10,
},
});

export default styles;