import React, { useState, useContext } from "react";
import { Alert, Image, StyleSheet, View } from "react-native";
import LOGO from "assets/noves-logo.png";
import global from "styles/global.styles";
import theme from "styles/theme.styles";
import AuthContext from "context/auth.context";

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
});

export default function Login({ navigation }) {
  const [email, setEmail] = useState("teste@teste.com");
  const [password, setPassword] = useState("teste@123");
  const [hidePassword, setHidePassword] = useState(true);
  const [loading, setloading] = useState(false);
  const { login } = useContext(AuthContext);

  const handleLogin = async () => {
    try {
      setloading(true);
      await login(email, password);
    } catch (err) {
      Alert.alert(err);
    } finally {
      setloading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={global.center}>
        <Image source={LOGO} style={{ width: 300, marginTop: 40 }} />
      </View>

      <Card title="Login" subtitle="Faça login com o seu email e senha">
        <InputText
          placeholder="E-mail"
          leftIcon="email"
          value={email}
          onChangeText={setEmail}
        />
        <InputText
          gutterBottom
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={hidePassword}
          leftIcon={hidePassword ? "eye-off" : "eye"}
          colorIcon={!hidePassword && theme.colors.primary}
          onPressIcon={() => setHidePassword(!hidePassword)}
        />

        <View style={[global.row, global.paragraph]}>
          <LinkToScreen text="Esqueceu a senha?" to="ForgotPassword" />
          <LinkToScreen text="Não tem conta? Cadastre-se" to="Register" />
        </View>

        <SubmitButton loading={loading} mode="contained" onPress={handleLogin}>
          Login
        </SubmitButton>

        <SocialButtons text="entre com" />
      </Card>
    </SafeAreaView>
  );
}
