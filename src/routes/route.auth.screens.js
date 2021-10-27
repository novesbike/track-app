import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import RegisterScreen from "screens/auth/register/register";
import LoginScreen from "screens/auth/login/login";
import ForgotPasswordScreen from "screens/auth/forgotPassword/forgotPassword";

const AuthStack = createStackNavigator();

const AuthStackScreen = () => (
  <AuthStack.Navigator screenOptions={{ headerShown: false }}>
    <AuthStack.Screen name="Login" component={LoginScreen} />
    <AuthStack.Screen name="Register" component={RegisterScreen} />
    <AuthStack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
  </AuthStack.Navigator>
);

export default AuthStackScreen;
