import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import theme from "styles/theme.styles";

const MainButton = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
      <View style={{ ...styles.button, ...props.style }}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    height: 50,
    width: 250,
    borderRadius: 7.5,
    marginBottom: 12,
  },

  buttonText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    padding: 10,
  },
});

export default MainButton;
