import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  constainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    width: "100%",
    height: "100%",
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0,
    backgroundColor: "#fff",
    width: "100%",
  },
  formContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: 20,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    marginBottom: 20,
  },
  logoTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    color: "#242627",
  },
  loginTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    color: "#242627",
  },
  loginSubtitle: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 10,
    color: "#242627",
  },
  input: {
    borderWidth: 1,
    borderColor: "#242627",
    padding: 10,
    marginTop: 20,
    width: "80%",
    height: 40,
    borderRadius: 10,
  },
  loginButton: {
    marginTop: 20,
    width: "80%",
    height: 45,
    backgroundColor: "#3B85A8",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  loginButtonText: {
    color: "white",
    fontSize: 16,
  },
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: "#ccc",
    marginTop: 20,
    marginBottom: 20,
  },
});

export default styles;
