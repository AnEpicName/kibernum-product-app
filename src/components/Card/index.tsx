import { Product } from "@/types/product";
import { Image, Text, TouchableOpacity, View } from "react-native";

import styles from "./styles";

interface Props {
    product: Product;
    onPress: () => void;
}


const Card = ({ product, onPress }: Props) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.card}>
                <Image source={{ uri: product.image }} style={styles.productImage} />
                <Text style={styles.productTitle} numberOfLines={3} ellipsizeMode="tail">{product.title}</Text>
                <Text style={styles.productPrice}>${product.price}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default Card;