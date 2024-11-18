import { ActivityIndicator, Image, Pressable, ScrollView, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Category, SizeSelector } from "@/components";
import { ProductDetailScreenProps } from "@/types/navigation";
import { useEffect, useState } from "react";

import styles from "./styles";
import { useAuth } from "@/hooks";

const ProductDetailScreen = ({ route }: ProductDetailScreenProps) => {
  const { product } = route.params;

  const navigation = useNavigation();

  const { checkToken } = useAuth();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    checkToken();
  }, []);

  return (
    <View style={styles.container} >
      <ScrollView 
        contentContainerStyle={styles.contentContainer} 
      >
        <Image source={{ uri: product.image }} style={styles.productImage} />
        <Text style={styles.productTitle} numberOfLines={3} ellipsizeMode="tail">{product.title}</Text>
        <Text style={styles.productPrice}>${product.price}</Text>
        <SizeSelector />
        <Text style={styles.productDescription}>{product.description}</Text>
        <Category category={product.category} />
      </ScrollView>
      <Pressable 
        style={styles.addToCartButton}
        android_ripple={{ color: "#59B6EB" }}
        onPress={() => {
          setLoading(true);
          setTimeout(() => {
            navigation.navigate("ProductList" as never);
            setLoading(false);
          }, 2000);
        }}
      >
        {loading ?
          <ActivityIndicator size="small" color="#fff" />
          :
          <Text style={styles.addToCartButtonText}>Add to cart</Text>
        }
      </Pressable>
    </View>
  );
};

export default ProductDetailScreen;