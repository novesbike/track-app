import React from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import theme from "styles/theme.styles";

const styles = StyleSheet.create({
  label: {
    fontFamily: "open-sans-bold",
    fontSize: theme.font.size.medium,
  },
  button: {
    marginVertical: theme.spacing(5),
    borderRadius: theme.spacing(4),
  },
});

export default function SubmitButton({ children, onPress = () => {} }) {
  return (
    <Button
      dark
      mode="contained"
      color={theme.colors.primary}
      uppercase={false}
      labelStyle={styles.label}
      style={styles.button}
      onPress={onPress}
    >
      {children}
    </Button>
  );
}
