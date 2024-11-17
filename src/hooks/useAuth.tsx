import { UserRequests } from "@/api";
import { useAppDispatch, useAppSelector } from "@app/hooks";
import { setError, AuthSelector, setIsLoggedIn } from "@app/slices/authSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";

const useAuth = () => {
    const dispatch = useAppDispatch();
    const auth = useAppSelector(AuthSelector);

    const navigation = useNavigation();

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getToken();
    }, []);

    const getToken = async () => {
        const token = await AsyncStorage.getItem("token");
        console.log(token);
        
        if (token) {
            dispatch(setIsLoggedIn(true));
            navigation.navigate("ProductList" as never);
        } else {
            dispatch(setIsLoggedIn(false));
            navigation.navigate("Login" as never);
        }
    };

    const login = async (username: string, password: string) => {
        if (!username || !password) {
            dispatch(setError("Please fill all the fields to sign in."));
            return;
        }
        setLoading(true);
        try {
            const response = await UserRequests.loginUser(username, password);
            await AsyncStorage.setItem("token", response.data.token);
            getToken();
        } catch (error: any) {
            dispatch(setError(error.response.data));
        }
        setLoading(false);
    };

    const clearError = () => {
        dispatch(setError(undefined));
    };

    return { loading, login, clearError };
}

export default useAuth;