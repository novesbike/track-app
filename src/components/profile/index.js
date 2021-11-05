import React, { useContext } from "react";
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
import { useNavigation } from "@react-navigation/native";
import AuthContext from "context/auth.context";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function Profile() {
  const { fakeLogout } = useContext(AuthContext);
  const navigation = useNavigation();

  const updateProfileHandler = () => navigation.navigate("UpdateProfile");

  return (
    <View style={styles.profile}>
      <View>
        <TouchableOpacity onPress={updateProfileHandler}>
          <Image style={styles.avatar} source={require("assets/avatar.jpg")} />
          <View style={styles.editAvatar}>
            <MaterialCommunityIcons
              name="pencil"
              size={14}
              color={theme.colors.primary}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.welcome}>
        <Text style={styles.welcomeText}>Bem vindo</Text>
        <Text style={styles.name}>João Nobre</Text>
      </View>
      <TouchableOpacity onPress={fakeLogout}>
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

  editAvatar: {
    width: 20,
    height: 20,
    backgroundColor: theme.colors.white,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    position: "absolute",
    right: -2,
    bottom: -2,
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
