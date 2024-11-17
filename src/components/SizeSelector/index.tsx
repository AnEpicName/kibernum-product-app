import { Pressable, Text, View } from "react-native"

import styles from "./styles";
import { useState } from "react";

type Size = "S" | "M" | "L";

const SizeSelector = () => {
    const [size, setSize] = useState<Size>("S");

    return (
        <View style={styles.sizeSelector}>
            <Text>Tamaño:</Text>
            <Pressable style={size === "S" ? styles.selectedSizeButton : styles.sizeButton} onPress={() => setSize("S")}>
                <Text style={styles.sizeButtonText}>S</Text>
            </Pressable>
            <Pressable style={size === "M" ? styles.selectedSizeButton : styles.sizeButton} onPress={() => setSize("M")}>
                <Text style={styles.sizeButtonText}>M</Text>
            </Pressable>
            <Pressable style={size === "L" ? styles.selectedSizeButton : styles.sizeButton} onPress={() => setSize("L")}>
                <Text style={styles.sizeButtonText}>L</Text>
            </Pressable>
        </View>
    );
};

export default SizeSelector;