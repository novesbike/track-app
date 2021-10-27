import React from "react";
import Routes from "./routes";
import { AuthProvider } from "./context/auth.context";
import { SafeAreaProvider } from "react-native-safe-area-context";

const App = () => (
  <SafeAreaProvider>
    <AuthProvider>
      <Routes />
    </AuthProvider>
  </SafeAreaProvider>
);

export default App;
