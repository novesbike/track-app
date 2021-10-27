import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ProfileScreens from "./route.profile.screens";
import TrackScreens from "./route.track.screens";
import TrainingScreens from "./route.training.screens";
// import HomeScreens from "./route.home.screens";

const Tabs = createBottomTabNavigator();

export default () => (
  <Tabs.Navigator>
    <Tabs.Screen
      name="Profile"
      component={ProfileScreens}
      options={{
        tabBarLabel: "Perfil",
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        ),
        tabBarBadge: null,
      }}
    />
    <Tabs.Screen
      name="Track"
      component={TrackScreens}
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
