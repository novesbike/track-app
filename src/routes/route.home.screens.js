import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Colors from "constants/colors";

import { View, Text, Button } from "react-native";

const HomeStack = createStackNavigator();

export const Details = ({ route }) => (
  <View style={{ flex: 1, alignItems: "center" }}>
    <Text>Details Screen</Text>
    {route.params.name && <Text> {route.params.name} </Text>}
  </View>
);

export const Home = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: "center" }}>
    <Text>master List Screen</Text>
    <Button
      title="Example"
      onPress={() => navigation.push("Details", { name: "Example" })}
    />
    <Button
      title="Example"
      onPress={() => navigation.push("Details", { name: "Example School" })}
    />
    <Button title="Drawer" onPress={() => navigation.toggleDrawer()} />
  </View>
);

export default () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="Home"
      component={Home}
      options={{
        title: "NOVES",
        headerTintColor: Colors.primaryColorDark,
        headerTitleAlign: { alignSelf: "center" },
        headerStyle: { backgroundColor: Colors.primaryColor },
      }}
    />
    <HomeStack.Screen
      name="Details"
      component={Details}
      options={({ route }) => ({
        title: route.params.name,
        headerTintColor: Colors.primaryColorDark,
        headerStyle: { backgroundColor: Colors.primaryColor },
      })}
    />
  </HomeStack.Navigator>
);
