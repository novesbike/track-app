import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Routes from "./routes/index";
import { AuthProvider } from "./context/auth.context";

const App = () => (
  <SafeAreaProvider>
    <AuthProvider>
      <Routes />
    </AuthProvider>
  </SafeAreaProvider>
);

export default App;
