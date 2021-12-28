import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  ActivityIndicator,
  Modal,
} from "react-native";
import Map from "components/map/map";
import * as Location from "expo-location";
import Controls from "components/map/map.controls";
import Monitor from "components/map/map.monitor";
import Panel from "components/panel/panel.monitor";
import { LocationProvider } from "context/location.context";
const width = Math.round(Dimensions.get("window").width);

export default function MapScreen(props) {
  const [ready, setReady] = React.useState(false);
  const [location, setLocation] = React.useState(null);
  const [errorMsg, setErrorMsg] = React.useState(null);
  const [modalVisible, setModalVisible] = React.useState(false);

  React.useEffect(() => {
    async function getPermissions() {
      let { status: fore_status } =
        await Location.requestForegroundPermissionsAsync();
      if (fore_status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      // let { status: back_status } =
      //   await Location.requestBackgroundPermissionsAsync();

      // if (back_status !== "granted") {
      //   setErrorMsg("Permission to access location was denied");
      //   return;
      // }
      let location = await Location.getCurrentPositionAsync({});
      setLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
      setReady(true);
    }

    getPermissions();
  }, []);

  if (!ready) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="orange" />
      </View>
    );
  } else if (errorMsg) {
    console.log(errorMsg);
    return (
      <View style={styles.container}>
        <Text>{errorMsg}</Text>
      </View>
    );
  }

  const finishTrack = (circuit) => {
    props.navigation.navigate("FinishTrackScreen", { circuit });
  };

  return (
    <LocationProvider>
      <View style={styles.container}>
        <Monitor />
        <Map {...location} />
        <View style={[styles.controls]}>
          <Controls
            finish={finishTrack}
            {...props}
            panel={() => setModalVisible(!modalVisible)}
          />
        </View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={modalVisible}
          statusBarTranslucent
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <Panel>
              <Controls
                finish={finishTrack}
                panel={() => setModalVisible(!modalVisible)}
              />
            </Panel>
          </View>
        </Modal>
      </View>
    </LocationProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    position: "relative",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  controls: {
    width: "100%",
    backgroundColor: "white",

    position: "absolute",
    bottom: 0,
    left: 0,

    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 10,
  },
  centeredView: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
