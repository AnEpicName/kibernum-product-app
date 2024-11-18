import { UserRequests } from "@/api";
import { useAppDispatch } from "@app/hooks";
import { setError, setIsLoggedIn } from "@app/slices/authSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";

const useAuth = () => {
    const dispatch = useAppDispatch();

    const [loading, setLoading] = useState(false);

    const checkToken = async () => {
        const token = await AsyncStorage.getItem("token");
        if (token) {
            dispatch(setIsLoggedIn(true));
        } else {
            dispatch(setIsLoggedIn(false));
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
            checkToken();
        } catch (error: any) {
            dispatch(setError(error.response.data));
        }
        setLoading(false);
    };

    const logout = async () => {
        await AsyncStorage.removeItem("token");
        dispatch(setIsLoggedIn(false));
        dispatch(setError(undefined));
    };

    const clearError = () => {
        dispatch(setError(undefined));
    };

    return { loading, login, logout, clearError, checkToken };
}

export default useAuth;