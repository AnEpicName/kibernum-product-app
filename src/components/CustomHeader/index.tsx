import { Image, Text, TouchableOpacity, View } from "react-native";

import styles from "./styles";
import { useState } from "react";
import CloseSessionModal from "../CloseSessionModal";

const CustomHeader = () => {

    const [showModal, setShowModal] = useState(false);

    return (
        <View style={styles.headerContainer}>
            <Text style={styles.title}>Kibernum Store</Text>
            <TouchableOpacity style={styles.profilePicContainer} onPress={() => setShowModal(true)}>
                <Text style={styles.userName}>John Doe</Text>
                <Image
                    source={require("../../assets/kibernum_logo.png")}
                    style={styles.profilePic}
                />
            </TouchableOpacity>
            <CloseSessionModal
                visible={showModal}
                onClose={() => setShowModal(false)}
            />
        </View>
    );
};

export default CustomHeader;