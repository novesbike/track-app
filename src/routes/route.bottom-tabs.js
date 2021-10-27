import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreens from "./route.home.screens";
import TrackingScreens from "./route.tracking.screens";
import TrainingScreens from "./route.training.screens";

const Tabs = createBottomTabNavigator();

export default () => (
  <Tabs.Navigator>
    <Tabs.Screen
      name="Home"
      component={HomeScreens}
      options={{
        tabBarLabel: "Home",
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
        tabBarBadge: null,
      }}
    />
    <Tabs.Screen
      name="Tracking"
      component={TrackingScreens}
      options={{
        tabBarLabel: "Iniciar",
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="bike" color={color} size={size} />
        ),
      }}
    />
    <Tabs.Screen
      name="Training"
      component={TrainingScreens}
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
  </Tabs.Navigator>
);
