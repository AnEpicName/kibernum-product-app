import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen, ProductDetailScreen, ProductListScreen } from "../screens";
import { createStaticNavigation } from "@react-navigation/native";

const RootStack = createNativeStackNavigator({
    initialRouteName: "Login",
    screenOptions: {
        headerShown: false,
    },
    screens: {
        Login: {
            screen: LoginScreen,
            path: "login",
        },
        ProductDetail: {
            screen: ProductDetailScreen,
            path: "product-detail",
        },
        ProductList: {
            screen: ProductListScreen,
            path: "product-list",
        },
    },
});

const Navigation = createStaticNavigation(RootStack);

export default Navigation;