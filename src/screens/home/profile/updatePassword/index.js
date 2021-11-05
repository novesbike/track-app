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

function UpdatePassword() {
  const [name, setName] = React.useState("João Nobre");
  return (
    <View style={styles.container}>
      <View style={styles.name}>
        <View>
          <View style={styles.btn}>
            <Text style={styles.text}>Senha atual</Text>
            <View style={styles.borderInput}>
              <TextInput
                style={styles.input}
                onChangeText={setName}
                placeholder={"******"}
                value={name}
                secureTextEntry
              />
            </View>
          </View>
          <View style={styles.btn}>
            <Text style={styles.text}>Nova senha</Text>
            <View style={styles.borderInput}>
              <TextInput
                style={styles.input}
                onChangeText={setName}
                placeholder={"******"}
                value={name}
                secureTextEntry
              />
            </View>
          </View>
          <View style={styles.btn}>
            <Text style={styles.text}>Confirmar nova senha</Text>
            <View style={styles.borderInput}>
              <TextInput
                style={styles.input}
                onChangeText={setName}
                placeholder={"******"}
                value={name}
                secureTextEntry
              />
            </View>
          </View>
        </View>
        <Button
          dark
          mode="outlined"
          color={theme.colors.primary}
          uppercase={false}
          labelStyle={styles.label}
          style={styles.button}
          onPress={() => Alert.alert("ainda não da")}
        >
          atualizar senha
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingHorizontal: theme.spacing(1),
    paddingTop: theme.spacing(4),
    backgroundColor: "white",
  },

  text: {
    marginTop: theme.spacing(3),
    fontFamily: theme.font.roboto.regular,
    color: theme.colors.grey[30],
  },

  input: {
    fontSize: theme.font.size.large,
    fontFamily: theme.font.roboto.light,
  },

  name: {
    flex: 1.2,
    width: "100%",
    paddingHorizontal: theme.spacing(5),
    justifyContent: "space-between",
  },

  borderInput: {
    borderBottomWidth: 1,
    borderColor: theme.colors.grey[30],
    paddingVertical: 8,
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

  btn: {
    marginBottom: theme.spacing(1),
  },
});

export default UpdatePassword;
