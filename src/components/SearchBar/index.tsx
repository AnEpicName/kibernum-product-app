import { TextInput, View } from "react-native"
import styles from "./styles";
import { useEffect, useState } from "react";
import { Product } from "@/types/product";
import { useProducts } from "@/hooks";

interface Props {
    onChangeText: (products: Product[]) => void;
}

const SearchBar = ({ onChangeText }: Props) => {

    const { data } = useProducts();

    const [searchText, setSearchText] = useState<string>("");

    useEffect(() => {
        onChangeText(data);
    }, [data]);

    useEffect(() => {
        if (searchText.length > 0) {
            const filteredProducts = data.filter((product) => {
                return product.title.toLowerCase().includes(searchText.toLowerCase());
            });
            onChangeText(filteredProducts);
        } else {
            onChangeText(data);
        }

    }, [searchText]);

    return (
        <View style={styles.searchBar}>
            <TextInput
                placeholder="Search for a product..."
                style={styles.searchInput}
                value={searchText}
                onChangeText={setSearchText}
            />
        </View>
    );
};

export default SearchBar;