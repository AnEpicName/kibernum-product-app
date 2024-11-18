import { Image, Text, TouchableOpacity, View } from "react-native";

import styles from "./styles";

interface Props {
    onProfilePicPress?: () => void;
}

const CustomHeader = ({ onProfilePicPress }: Props) => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.title}>Kibernum Store</Text>
            <TouchableOpacity style={styles.profilePicContainer} onPress={onProfilePicPress}>
                <Text style={styles.userName}>John Doe</Text>
                <Image 
                    source={require("../../assets/kibernum_logo.png")}
                    style={styles.profilePic} 
                />
            </TouchableOpacity>
        </View>
    );
};

export default CustomHeader;