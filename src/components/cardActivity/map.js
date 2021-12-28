import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import MapView, { Polyline, PROVIDER_GOOGLE } from "react-native-maps";
import mapStyle from "styles/mapStyle.json";
const screen = Dimensions.get("window");

const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE_DELTA = 0.0322;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default function Map({ coordinates }) {
  /**
   * Configura a região inicial no mapa de acordo com localização do usuário
   * @returns
   */
  const getMapRegion = () => ({
    latitude: -25.5731403894,
    longitude: -54.5533423836,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });

  return (
    <MapView
      style={styles.map}
      // customMapStyle={mapStyle}
      provider={PROVIDER_GOOGLE}
      loadingEnabled
      initialRegion={getMapRegion()}
    >
      <Polyline
        lineDashPattern={[1]}
        lineCap={"square"}
        coordinates={coordinates}
        strokeWidth={6}
        strokeColor="#f2b659"
      />
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
});
