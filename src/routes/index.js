import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AuthContext from "../context/auth.context";
import Splash from "../screens/splash";
import AuthStack from "./route.auth";

const RootStack = createStackNavigator();

export default () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <NavigationContainer>
      <RootStack.Navigator headerMode="none">
        {isLoggedIn ? (
          <Splash />
        ) : (
          <RootStack.Screen
            name="Auth"
            component={AuthStack}
            options={{ animationEnabled: false }}
          />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
