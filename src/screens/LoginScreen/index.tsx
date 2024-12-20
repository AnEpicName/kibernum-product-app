import { useAuth } from "@/hooks";
import { useAppSelector } from "@app/hooks";
import { AuthSelector } from "@app/slices/authSlice";
import { useEffect, useState } from "react";
import { Text, TextInput, View, Modal, TouchableOpacity, TouchableWithoutFeedback, Pressable, Image, KeyboardAvoidingView, Platform, ActivityIndicator } from "react-native";

import styles from "./styles";
import { ErrorModal } from "@/components";

const Login = () => {
  const { loading, login, clearError, checkToken } = useAuth();

  const auth = useAppSelector(AuthSelector);

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  
  useEffect(() => {
    checkToken();
  }, []);

  const Separator = () => <View style={styles.separator} />;

  return (
    <KeyboardAvoidingView
      style={styles.mainContainer}
    >
      <View style={styles.constainer}>
        <View style={styles.logoContainer}>
          <Image
            source={require("../../assets/kibernum_logo.png")}
            style={styles.logo}
          />
          <Text style={styles.logoTitle}>Kibernum Store</Text>
        </View>
        <Separator />
        <View style={styles.formContainer}>
          <Text style={styles.loginTitle}>Welcome to Kibernum Store</Text>
          <Text style={styles.loginSubtitle}>Please enter your credentials to start shopping</Text>
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
          <Pressable
            style={styles.loginButton}
            onPress={() => {
              login(username, password);
            }}
            android_ripple={{ color: "#59B6EB" }}
          >
            {loading ?
              <ActivityIndicator size="small" color="#fff" />
              :
              <Text style={styles.loginButtonText}>Sign In</Text>
            }
          </Pressable>
        </View>
        <ErrorModal 
          visible={auth.error !== undefined} 
          onClose={() => clearError()} 
          message={auth.error}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;