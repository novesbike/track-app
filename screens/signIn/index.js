import React, { useState } from "react";
import { View, Image, Text, StyleSheet, Alert, TextInput } from "react-native";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button as Submit } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";

import LOGO from "../../logos/noves-logo.png";
import SocialButtons from "../../components/socialButtons";

export default function SignIn({ navigation, signIn }) {
  const [input, setInput] = useState("");
  const [hidePass, setHidePass] = useState(true);

  const Links = () => (
    <View style={styles.links}>
      <Text style={{ color: "#FF7300", fontSize: 12 }} onPress={() => Alert.alert("apertou")}>
        Esqueceu a senha?
      </Text>
      <Text style={{ color: "#FF7300", fontSize: 12 }} onPress={() => Alert.alert("apertou")}>
        Não tem conta? Cadastre-se
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Image source={LOGO} style={{ width: 300 }} />
      </View>

      <View style={styles.loginbox}>
        <View>
          <Text style={styles.title}>Login</Text>
          <Text style={{ color: "#616161", fontSize: 14 }}>Faça login com o seu email e senha</Text>
        </View>

        <View style={styles.subcontainer}>
          <View style={styles.containerInput}>
            <TextInput placeholder='E-mail' style={styles.labelInput} />
            <Icon name='email' size={20} color='#757575' />
          </View>

          <View style={[styles.containerInput, { marginBottom: 15 }]}>
            <TextInput
              style={styles.labelInput}
              placeholder='Senha'
              value={input}
              onChangeText={value => setInput(value)}
              secureTextEntry={hidePass}
            />
            <TouchableOpacity style={styles.icon} onPress={() => setHidePass(!hidePass)}>
              <Icon name={hidePass ? "eye" : "eye-off"} size={20} color={hidePass ? "#757575" : "#FF7300"} />
            </TouchableOpacity>
          </View>
          <Links />
        </View>

        <Submit mode='contained' uppercase={false} style={styles.submit} onPress={() => Alert.alert("logou!!")}>
          Login
        </Submit>

        <SocialButtons text='entre com' />
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
    marginVertical: 30,
  },
  containerInput: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "#000000",
    borderBottomWidth: 0.75,
    marginBottom: 30,
  },
  labelInput: {
    flex: 1,
    padding: 0,
    paddingBottom: 5,
    fontSize: 16,
  },
  links: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  submit: {
    backgroundColor: "#FF7300",
    borderRadius: 20,
    marginVertical: 30,
  },
});
