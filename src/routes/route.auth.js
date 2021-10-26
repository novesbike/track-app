import React from "react";
import { createStackNavigator } from "@react-navigation/stack";


import SignUpScreen from "screens/signIn/register";
import SignInScreen from "screens/signIn";
import ForgotPassScreen from "screens/signIn/forgotPass";

const AuthStack = createStackNavigator();

const AuthStackScreen = () => (
  <AuthStack.Navigator screenOptions={{ headerShown: false }}>
    <AuthStack.Screen name="SignIn" component={SignInScreen} />
    <AuthStack.Screen name="SignUp" component={SignUpScreen} />
    <AuthStack.Screen name="ForgotPass" component={ForgotPassScreen} />
  </AuthStack.Navigator>
);

export default AuthStackScreen;
