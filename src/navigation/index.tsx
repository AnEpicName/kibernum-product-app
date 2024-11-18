import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen, ProductDetailScreen, ProductListScreen } from "../screens";
import { NavigationContainer } from "@react-navigation/native";
import { useAppSelector } from "@app/hooks";
import { AuthSelector } from "@app/slices/authSlice";
import { ProductDetailScreenProps } from "@/types/navigation";
import { CustomHeader } from "@/components";
import { COLOURS } from "@/constants";

const Stack = createNativeStackNavigator();

const Navigation = () => {
    const auth = useAppSelector(AuthSelector);

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {auth.isLoggedIn ? (
                    <>
                        <Stack.Screen
                            name="ProductList"
                            component={ProductListScreen}
                            options={{
                                header: () => <CustomHeader/>,
                            }}
                        />
                        <Stack.Screen
                            name="ProductDetail"
                            options={{ 
                                headerShown: true, 
                                headerTitle: "Product Detail", 
                                headerTitleAlign: "center",
                                headerStyle: { backgroundColor: COLOURS.PRIMARY },
                                headerTintColor: COLOURS.WHITE,
                            }}
                        >
                            {({ route }: ProductDetailScreenProps) =>
                                <ProductDetailScreen route={route} />
                            }
                        </Stack.Screen>
                    </>
                ) : (
                    <Stack.Screen
                        name="Login"
                        component={LoginScreen}
                        options={{ headerShown: false }}
                    />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;