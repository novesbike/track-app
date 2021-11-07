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
    "roboto-thin": require("assets/fonts/Roboto-Thin.ttf"),
    "roboto-light": require("assets/fonts/Roboto-Light.ttf"),
    "roboto-italic": require("assets/fonts/Roboto-Italic.ttf"),
    "roboto-regular": require("assets/fonts/Roboto-Regular.ttf"),
    "roboto-medium": require("assets/fonts/Roboto-Medium.ttf"),
    "roboto-bold": require("assets/fonts/Roboto-Bold.ttf"),
    PlutoLight: require("assets/fonts/PlutoLight.otf"),
    PlutoRegular: require("assets/fonts/PlutoRegular.otf"),
    PlutoMedium: require("assets/fonts/PlutoMedium.otf"),
    PlutoBold: require("assets/fonts/PlutoBold.otf"),
  }).then(() => {
    setCustomText({
      style: {
        fontFamily: "roboto-light",
      },
    });

    setTimeout(() => setIsLoading(false), 3000);
  });

  return isLoading ? <SplashScreen /> : <MainApplication />;
};

export default App;
