import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

import { FontAwesome } from "@expo/vector-icons";

import GOOGLE_LOGO from "assets/google.png";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function SocialButton({ text }) {
  // return (
  //   <>
  //     <Text style={{ textAlign: "center", color: "#616161", fontSize: 14 }}>
  //       ou <Text style={{ fontWeight: "bold" }}>{text}</Text>
  //     </Text>

  //     <View style={styles.containerButtons}>
  //       <TouchableOpacity style={[styles.inputButton, { marginRight: 15 }]}>
  //         <Image source={GOOGLE_LOGO} style={{ width: 26, height: 26 }} />
  //       </TouchableOpacity>
  //       <TouchableOpacity style={styles.inputButton}>
  //         <FontAwesome name="facebook" size={24} color="#1454A7" />
  //       </TouchableOpacity>
  //     </View>
  //   </>
  // );

  return null;
}

const styles = StyleSheet.create({
  containerButtons: {
    marginTop: 25,
    flexDirection: "row",
    justifyContent: "center",
  },
  inputButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FBFBFB",
    width: 80,
    height: 40,
    padding: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },
});
