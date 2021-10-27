import React, { useState } from "react";
import * as Font from "expo-font";
import { setCustomText } from "react-native-global-props";

import MainApplication from "src";
import SplashScreen from "screens/splash/splash.screen";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  Font.loadAsync({
    "open-sans": require("assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("assets/fonts/OpenSans-Bold.ttf"),
    PlutoLight: require("assets/fonts/PlutoLight.otf"),
    PlutoRegular: require("assets/fonts/PlutoRegular.otf"),
    PlutoMedium: require("assets/fonts/PlutoMedium.otf"),
    PlutoBold: require("assets/fonts/PlutoBold.otf"),
  }).then(() => {
    setCustomText({
      style: {
        fontFamily: "open-sans",
      },
    });

    setTimeout(() => setIsLoading(false), 3000);
  });

  return isLoading ? <SplashScreen /> : <MainApplication />;
};

export default App;
