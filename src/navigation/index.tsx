import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen, ProductDetailScreen, ProductListScreen } from "../screens";
import { createStaticNavigation, NavigationContainer, ParamListBase, RouteProp, StaticScreenProps } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAppSelector } from "@app/hooks";
import { AuthSelector } from "@app/slices/authSlice";
import { ProductDetailScreenProps } from "@/types/navigation";

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
                                headerShown: false 
                            }}
                
                        />
                        <Stack.Screen 
                            name="ProductDetail" 
                            options={{ headerShown: true, headerTitle: "Detalle del producto", headerTitleAlign: "center" }}
                        >
                             {({ route }: ProductDetailScreenProps) => 
                                <ProductDetailScreen route={route} />
                            }
                        </Stack.Screen>
                    </>
                ) : (
                    <Stack.Screen name="Login" component={LoginScreen} />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;