import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native";
import global from "styles/global.styles";

export default function LinkToScreen({ text, to }) {
  const navigation = useNavigation();
  return (
    <Text style={global.textLink} onPress={() => navigation.navigate(to)}>
      {text}
    </Text>
  );
}
