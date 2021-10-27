import React from "react";
import { View, Alert } from "react-native";
import Icons from "react-native-vector-icons/Ionicons";

import AuthContext from "../context/auth.context";
import { deleteUser } from "src/utils";

export default function OptionsSettings() {
  const { logout } = React.useContext(AuthContext);

  const handlesignOut = () => {
    console.log("handleSignOut");
    deleteUser();
    logout();
  };

  return (
    <View style={{ padding: 10 }}>
      <Icons
        onPress={() => handlesignOut()}
        name={Platform.OS === "ios" ? "ios-settings" : "md-settings"}
        size={27}
      />
    </View>
  );
}
