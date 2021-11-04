import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ProfileScreen from "screens/home/profile/profile";
import UpdateProfileScreen from "screens/home/profile/updateProfile.screen";
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
