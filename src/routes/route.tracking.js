import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { screenOptions } from "./options";

import MapScreen from "screens/tracking/map.screen";
import FinishTrackScreen from "screens/tracking/finish.screen";

const TrackStack = createStackNavigator();

export default () => (
  <TrackStack.Navigator screenOptions={screenOptions}>
    <TrackStack.Screen
      name="MapScreen"
      component={MapScreen}
      options={{ headerShown: false }}
    />
    <TrackStack.Screen
      name="FinishTrackScreen"
      component={FinishTrackScreen}
      options={{
        headerShown: true,
        headerTitle: "Salvar Atividade",
        headerTintColor: "white",
      }}
    />
  </TrackStack.Navigator>
);
