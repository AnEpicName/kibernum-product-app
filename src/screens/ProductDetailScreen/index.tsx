import { Button, Image, Pressable, ScrollView, Text, View } from "react-native";

import styles from "./styles";
import { StaticScreenProps, useRoute } from "@react-navigation/native";
import { Product } from "@/types/product";
import { Category, SizeSelector } from "@/components";
import { ProductDetailScreenProps } from "@/types/navigation";

const ProductDetailScreen = ({ route }: ProductDetailScreenProps) => {
  const { product } = route.params;

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
      >
        <Text style={styles.addToCartButtonText}>Agregar al carrito</Text>
      </Pressable>
    </View>

  );

};

export default ProductDetailScreen;