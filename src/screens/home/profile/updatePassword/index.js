import React from "react";
import { View, Text, StyleSheet, TextInput, Alert } from "react-native";
import theme from "styles/theme.styles";
import { Button } from "react-native-paper";

function UpdatePassword() {
  const [currentPassword, setCurrentPassword] = React.useState();
  const [newPassword, setNewPassword] = React.useState();
  const [confirmPassword, setConfirmPassword] = React.useState();

  return (
    <View style={styles.container}>
      <View style={styles.passwordArea}>
        <View>
          <View style={styles.row}>
            <Text style={styles.labelInput}>Senha atual</Text>
            <View style={styles.borderInput}>
              <TextInput
                style={styles.textInput}
                value={currentPassword}
                onChangeText={setCurrentPassword}
                placeholder={"******"}
                secureTextEntry
              />
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.labelInput}>Nova senha</Text>
            <View style={styles.borderInput}>
              <TextInput
                style={styles.textInput}
                value={newPassword}
                onChangeText={setNewPassword}
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
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                placeholder={"**********"}
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
});

export default UpdatePassword;
