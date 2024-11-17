import useAuth from "@/hooks/useAuth";
import { useAppSelector } from "@app/hooks";
import { AuthSelector } from "@app/slices/authSlice";
import { useState } from "react";
import { Button, Text, TextInput, View, Modal, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import styles from "./styles";

const Login = () => {
  const { login, clearError } = useAuth();

  const auth = useAppSelector(AuthSelector);

  const [username, setUsername] = useState<string>("mor_2314");
  const [password, setPassword] = useState<string>("83r5^_");

  return (
    <SafeAreaView style={styles.constainer}>
      <View>
        <Text>Login Screen</Text>
        <TextInput
          placeholder="Nombre de usuario"
          style={styles.input}
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          placeholder="Contraseña"
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        <Button
          title="Iniciar Sesión"
          onPress={() => {
            //navigation.navigate("ProductList")
            login(username, password);
          }}
        />
      </View>
      <Modal
        visible={auth.error !== undefined}
        animationType="slide"
        transparent={true}
      >
        <TouchableWithoutFeedback onPress={() => clearError()}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalView}>
              <TouchableOpacity style={styles.closeButton} onPress={() => clearError()}>
                <Text style={styles.closeButtonText}>X</Text>
              </TouchableOpacity>
              <Text style={styles.modalText}>{auth.error}</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </SafeAreaView>
  );
};

export default Login;