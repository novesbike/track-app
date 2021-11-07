import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AuthContext from "../context/auth.context";
import theme from "styles/theme.styles";

// Route Screens
import AuthRoute from "./route.auth";
import HomeRoute from "./route.home";
import TrackingRoute from "./route.tracking";
import TrainingRoute from "./route.training";

const Tab = createBottomTabNavigator();
const Root = createStackNavigator();

const TabBottomScreens = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: theme.colors.primary,
      style: { paddingBottom: 1 },
      labelStyle: { bottom: 4 },
    }}
  >
    <Tab.Screen
      name="Home"
      component={HomeRoute}
      options={{
        tabBarLabel: "Home",
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
        tabBarBadge: null,
      }}
    />
    <Tab.Screen
      name="Tracking"
      component={TrackingRoute}
      options={{
        tabBarLabel: "Iniciar",
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="bike" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Training"
      component={TrainingRoute}
      options={{
        tabBarLabel: "Treino",
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="clipboard-text-outline"
            color={color}
            size={size}
          />
        ),
        tabBarBadge: null,
      }}
    />
  </Tab.Navigator>
);

export default () => {
  const { isLogged } = useContext(AuthContext);

  return (
    <NavigationContainer>
      <Root.Navigator headerMode="none">
        {isLogged ? (
          <Root.Screen
            name="App"
            component={TabBottomScreens}
            options={{ animationEnabled: false }}
          />
        ) : (
          <Root.Screen
            name="Auth"
            component={AuthRoute}
            options={{ animationEnabled: false }}
          />
        )}
      </Root.Navigator>
    </NavigationContainer>
  );
};
