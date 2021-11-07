import React from "react";
import Routes from "./routes";
import { AuthProvider } from "./context/auth.context";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";

const App = () => (
  <AuthProvider>
    <SafeAreaProvider>
      <ActionSheetProvider>
        <Routes />
      </ActionSheetProvider>
    </SafeAreaProvider>
  </AuthProvider>
);

export default App;
