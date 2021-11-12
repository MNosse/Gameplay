import React from 'react';
import { View, Text, TouchableOpacity, Modal, ModalProps } from 'react-native';
import { styles } from './styles';

type Props = ModalProps & {
    visible: boolean;
    closeModal(): void;
    signOut(): void;
}

export function ModalSignOut({visible, closeModal, signOut, ...rest}: Props){
    return (
        <Modal
            visible={visible}
            transparent
            animationType='fade'
            statusBarTranslucent
        >
            <View style={styles.modal}>
                <View style={styles.components}>
                    <View style={styles.text}>
                        <Text style={styles.normalText}>Deseja sair do</Text>
                        <Text style={styles.boldHeading}>Game</Text>
                        <Text style={styles.boldPrimary}>Play</Text>
                        <Text style={styles.boldHeading}>?</Text>
                    </View>
                    <View style={styles.buttons}>
                        <TouchableOpacity style={styles.negative} onPress={closeModal}>
                            <Text style={styles.title}>
                                Não
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.positive} onPress={signOut}>
                            <Text style={styles.title}>
                                Sim
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
}