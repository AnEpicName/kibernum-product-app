import { UserRequests } from "@/api";
import { useAppDispatch, useAppSelector } from "@app/hooks";
import { setToken, setError, AuthSelector } from "@app/slices/authSlice";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";

const useAuth = () => {
    const dispatch = useAppDispatch();
    const auth = useAppSelector(AuthSelector);

    const navigation = useNavigation();

    useEffect(() => {
        if (auth.token) {
            navigation.navigate("ProductList" as never);
        } else {
            navigation.navigate("Login" as never);
        }
    }, [auth.token]);

    const login = async (username: string, password: string) => {
        try {
            const response = await UserRequests.loginUser(username, password);
            dispatch(setToken(response.data.token));
        } catch (error: any) {
            dispatch(setError(error.response.data));
        }
    };

    const clearError = () => {
        dispatch(setError(undefined));
    };

    return { login, clearError };
}

export default useAuth;