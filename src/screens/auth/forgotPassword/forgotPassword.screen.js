import React, { useState } from "react";
import { Alert, Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LOGO from "assets/noves-logo.png";
import theme from "styles/theme.styles";

import Card from "components/auth/card/card.component";
import InputText from "components/auth/input/input.component";
import SubmitButton from "components/auth/buttons/submit.component";
import LinkToScreen from "components/link-to-screen/linkToScreen.component";

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

function ForgotPassword() {
  const [email, setEmail] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.centerLogo}>
        <Image source={LOGO} style={{ width: 300 }} />
      </View>

      <Card
        title="Esqueci a senha"
        subtitle="Utilize o seu email para recuperar a senha"
      >
        <InputText
          gutterBottom
          placeholder="E-mail"
          leftIcon="email"
          value={email}
          onChangeText={setEmail}
        />

        <View style={[global.row, global.paragraph]}>
          <LinkToScreen text="Faça login" to="Login" />
        </View>

        <SubmitButton mode="contained" onPress={() => Alert.alert("logou!!")}>
          Enviar código
        </SubmitButton>
      </Card>
    </SafeAreaView>
  );
}

export default ForgotPassword;
