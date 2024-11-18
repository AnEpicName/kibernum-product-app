import { Modal, Pressable, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { useAuth } from "@/hooks";
import styles from "./styles";

interface Props {
    visible?: boolean;
    onClose?: () => void;
}
const CloseSessionModal = ({ visible, onClose }: Props) => {
    const { logout } = useAuth();
    return (
        <Modal
            visible={visible}
            animationType="fade"
            transparent={true}
            statusBarTranslucent={true}
        >
            <TouchableWithoutFeedback onPress={() => onClose!()}>
                <View style={styles.modalOverlay}>
                    <View style={styles.modalView}>
                        <TouchableOpacity style={styles.closeButton} onPress={() => onClose!()}>
                            <Text style={styles.closeButtonText}>X</Text>
                        </TouchableOpacity>
                        <Text style={styles.logoutText}>Are you sure you want to logout?</Text>
                        <Pressable style={styles.logoutButton} onPress={() => {
                            onClose!();
                            logout();
                        }}>
                            <Text style={styles.logoutButtonText}>Logout</Text>
                        </Pressable>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
};

export default CloseSessionModal;