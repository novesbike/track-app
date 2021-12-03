import React from "react";
import { StyleSheet, Dimensions, Image, Platform } from "react-native";
import MapView, {
  Marker,
  Polyline,
  AnimatedRegion,
  PROVIDER_GOOGLE,
} from "react-native-maps";
import mapStyle from "styles/mapStyle.json";
import bike from "assets/bike.png";
import { LocationContext } from "context/location.context";
const screen = Dimensions.get("window");

const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE_DELTA = 0.0322;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default function App(props) {
  const { circuit } = React.useContext(LocationContext);
  const [userLocation] = React.useState(
    new AnimatedRegion({
      latitude: props.latitude,
      longitude: props.longitude,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    })
  );

  React.useEffect(() => {
    if (circuit.prevLatLng) {
      updateUserLocation(circuit.prevLatLng);
    }
  }, [circuit]);

  /**
   * Atualiza o marcador com a localização atual do usuário
   * @param {*} newCoordinate
   */
  const updateUserLocation = (newCoordinate) => {
    userLocation.timing(newCoordinate).start();
  };

  /**
   * Configura a região inicial no mapa de acordo com localização do usuário
   * @returns
   */
  const getMapRegion = () => ({
    latitude: props.latitude,
    longitude: props.longitude,
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
      <Marker.Animated coordinate={userLocation} anchor={{ x: 0.5, y: 0.5 }}>
        <Image source={bike} />
      </Marker.Animated>

      <Polyline
        lineDashPattern={[1]}
        lineCap={"square"}
        coordinates={circuit.coordinates}
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
