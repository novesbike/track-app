import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Icons from "react-native-vector-icons/Ionicons";
import theme from "styles/theme.styles";

function Profile() {
  return (
    <View style={styles.profile}>
      <View>
        <Image style={styles.avatar} source={require("assets/avatar.jpg")} />
      </View>
      <View style={styles.welcome}>
        <Text style={styles.welcomeText}>Bem vindo</Text>
        <Text style={styles.name}>João Nobre</Text>
      </View>
      <View>
        <Icons name={"md-settings"} size={20} color="white" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profile: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: `center`,
    paddingHorizontal: theme.spacing(2),
    marginTop: theme.spacing(3),
  },

  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderColor: theme.colors.white,
    borderWidth: 1,
  },

  welcome: {
    flex: 1,
    padding: theme.spacing(2),
  },

  welcomeText: {
    color: theme.colors.white,
    fontFamily: theme.font.light,
  },

  name: {
    color: theme.colors.white,
    fontFamily: theme.font.regular,
    fontSize: 20,
    marginTop: 6,
  },
});

export default Profile;
