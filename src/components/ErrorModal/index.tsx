import { Modal, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";

import styles from "./styles";

interface Props {
    visible?: boolean;
    onClose?: () => void;
    message?: string;
}

const ErrorModal = ({ visible, onClose, message }: Props) => {
    return (
        <Modal
            visible={visible}
            animationType="slide"
            transparent={true}
        >
            <TouchableWithoutFeedback onPress={() => onClose!()}>
                <View style={styles.modalOverlay}>
                    <View style={styles.modalView}>
                        <TouchableOpacity style={styles.closeButton} onPress={() => onClose!()}>
                            <Text style={styles.closeButtonText}>X</Text>
                        </TouchableOpacity>
                        <Text style={styles.modalText}>{message}</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    )
}

export default ErrorModal;