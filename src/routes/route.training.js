import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { screenOptions } from ".";

import TrainingScreen from "screens/training/training.screen";
import TrainerScreen from "screens/training/trainer/trainer.screen";

const TrainingStack = createStackNavigator();

export default () => (
  <TrainingStack.Navigator screenOptions={screenOptions}>
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
