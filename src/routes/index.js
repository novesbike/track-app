import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AuthContext from "../context/auth.context";

import AuthScreens from "./route.auth.screens";
import BottomTabScreens from "./route.bottom-tabs";

const Root = createStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerStack = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Home" component={BottomTabScreens} />
  </Drawer.Navigator>
);

export default () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <NavigationContainer>
      <Root.Navigator headerMode="none">
        {!isLoggedIn ? (
          <Root.Screen
            name="App"
            component={DrawerStack}
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
