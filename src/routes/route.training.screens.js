import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Colors from "constants/colors";

import TrainingScreen from "screens/training/training";
import TrainerScreen from "screens/training/trainer/trainer";

const TrainingStack = createStackNavigator();

export default () => (
  <TrainingStack.Navigator
    screenOptions={{
      headerTintColor: Colors.primaryColorDark,
      headerTitleAlign: { alignSelf: "center" },
      headerStyle: { backgroundColor: Colors.primaryColor },
    }}
  >
    <TrainingStack.Screen
      name="Training"
      component={TrainingScreen}
      options={{ title: "Treinos" }}
    />
    <TrainingStack.Screen
      name="Trainer"
      component={TrainerScreen}
      options={{ title: "Treinador" }}
    />
  </TrainingStack.Navigator>
);
