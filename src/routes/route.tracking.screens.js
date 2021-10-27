import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Colors from "constants/colors";

import MapScreen from "screens/tracking/map.screen";

const TrackStack = createStackNavigator();

export default () => (
  <TrackStack.Navigator
    screenOptions={{
      headerTintColor: Colors.primaryColorDark,
      headerTitleAlign: { alignSelf: "center" },
      headerStyle: { backgroundColor: Colors.primaryColor },
    }}
  >
    <TrackStack.Screen
      name="MapScreen"
      component={MapScreen}
      options={{ title: "Circuito" }}
    />
  </TrackStack.Navigator>
);
