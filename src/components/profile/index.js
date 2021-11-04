import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import theme from "styles/theme.styles";
import { MaterialIcons } from "@expo/vector-icons";

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
      <TouchableOpacity onPress={() => Alert.alert("sair")}>
        <View style={styles.icon}>
          <MaterialIcons name="logout" size={20} color="white" />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  profile: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: theme.spacing(1),
    marginTop: theme.spacing(2),
  },

  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
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
    fontSize: 22,
    marginTop: 5,
  },
  icon: {
    padding: 5,
  },
});

export default Profile;
