import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen, ProductDetailScreen, ProductListScreen } from "../screens";
import { NavigationContainer } from "@react-navigation/native";
import { useAppSelector } from "@app/hooks";
import { AuthSelector } from "@app/slices/authSlice";
import { ProductDetailScreenProps } from "@/types/navigation";
import { CloseSessionModal, CustomHeader } from "@/components";
import { useState } from "react";

const Stack = createNativeStackNavigator();

const Navigation = () => {
    const auth = useAppSelector(AuthSelector);

    const [showModal, setShowModal] = useState(false);

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {auth.isLoggedIn ? (
                    <>
                        <Stack.Screen
                            name="ProductList"
                            component={ProductListScreen}
                            options={{
                                header: () => <CustomHeader onProfilePicPress={() => setShowModal(true)} />,
                            }}
                        />
                        <Stack.Screen
                            name="ProductDetail"
                            options={{ headerShown: true, headerTitle: "Product Detail", headerTitleAlign: "center" }}
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
            <CloseSessionModal 
                visible={showModal} 
                onClose={() => setShowModal(false)}
            />
        </NavigationContainer>
    )
}

export default Navigation;