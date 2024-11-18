import { ActivityIndicator, FlatList, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Card, ErrorModal, SearchBar } from "@/components";
import { useEffect, useState } from "react";
import { Product } from "@/types/product";
import { useNavigation } from "@react-navigation/native";
import { useAppSelector } from "@app/hooks";
import { ProductSelector, setError } from "@app/slices/productSlice";

import styles from "./styles";
import { useAuth } from "@/hooks";

const ProductListScreen = () => {

  const navigation = useNavigation();

  const product = useAppSelector(ProductSelector);

  const { checkToken } = useAuth();

  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    checkToken();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar onChangeText={setFilteredProducts} />
      {!product.loading ?
        <>
          <FlatList
            data={filteredProducts}
            renderItem={({ item }) =>
              <Card product={item} onPress={() => navigation.navigate("ProductDetail", { product: item })} />
            }
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            style={styles.productList}
            ListEmptyComponent={<Text style={styles.emptyListText}>No products available</Text>}
          />
        </>
        :
        <ActivityIndicator size="large" style={styles.loading} />
      }
      <ErrorModal
        visible={product.error !== undefined}
        onClose={() => setError(undefined)}
        message={product.error}
      />
    </SafeAreaView>
  );
};

export default ProductListScreen;