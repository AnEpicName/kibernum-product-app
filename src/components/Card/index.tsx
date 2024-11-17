import { Product } from "@/types/product";
import { Image, Text, View } from "react-native";

import styles from "./styles";

interface Props {
    product: Product;
}


const Card = ({ product }: Props) => {
    return (
        <View style={styles.card}>
            <Image source={{ uri: product.image }} style={styles.productImage} />
            <Text style={styles.productTitle} numberOfLines={3} ellipsizeMode="tail">{product.title}</Text>
            <Text style={styles.productPrice}>${product.price}</Text>
        </View>
    );
};

export default Card;