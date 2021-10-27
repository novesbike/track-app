import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import Colors from "constants/colors";
import OptionsSettings from "components/optionsSettings";

import ProfileScreen from "screens/profile/profileScreen";
import RegisterProfileScreen from "screens/registration/perfil/registerProfile";
import RecordDetailScreen from "screens/profile/recordDetailScreen";
import RecordListScreen from "screens/profile/recordListScreen";

const ProfileStack = createStackNavigator();

export default ({ navigation, route }) => {
  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    console.log("routeName " + routeName);
    if (routeName === "RegisterProfile") {
      navigation.setOptions({ tabBarVisible: false });
    } else {
      navigation.setOptions({ tabBarVisible: true });
    }
  }, [navigation, route]);

  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerTintColor: Colors.primaryColorDark,
        headerTitleAlign: { alignSelf: "center" },
        headerStyle: { backgroundColor: Colors.primaryColor },
      }}
    >
      <ProfileStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: "Perfil",
          headerRight: () => <OptionsSettings />,
        }}
      />

      <ProfileStack.Screen
        name="RecordList"
        component={RecordListScreen}
        options={{
          title: "Histórico de atividades",
        }}
      />

      <ProfileStack.Screen
        name="RecordDetail"
        component={RecordDetailScreen}
        options={{
          title: "Histórico de atividades",
        }}
      />

      <ProfileStack.Screen
        name="RegisterProfile"
        component={RegisterProfileScreen}
        options={{
          title: "Cadastro de Perfil",
        }}
      />
    </ProfileStack.Navigator>
  );
};
