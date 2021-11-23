import * as React from "react";
import MapView from "react-native-maps";
import { StyleSheet, View, Dimensions } from "react-native";
import * as Location from "expo-location";

const LATITUDE_DELTA = 0.01;
const LONGITUDE_DELTA = 0.02;
const LATITUDE = -25.540794;
const LONGITUDE = -54.5832818;

export default function Map() {
  const [location, setLocation] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        alert("Permission to access location was denied");
      }

      let location = await Location.getCurrentPositionAsync({});

      setLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      });
    })();
  }, []);

  React.useEffect(() => console.log("minha localização", location));

  return (
    <MapView
      style={styles.map}
      initialRegion={location}
      showsUserLocation
      loadingEnabled
    />
  );
}

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
});
