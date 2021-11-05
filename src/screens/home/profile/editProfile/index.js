import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import theme from "styles/theme.styles";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

function editProfile() {
  const [name, setName] = React.useState("João Nobre");
  const navigation = useNavigation();

  const updatePasswordHandler = () => navigation.navigate("UpdatePassword");
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <TouchableOpacity>
          <Image style={styles.avatar} source={require("assets/avatar.jpg")} />
        </TouchableOpacity>
        <Text style={styles.text}>Trocar de foto</Text>
      </View>
      <View style={styles.name}>
        <View>
          <View style={styles.borderInput}>
            <TextInput
              style={styles.input}
              onChangeText={setName}
              value={name}
            />
          </View>
          <Text style={styles.text}>Pode ser seu nome ou apelido</Text>
        </View>
        <Button
          dark
          mode="outlined"
          color={theme.colors.primary}
          uppercase={false}
          labelStyle={styles.label}
          style={styles.button}
          onPress={updatePasswordHandler}
        >
          salvar
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: theme.spacing(1),
    paddingTop: theme.spacing(4),
    backgroundColor: "white",
  },

  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderColor: theme.colors.white,
    borderWidth: 1,
  },

  image: {
    flex: 1,
    alignItems: "center",
    paddingTop: theme.spacing(5),
  },

  text: {
    marginTop: theme.spacing(3),
    fontFamily: theme.font.roboto.medium,
    color: theme.colors.grey[25],
    textAlign: "center",
  },

  input: {
    fontSize: 40,
    fontFamily: theme.font.roboto.bold,
    textAlign: "center",
  },

  name: {
    flex: 1.2,
    width: "100%",
    paddingHorizontal: theme.spacing(5),
    justifyContent: "space-between",
  },

  borderInput: {
    borderBottomWidth: 1,
    borderColor: theme.colors.grey[25],
    padding: 5,
    width: "100%",
  },

  label: {
    fontFamily: "open-sans-bold",
    fontSize: theme.font.size.medium,
  },
  button: {
    marginVertical: theme.spacing(5),
    borderRadius: theme.spacing(4),
    borderColor: theme.colors.primary,
    borderWidth: 0.5,
  },
});

export default editProfile;
