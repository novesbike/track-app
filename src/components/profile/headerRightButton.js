import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useActionSheet } from "@expo/react-native-action-sheet";
import { MaterialIcons } from "@expo/vector-icons";
import theme from "styles/theme.styles";

function editProfile() {
  const navigation = useNavigation();
  const { showActionSheetWithOptions } = useActionSheet();

  const updatePasswordHandler = () => navigation.navigate("UpdatePassword");

  const openActionSheet = () => {
    const options = ["Atualizar Senha", "Cancelar"];
    const destructiveButtonIndex = 1;
    const cancelButtonIndex = 1;
    const textStyle = {
      fontFamily: theme.font.roboto.medium,
    };

    showActionSheetWithOptions(
      {
        options,
        textStyle,
        cancelButtonIndex,
        destructiveButtonIndex,
      },
      (index) => {
        switch (index) {
          case 0:
            updatePasswordHandler();
            break;
          default:
            break;
        }
      }
    );
  };

  return (
    <TouchableOpacity style={styles.container} onPress={openActionSheet}>
      <MaterialIcons name="more-vert" size={24} color="black" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default editProfile;
