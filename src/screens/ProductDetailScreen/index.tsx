import { Button, Image, Pressable, Text, View } from "react-native";

import styles from "./styles";
import { StaticScreenProps, useRoute } from "@react-navigation/native";
import { Product } from "@/types/product";
import { Category, SizeSelector } from "@/components";

type Props = StaticScreenProps<{
  product: Product;
}>

const ProductDetailScreen = ({ route }: Props) => {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.productImage} />
      <Text style={styles.productTitle} numberOfLines={3} ellipsizeMode="tail">{product.title}</Text>
      <Text style={styles.productPrice}>${product.price}</Text>
      <SizeSelector />
      <Text style={styles.productDescription}>{product.description}</Text>
      <Category category={product.category} />
      <Pressable style={styles.addToCartButton}>
        <Text style={styles.addToCartButtonText}>Agregar al carrito</Text>
      </Pressable>
    </View>
  );

};

export default ProductDetailScreen;