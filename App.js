import React, {useState} from 'react';

import MainApplication from 'src'
import SplashScreen from 'screens/splash'
import * as Font from "expo-font";
import {setCustomText} from "react-native-global-props"

// todo
/*
* load fonts
* call splash screen
*
* */
const App = () => {
  const [isLoading, setIsLoading] = useState(true)

  Font
    .loadAsync({
      "open-sans": require("assets/fonts/OpenSans-Regular.ttf"),
      "open-sans-bold": require("assets/fonts/OpenSans-Bold.ttf"),
      "PlutoMedium": require("assets/fonts/PlutoMedium.otf"),
      "PlutoMediumItalic": require("assets/fonts/PlutoMedium-Italic.otf"),
    }).then(() => {
    setCustomText({
      style: {
        fontFamily: "PlutoMedium",
      }
    })

    setTimeout(() => setIsLoading(false), 3000)
  })

  // return isLoading ? <SplashScreen/>  : <MainApplication/>
  return  <SplashScreen/>

}


export default App;
