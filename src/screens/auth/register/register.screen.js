import React, { useState } from "react";
import { Alert, Image, StyleSheet, Text, TextInput, View } from "react-native";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button as Submit } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";

import LOGO from "assets/noves-logo.png";
import SocialButtons from "components/auth/buttons/socialbutton.component";

export default function Register({ navigation }) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);

  const Links = () => (
    <View style={styles.links}>
      <Text
        style={{ color: "#FF7300", fontSize: 12 }}
        onPress={() => navigation.navigate("Login")}
      >
        Já possui conta? Faça login
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flex: 1,
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image source={LOGO} style={{ width: 300 }} />
      </View>

      <View style={styles.loginbox}>
        <View>
          <Text style={styles.title}>Cadastre-se</Text>
          <Text style={{ color: "#616161", fontSize: 14 }}>
            Faça o seu cadastro com o email e senha
          </Text>
        </View>

        <View style={styles.subcontainer}>
          <View style={styles.containerInput}>
            <TextInput placeholder="Nome" style={styles.labelInput} />
            <View style={{ padding: 5 }}>
              <Icon name="account" size={20} color="#757575" />
            </View>
          </View>

          <View style={styles.containerInput}>
            <TextInput placeholder="E-mail" style={styles.labelInput} />
            <View style={{ padding: 5 }}>
              <Icon name="email" size={20} color="#757575" />
            </View>
          </View>

          <View style={[styles.containerInput]}>
            <TextInput
              style={styles.labelInput}
              placeholder="Senha"
              value={password}
              onChangeText={(value) => setPassword(value)}
              secureTextEntry={hidePassword}
            />
            <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
              <View style={{ padding: 5 }}>
                <Icon
                  name={hidePassword ? "eye-off" : "eye"}
                  size={20}
                  color={hidePassword ? "#757575" : "#FF7300"}
                />
              </View>
            </TouchableOpacity>
          </View>

          <View style={[styles.containerInput, { marginBottom: 15 }]}>
            <TextInput
              style={styles.labelInput}
              placeholder="Confirme a sua senha"
              value={confirmPassword}
              onChangeText={(value) => setConfirmPassword(value)}
              secureTextEntry={hidePassword}
            />
          </View>

          <Links />
        </View>

        <Submit
          mode="contained"
          uppercase={false}
          style={styles.submit}
          onPress={() => Alert.alert("cadastrou!!")}
        >
          Cadastrar
        </Submit>

        <SocialButtons text="cadastre-se com" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#293B2F",
    justifyContent: "space-between",
    alignItems: "center",
  },
  loginbox: {
    padding: 30,
    width: "100%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title: {
    fontSize: 24,
    marginVertical: 5,
    color: "#FF7300",
    fontWeight: "bold",
  },
  subcontainer: {
    paddingVertical: 30,
  },
  containerInput: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "#ddd",
    borderBottomWidth: 0.75,
    marginBottom: 30,
  },
  labelInput: {
    flex: 1,
    padding: 0,
    paddingVertical: 5,
    fontSize: 16,
  },
  links: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  submit: {
    backgroundColor: "#FF7300",
    borderRadius: 20,
    marginTop: 15,
    marginBottom: 30,
  },
});
