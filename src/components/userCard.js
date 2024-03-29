import React from "react";
import { Text } from "react-native";
import {
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
  Image,
  StyleSheet,
  View,
} from "react-native";
import theme from "styles/theme.styles";

const userCard = ({ firstName, lastName, email, style }) => {
  let TouchableCmp = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <TouchableCmp>
      <View style={{ ...styles.container, ...style }}>
        <View style={{ padding: 5 }}>
          <Image
            style={styles.imageContainer}
            source={require("assets/default-profile-icon.png")}
          />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.title}>
            {firstName} {lastName}
          </Text>
          <Text style={styles.subTitle}>{email}</Text>
        </View>
      </View>
    </TouchableCmp>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    height: 110,
    backgroundColor: theme.colors.secondary,
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    height: 90,
    width: 90,
    borderRadius: 10,
    marginLeft: 10,
    marginTop: 5,
  },
  title: {
    fontFamily: theme.font.regular,
    fontSize: 26,
    color: "#fff",
  },
  subTitle: {
    fontFamily: theme.font.regular,
    fontSize: 18,
    color: "gray",
    padding: 10,
    paddingLeft: 20,
  },
});

export default userCard;
