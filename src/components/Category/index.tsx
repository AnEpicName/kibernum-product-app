import { Text, View } from "react-native"

import styles from "./styles";

interface Props {
    category: string;
}

const Category = ({category}: Props) => {
    return (
        <View style={styles.categoryContainer}>
            <Text style={styles.categoryTitle}>Categoría:</Text>
            <Text style={styles.categoryName}>{category.toUpperCase()}</Text>
        </View>
    );
};

export default Category;