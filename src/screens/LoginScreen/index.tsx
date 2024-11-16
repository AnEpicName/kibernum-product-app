import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native";


const Login = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Login Screen</Text>
      <Button title="Login" onPress={() => { navigation.navigate("ProductList") }} />
    </View>
  );
};

export default Login;