import React from "react";
import { View, Text, TouchableOpacity, Modal, ModalProps } from "react-native";
import { styles } from "./styles";

type Props = ModalProps & {
  visible: boolean;
  closeModal(): void;
  deleteMatch(): void;
};

export function ModalDeleteMatch({
  visible,
  closeModal,
  deleteMatch,
  ...rest
}: Props) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      statusBarTranslucent
    >
      <View style={styles.modal}>
        <View style={styles.components}>
          <View style={styles.text}>
            <Text style={styles.normalText}>Deseja excluir a partida?</Text>
          </View>
          <View style={styles.buttons}>
            <TouchableOpacity style={styles.negative} onPress={closeModal}>
              <Text style={styles.title}>Não</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.positive} onPress={deleteMatch}>
              <Text style={styles.title}>Sim</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
