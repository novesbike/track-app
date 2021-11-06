import React from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";
import theme from "styles/theme.styles";

const height = Math.round(Dimensions.get("window").height);
const width = Math.round(Dimensions.get("window").width);

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    position: "absolute",
    alignItems: "center",
    padding: theme.spacing(5),
    justifyContent: "space-between",
    backgroundColor: theme.colors.white,
  },
  header: {
    marginTop: theme.spacing(5),
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 46,
    fontFamily: theme.font.roboto.bold,
    color: theme.colors.secondary,
    marginBottom: theme.spacing(1),
  },
  subtitle: {
    fontSize: theme.font.size.large,
    fontFamily: theme.font.roboto.bold,
    color: theme.colors.grey[25],
  },
  circle: {
    padding: 30,
    borderWidth: 10,
    borderRadius: 100,
    marginBottom: 100,
    borderColor: theme.colors.green,
  },
  label: {
    fontFamily: "open-sans-bold",
    fontSize: theme.font.size.medium,
  },
  button: {
    marginTop: theme.spacing(5),
    borderRadius: theme.spacing(4),
    borderColor: theme.colors.primary,
    borderWidth: 1,
    width: "100%",
  },
});

export function Success({ open }) {
  const navigation = useNavigation();

  const goToLogin = () => navigation.navigate("Login");

  if (open) {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Sucesso!</Text>
          <Text style={styles.subtitle}>Sua conta foi criada</Text>
        </View>

        <View style={styles.circle}>
          <MaterialCommunityIcons
            name="check-bold"
            size={100}
            color={theme.colors.green}
          />
        </View>

        <Button
          dark
          mode="outlined"
          color={theme.colors.primary}
          uppercase
          labelStyle={styles.label}
          style={styles.button}
          onPress={goToLogin}
        >
          Login
        </Button>
      </View>
    );
  } else return null;
}

export default Success;
