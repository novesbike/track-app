import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SignUpScreen from "screens/auth/signUp/signUp.component.js";
import SignInScreen from "screens/auth/signIn/signIn.component.js";
import ForgotPassScreen from "screens/auth/forgotPass/forgotPass.component.js";

const AuthStack = createStackNavigator();

const AuthStackScreen = () => (
  <AuthStack.Navigator screenOptions={{ headerShown: false }}>
    <AuthStack.Screen name="SignIn" component={SignInScreen} />
    <AuthStack.Screen name="SignUp" component={SignUpScreen} />
    <AuthStack.Screen name="ForgotPass" component={ForgotPassScreen} />
  </AuthStack.Navigator>
);

export default AuthStackScreen;
