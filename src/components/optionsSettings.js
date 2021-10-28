import React from "react";
import { View } from "react-native";
import AuthContext from "context/auth.context";
import Icons from "react-native-vector-icons/Ionicons";

export default function OptionsSettings() {
  const { logout } = React.useContext(AuthContext);
  return (
    <View style={{ padding: 10 }}>
      <Icons
        onPress={logout}
        name={Platform.OS === "ios" ? "ios-settings" : "md-settings"}
        size={27}
      />
    </View>
  );
}
