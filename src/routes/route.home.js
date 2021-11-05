import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ProfileScreen from "screens/home/profile/profile";
import UpdateProfileScreen from "screens/home/profile/editProfile";
import UpdatePasswordScreen from "screens/home/profile/updatePassword";
import ActivityListScreen from "screens/home/activities/activityList.screen";
import ActivityDetailsScreen from "screens/home/activities/activityDetails.screen";

const ProfileStack = createStackNavigator();

export default () => (
  <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
    <ProfileStack.Screen name="Profile" component={ProfileScreen} />
    <ProfileStack.Screen
      name="UpdateProfile"
      component={UpdateProfileScreen}
      options={{
        title: "Editar perfil",
        headerShown: true,
      }}
    />

    <ProfileStack.Screen
      name="UpdatePassword"
      component={UpdatePasswordScreen}
      options={{
        title: "Atualizar senha",
        headerShown: true,
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
