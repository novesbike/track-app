import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import Colors from "constants/colors";
import OptionsSettings from "components/optionsSettings";

import ProfileScreen from "screens/home/profile/profile.screen";
import UpdateProfileScreen from "screens/home/profile/updateProfile.screen";
import ActivityListScreen from "screens/home/activities/activityList.screen";
import ActivityDetailsScreen from "screens/home/activities/activityDetails.screen";

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
          title: "Home",
          headerRight: () => <OptionsSettings />,
        }}
      />
      <ProfileStack.Screen
        name="UpdateProfile"
        component={UpdateProfileScreen}
        options={{
          title: "Cadastro de Perfil",
        }}
      />
      <ProfileStack.Screen
        name="RecordList"
        component={ActivityListScreen}
        options={{
          title: "Histórico de atividades",
        }}
      />

      <ProfileStack.Screen
        name="RecordDetail"
        component={ActivityDetailsScreen}
        options={{
          title: "Detalhes da atividade",
        }}
      />
    </ProfileStack.Navigator>
  );
};
