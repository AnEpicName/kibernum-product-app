import { FlatList, Text, View } from "react-native";

import styles from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { Card, SearchBar } from "@/components";
import { useState } from "react";
import { Product } from "@/types/product";
import { useNavigation } from "@react-navigation/native";

const ProductListScreen = () => {

  const navigation = useNavigation();

  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={filteredProducts}
        renderItem={({ item }) => 
          <Card product={item} onPress={() => navigation.navigate("ProductDetail" as never, { product: item })} />
        }
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        style={styles.productList}
        ListEmptyComponent={<Text>No hay productos disponibles</Text>}
        ListHeaderComponent={<SearchBar onChangeText={setFilteredProducts}/>}
      />
    </SafeAreaView>

  );
};

export default ProductListScreen;