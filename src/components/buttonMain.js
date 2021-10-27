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
    height: 40,
    width: 120,
    borderRadius: 7.5,
  },
  buttonText: {
    color: "black",
    fontSize: 18,
    textAlign: "center",
    marginTop: 8,
  },
});

export default MainButton;
