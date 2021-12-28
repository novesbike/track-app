import React, { useContext, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import theme from "styles/theme.styles";
import { MaterialIcons } from "@expo/vector-icons";
import { Avatar } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import AuthContext from "context/auth.context";

function Profile() {
  const { logout, user } = useContext(AuthContext);
  const navigation = useNavigation();
  const updateProfileHandler = () => navigation.navigate("UpdateProfile");

  return (
    <View style={styles.profile}>
      <View style={styles.avatar}>
        <Avatar
          size="medium"
          rounded
          overlayContainerStyle={{
            backgroundColor: theme.colors.primary,
            borderColor: theme.colors.white,
          }}
          title={user.name.charAt(0)}
          onPress={updateProfileHandler}
          source={{ uri: user.avatar }}
        >
          <Avatar.Accessory size={16} />
        </Avatar>
      </View>
      <View style={styles.welcome}>
        <Text style={styles.welcomeText}>Bem vindo</Text>
        <Text style={styles.name}>{user.name}</Text>
      </View>
      <TouchableOpacity onPress={logout}>
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
    paddingHorizontal: theme.spacing(1),
    marginTop: theme.spacing(2),
  },

  avatar: {
    alignSelf: "flex-start",
    borderColor: theme.colors.grey[20],
    borderRadius: 100,
    borderWidth: 1,
  },

  welcome: {
    flex: 1,
    paddingHorizontal: theme.spacing(2),
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
