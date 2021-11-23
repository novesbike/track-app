import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import theme from "styles/theme.styles";

function deleteActivity() {
  return (
    <TouchableOpacity style={styles.container}>
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
