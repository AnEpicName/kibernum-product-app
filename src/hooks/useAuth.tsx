import { UserRequests } from "@/api";
import { useAppDispatch, useAppSelector } from "@app/hooks";
import { setToken, setError, AuthSelector } from "@app/slices/authSlice";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";

const useAuth = () => {
    const dispatch = useAppDispatch();
    const auth = useAppSelector(AuthSelector);

    const navigation = useNavigation();

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (auth.token) {
            navigation.navigate("ProductList" as never);
        } else {
            navigation.navigate("Login" as never);
        }
    }, [auth.token]);

    const login = async (username: string, password: string) => {
        if (!username || !password) {
            dispatch(setError("Please fill all the fields to sign in."));
            return;
        }
        setLoading(true);
        try {
            const response = await UserRequests.loginUser(username, password);
            dispatch(setToken(response.data.token));
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