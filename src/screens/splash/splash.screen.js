import * as React from "react"
import Svg, {Path} from "react-native-svg"
import {StyleSheet, View} from "react-native";

const splashStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  }
})

function index(props) {
  return (
    <View style={
      splashStyle.container
    }>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={1706.667}
        height={1706.667}
        viewBox="0 0 1280 1280"
        {...props}
      >
        <Path d="M450.3 460.5c0 2.7.2 3.8.4 2.2.2-1.5.2-3.7 0-5-.2-1.2-.4 0-.4 2.8z"/>
      </Svg>
    </View>
  )
}

export default index
