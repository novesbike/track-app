import React from "react";
import { StyleSheet, TouchableOpacity, Alert } from "react-native";
import { Feather } from "@expo/vector-icons";
import theme from "styles/theme.styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import api from "services/api";

function deleteActivity(props) {
  const route = useRoute();
  const navigation = useNavigation();

  const deleteActivity = () => {
    const {
      params: { id },
    } = route;

    Alert.alert(
      "Excluir atividade",
      "Tem certeza que deseja excluir a atividade?",
      [
        {
          text: "Não",
          onPress: () => {},
          style: "cancel",
        },
        {
          text: "Sim",
          onPress: async () => {
            await api.delete(`v1/activities/${id}`);
            navigation.reset({
              index: 0,
              routes: [
                {
                  name: "Home",
                },
              ],
            });
          },
        },
      ]
    );
  };

  return (
    <TouchableOpacity style={styles.container} onPress={deleteActivity}>
      <Feather name="trash-2" size={24} color={theme.colors.red} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "flex-end",
    justifyContent: "center",
    padding: 10,
  },
});

export default deleteActivity;
