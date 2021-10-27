import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Colors from "constants/colors";

import Trainer from "screens/training/treino";
import ChangeTraining from "screens/training/cadastroTreino";
import Training from "screens/training/treinador";

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
      name="Treinos"
      component={Training}
      options={{ title: "Treinos" }}
    />
    <TrainingStack.Screen
      name="Cadastro Treino"
      component={ChangeTraining}
      options={{ title: "Cadastro Treinos" }}
    />
    <TrainingStack.Screen
      name="Treinador"
      component={Trainer}
      options={{ title: "Treinador" }}
    />
  </TrainingStack.Navigator>
);
