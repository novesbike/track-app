import React, { useState, useContext } from "react";
import { Alert, Image, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LOGO from "assets/noves-logo.png";
import global from "styles/global.styles";
import theme from "styles/theme.styles";

import Card from "components/auth/card/card.component";
import InputText from "components/auth/input/input.component";
import SocialButtons from "components/auth/buttons/socialbutton.component";
import SubmitButton from "components/auth/buttons/submit.component";
import LinkToScreen from "components/link-to-screen/linkToScreen.component";
import AuthContext from "context/auth.context";

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
  const { register } = useContext(AuthContext);

  const [fullName, setFullName] = useState("Thiago Alves");
  const [email, setEmail] = useState("teste@teste.com");
  const [password, setPassword] = useState("teste@123");
  const [confirmPassword, setConfirmPassword] = useState("teste@123");
  const [hidePassword, setHidePassword] = useState(true);

  const handleRegister = async () => {
    const account = {
      name: fullName,
      email: email,
      password: password,
    };

    try {
      await register(account);
      Alert.alert("Usuário Cadastrado");
    } catch (err) {
      Alert.alert(err);
    }
  };

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

        <SubmitButton mode="contained" onPress={handleRegister}>
          Cadastrar
        </SubmitButton>

        <SocialButtons text="cadastre-se com" />
      </Card>
    </SafeAreaView>
  );
}
