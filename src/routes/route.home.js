import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HeaderBackButton } from "@react-navigation/stack";
import HeaderRightButtonProfile from "components/profile/headerRightButton";
import theme from "styles/theme.styles";

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
        headerRightContainerStyle: { width: "20%" },
        headerRight: HeaderRightButtonProfile,
        headerTitleStyle: {
          fontFamily: theme.font.roboto.bold,
          fontWeight: "bold",
        },
        headerLeft: (props) => (
          <HeaderBackButton
            {...props}
            label="Home"
            tintColor={theme.colors.black}
          />
        ),
      }}
    />

    <ProfileStack.Screen
      name="UpdatePassword"
      component={UpdatePasswordScreen}
      options={{
        title: "Atualizar senha",
        headerShown: true,
        headerTitleStyle: {
          fontFamily: theme.font.roboto.bold,
          fontWeight: "bold",
        },
        headerLeft: (props) => (
          <HeaderBackButton
            {...props}
            label="Perfil"
            tintColor={theme.colors.black}
          />
        ),
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
