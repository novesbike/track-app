import React from "react";
import { Text, View, StyleSheet, Dimensions, ScrollView } from "react-native";
import MapView, { Polyline } from "react-native-maps";
import theme from "styles/theme.styles";
const { width, height } = Dimensions.get("window");

const fontRegular = theme.font.regular;
const textSize = 18;
const iconSize = 50;
const borderwidth = 1.5;

const coordinate = [
  {
    latitude: -25.3566955,
    longitude: -57.5995611,
  },
  {
    latitude: -25.34990775062222,
    longitude: -57.60963456543024,
  },
  {
    latitude: -25.349179803635284,
    longitude: -57.60950948041769,
  },

  {
    latitude: -25.349178314377706,
    longitude: -57.609509030196485,
  },
];

//Busca o ponto médio do circuito para latitudeDelta e longitudeDelta
function getRegionForCoordinates(points) {
  // points should be an array of { latitude: X, longitude: Y }
  let minX, maxX, minY, maxY;

  // init first point
  ((point) => {
    minX = point.latitude;
    maxX = point.latitude;
    minY = point.longitude;
    maxY = point.longitude;
  })(points[0]);

  // calculate rect
  points.map((point) => {
    minX = Math.min(minX, point.latitude);
    maxX = Math.max(maxX, point.latitude);
    minY = Math.min(minY, point.longitude);
    maxY = Math.max(maxY, point.longitude);
  });

  const midX = (minX + maxX) / 2;
  const midY = (minY + maxY) / 2;
  const deltaX = maxX - minX;
  const deltaY = maxY - minY;

  return {
    latitude: midX,
    longitude: midY,
    latitudeDelta: deltaX + deltaX * 0.5,
    longitudeDelta: deltaY + deltaY * 0.5,
  };
}
const formatTime = (time) => {
  const getSeconds = `0${time % 60}`.slice(-2);
  const minutes = `${Math.floor(time / 60)}`;
  const getMinutes = `0${minutes % 60}`.slice(-2);
  const getHours = `0${Math.floor(time / 3600)}`.slice(-2);

  return `${getHours}: ${getMinutes} : ${getSeconds}`;
};

const formatDate = (date) => {
  let oldDate = date.split("-");

  return `${oldDate[2]}/${oldDate[1]}/${oldDate[0]}`;
};

const RecordDetailScreen = ({ route }) => {
  /*
            <Text style={{fontSize:50}}>{title}</Text>
            <Text style={{fontSize:50}}>{distance}</Text>
            <Text style={{fontSize:50}}>{time}</Text>
            <Text style={{fontSize:50}}>{date}</Text>
*/
  const {
    title,
    description,
    distance,
    ROUTE,
    time,
    date,
    averageSpeed,
    altimetria,
  } = route.params;

  return (
    <ScrollView style={{ backgroundColor: theme.colors.secondary }}>
      <View style={styles.mapContainer}>
        <MapView
          style={{ height: 250 }}
          cacheEnabled={true}
          region={getRegionForCoordinates(ROUTE)}
        >
          <Polyline
            coordinates={ROUTE}
            strokeWidth={3}
            strokeColor={theme.colors.primary}
          />
        </MapView>
      </View>

      <View style={styles.borderBottom}>
        <Text style={styles.title}>{title}</Text>

        <Text style={styles.dataText}>{description}</Text>
      </View>

      <View style={styles.inLineData}>
        <View style={styles.borderBottomRight}>
          <Text style={styles.labelText}>Duração:</Text>
          <Text style={styles.dataText}>{formatTime(time)}</Text>
        </View>
        <View style={styles.borderBottom}>
          <Text style={styles.labelText}>Data:</Text>
          <Text style={styles.dataText}>{formatDate(date)}</Text>
        </View>
      </View>

      <View style={styles.inLineData}>
        <View style={styles.borderBottomRight}>
          <Text style={styles.labelText}>Velocidade Média:</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.dataText}>{averageSpeed}</Text>
            <Text style={styles.dataText}> km/h</Text>
          </View>
        </View>
        <View style={styles.borderBottom}>
          <Text style={styles.labelText}>Distância:</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.dataText}>{distance}</Text>
            <Text style={styles.dataText}> km</Text>
          </View>
        </View>
      </View>

      <View style={styles.inLineData}>
        <View style={styles.borderBottom}>
          <Text style={styles.labelText}>Altimetria:</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.dataText}>{altimetria}</Text>
            <Text style={styles.dataText}> m</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mapContainer: {
    shadowColor: "orange",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    borderColor: theme.colors.primary,
    borderWidth: 1,
  },
  title: {
    color: theme.colors.light_color,
    fontFamily: theme.font.regular,
    fontSize: iconSize,
    padding: 10,
    // color:"#fff"
  },
  labelText: {
    color: theme.colors.light_color,
    fontFamily: theme.font.regular,
    fontSize: textSize,
    paddingTop: 10,
    paddingBottom: 5,
    // color:"#fff"
  },
  dataText: {
    color: theme.colors.light_color,
    fontFamily: fontRegular,
    fontSize: textSize,
    paddingBottom: 10,
    // color:"#fff"
  },
  borderBottomRight: {
    flex: 1,
    borderBottomColor: theme.colors.primary,
    borderRightColor: theme.colors.primary,
    borderWidth: borderwidth,
    alignItems: "center",
  },
  borderBottom: {
    flex: 1,
    borderBottomColor: theme.colors.primary,
    borderWidth: borderwidth,
    alignItems: "center",
  },
  inLineData: {
    flexDirection: "row",
  },
});
export default RecordDetailScreen;
