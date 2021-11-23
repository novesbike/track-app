import * as React from "react";
import Constants from "expo-constants";
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  ScrollView,
  StatusBar,
} from "react-native";
import MapView, { Geojson } from "react-native-maps";
import theme from "styles/theme.styles";

const location = {
  latitude: -25.540794,
  longitude: -54.5832818,
  latitudeDelta: 0.01,
  longitudeDelta: 0.02,
};

export default function App() {
  return (
    <>
      <StatusBar
        animated={true}
        barStyle={Constants.platform.ios ? "dark-content" : "light-content"}
        backgroundColor={theme.colors.secondary}
      />
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Treino de Terça</Text>
        </View>
        <ScrollView>
          <View>
            <MapView style={styles.mapContainer} region={location}>
              <Geojson
                lineDashPattern={[0]}
                lineCap="round"
                geojson={BrazilGeojson}
                fillColor="red"
                strokeColor={theme.colors.primary}
                strokeWidth={2}
              />
            </MapView>
          </View>
          <View style={styles.moreInfo}>
            <View style={styles.info}>
              <Text style={styles.date}>13/07/2021</Text>
              <View style={styles.row}>
                <View style={styles.boxInfo}>
                  <Text style={styles.subtitleInfo}>DURAÇÃO</Text>
                  <Text style={styles.textInfo}>1:23:32</Text>
                </View>
                <View style={styles.boxInfo}>
                  <Text style={styles.subtitleInfo}>DISTÂNCIA PERCORRIDA</Text>
                  <View style={styles.row}>
                    <Text style={styles.textInfo}>11.4</Text>
                    <Text style={styles.measure}>km</Text>
                  </View>
                </View>
              </View>
              <View style={styles.row}>
                <View style={styles.boxInfo}>
                  <Text style={styles.subtitleInfo}>VELOCIDADE MÉDIA</Text>
                  <View style={styles.row}>
                    <Text style={styles.textInfo}>8.4</Text>
                    <Text style={styles.measure}>km/h</Text>
                  </View>
                </View>
                <View style={styles.boxInfo}>
                  <Text style={styles.subtitleInfo}>ALTIMETRIA</Text>
                  <View style={styles.row}>
                    <Text style={styles.textInfo}>8.2</Text>
                    <Text style={styles.measure}>metros</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.label}>
              <Text style={styles.subtitle}>Descrição</Text>
              <Text style={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
  },
  header: {
    width: Dimensions.get("window").width,
  },
  mapContainer: {
    height: 260,
  },
  moreInfo: {
    flex: 1,
  },
  label: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  info: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  date: {
    color: "#A9A9A9",
    fontFamily: theme.font.roboto.regular,
  },
  title: {
    color: "#000",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 12,
    fontFamily: theme.font.roboto.bold,
    fontSize: 20,
  },
  subtitle: {
    color: "#B0B0B0",
    fontFamily: theme.font.roboto.regular,
  },
  text: {
    fontFamily: theme.font.roboto.regular,
    marginTop: 8,
  },
  row: {
    flexDirection: "row",
  },
  boxInfo: {
    flex: 1,
    marginTop: theme.spacing(2),
  },
  subtitleInfo: {
    color: "#B0B0B0",
    fontFamily: theme.font.roboto.regular,
    fontSize: theme.font.size.small,
  },
  textInfo: {
    fontFamily: theme.font.roboto.bold,
    color: theme.colors.secondary,
    fontSize: 26,
  },
  measure: {
    alignSelf: "flex-end",
    paddingBottom: 3,
    paddingLeft: 5,
    fontFamily: theme.font.roboto.medium,
  },
});

const BrazilGeojson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "LineString",
        coordinates: [
          [-54.576237201690674, -25.538666107149485],
          [-54.587180614471436, -25.538201438875593],
          [-54.587695598602295, -25.543583736010273],
          [-54.58786725997925, -25.544377507589296],
          [-54.58782434463501, -25.545190634001226],
          [-54.587438106536865, -25.54691366936189],
          [-54.577224254608154, -25.54695238897312],
          [-54.57655906677246, -25.5466232718791],
          [-54.57638740539551, -25.5463135137887],
          [-54.576237201690674, -25.54594567501675],
          [-54.57634449005127, -25.544938952605932],
          [-54.576301574707024, -25.543545015310997],
          [-54.576172828674316, -25.542538272740565],
          [-54.576215744018555, -25.538879079506586],
        ],
      },
    },
  ],
};
