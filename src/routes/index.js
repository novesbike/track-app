import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AuthContext from "../context/auth.context";

import AuthScreens from "./route.auth.screens";
import BottomTabScreens from "./route.bottom-tabs";

const Root = createStackNavigator();

export default () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <NavigationContainer>
      <Root.Navigator headerMode="none">
        {!isLoggedIn ? (
          <Root.Screen
            name="App"
            component={BottomTabScreens}
            options={{ animationEnabled: false }}
          />
        ) : (
          <Root.Screen
            name="Auth"
            component={AuthScreens}
            options={{ animationEnabled: false }}
          />
        )}
      </Root.Navigator>
    </NavigationContainer>
  );
};
