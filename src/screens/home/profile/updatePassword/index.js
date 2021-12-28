import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import theme from "styles/theme.styles";
import api from "services/api";

const def = {
  auth: false,
  msg: "",
};

function UpdatePassword() {
  const navigation = useNavigation();
  const [loading, setLoading] = React.useState(false);
  const [current_password, setCurrentPassword] = React.useState();
  const [password, setPassword] = React.useState();
  const [password_confirmation, setPasswordConfirmation] = React.useState();
  const [error, setError] = React.useState(def);

  const updatePassword = async () => {
    try {
      setLoading(true);
      setError(def);

      if (password_confirmation !== password) {
        setError({
          auth: false,
          msg: "As senhas não coincidem",
        });
        return false;
      }

      if (!password || password.lenght < 8) {
        setError({
          auth: false,
          msg: "A senha deve conter no mínimo 8 caracteres",
        });

        return false;
      }

      await api.put("auth/user/password", {
        current_password,
        password,
        password_confirmation,
      });

      navigation.navigate("Profile");
    } catch (err) {
      console.log(err.response);
      setError({
        auth: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.passwordArea}>
        <View>
          <View style={styles.row}>
            <Text style={styles.labelInput}>Senha atual</Text>
            <View style={styles.borderInput}>
              <TextInput
                style={styles.textInput}
                value={current_password}
                onChangeText={setCurrentPassword}
                placeholder={"******"}
                secureTextEntry
              />
            </View>
            {error.auth && <Text style={styles.errorMsg}>Senha Incorreta</Text>}
          </View>
          <View style={styles.row}>
            <Text style={styles.labelInput}>Nova senha</Text>
            <View style={styles.borderInput}>
              <TextInput
                style={styles.textInput}
                value={password}
                onChangeText={setPassword}
                placeholder={"**********"}
                secureTextEntry
              />
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.labelInput}>Confirmar nova senha</Text>
            <View style={styles.borderInput}>
              <TextInput
                style={styles.textInput}
                value={password_confirmation}
                onChangeText={setPasswordConfirmation}
                placeholder={"**********"}
                secureTextEntry
              />
            </View>
            {error && !error.auth && (
              <Text style={styles.errorMsg}>{error.msg}</Text>
            )}
          </View>
        </View>
        <Button
          dark
          mode="outlined"
          color={theme.colors.primary}
          uppercase={false}
          loading={loading}
          labelStyle={styles.label}
          style={styles.button}
          onPress={updatePassword}
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
    backgroundColor: "white",
    padding: theme.spacing(5),
  },

  passwordArea: {
    flex: 1,
    width: "100%",
    justifyContent: "space-between",
  },

  row: {
    marginBottom: theme.spacing(5),
  },

  labelInput: {
    fontFamily: theme.font.roboto.medium,
    fontSize: theme.font.size.large,
    color: theme.colors.grey[25],
    marginBottom: 10,
  },

  borderInput: {
    borderBottomWidth: 1,
    borderColor: theme.colors.grey[25],
    width: "100%",
  },

  textInput: {
    fontSize: theme.font.size.large,
    paddingVertical: 5,
    fontFamily: theme.font.roboto.light,
  },

  label: {
    fontFamily: "open-sans-bold",
    fontSize: theme.font.size.medium,
  },
  button: {
    borderRadius: theme.spacing(4),
    borderColor: theme.colors.primary,
    borderWidth: 0.5,
  },
  errorMsg: {
    fontFamily: theme.font.roboto.regular,
    color: theme.colors.red,
    marginTop: 5,
  },
});

export default UpdatePassword;
