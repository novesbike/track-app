import React, { useState } from "react";
import { Alert, Image, StyleSheet, View } from "react-native";
import LOGO from "assets/noves-logo.png";
import global from "styles/global.styles";
import theme from "styles/theme.styles";

import Card from "components/auth/card/card.component";
import InputText from "components/auth/input/input.component";
import SocialButtons from "components/auth/buttons/socialbutton.component";
import SubmitButton from "components/auth/buttons/submit.component";
import LinkToScreen from "components/link-to-screen/linkToScreen.component";
import { SafeAreaView } from "react-native-safe-area-context";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.secondary,
    justifyContent: "space-between",
    alignItems: "center",
  },
  centerLogo: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.centerLogo}>
        <Image source={LOGO} style={{ width: 300 }} />
      </View>

      <Card
        title="Cadastre-se"
        subtitle="Faça o seu cadastro com o email e senha"
      >
        <InputText
          placeholder="Nome completo"
          leftIcon="account"
          value={fullName}
          onChangeText={setFullName}
        />

        <InputText
          placeholder="E-mail"
          leftIcon="email"
          value={email}
          onChangeText={setEmail}
        />

        <InputText
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={hidePassword}
          leftIcon={hidePassword ? "eye-off" : "eye"}
          colorIcon={!hidePassword && theme.colors.primary}
          onPressIcon={() => setHidePassword(!hidePassword)}
        />

        <InputText
          gutterBottom
          placeholder="Confirme a sua senha"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={hidePassword}
        />

        <View style={[global.row, global.paragraph]}>
          <LinkToScreen text="Já possui conta? Faça login" to="Login" />
        </View>

        <SubmitButton
          mode="contained"
          onPress={() => Alert.alert("cadastrou!!")}
        >
          Cadastrar
        </SubmitButton>

        <SocialButtons text="cadastre-se com" />
      </Card>
    </SafeAreaView>
  );
}
