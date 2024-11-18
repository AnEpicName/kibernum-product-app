import { ActivityIndicator, Image, Pressable, ScrollView, Text, View } from "react-native";

import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Category, SizeSelector } from "@/components";
import { ProductDetailScreenProps } from "@/types/navigation";
import { useState } from "react";

const ProductDetailScreen = ({ route }: ProductDetailScreenProps) => {
  const { product } = route.params;

  const navigation = useNavigation();

  const [loading, setLoading] = useState(false);

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
            navigation.navigate("ProductList");
            setLoading(false);
          }, 2000);
        }}
      >
        {loading ?
          <ActivityIndicator size="small" color="#fff" />
          :
          <Text style={styles.addToCartButtonText}>Agregar al carrito</Text>
        }
      </Pressable>
    </View>
  );
};

export default ProductDetailScreen;