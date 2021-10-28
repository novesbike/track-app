import React, { useEffect } from "react";
import { View, Dimensions } from "react-native";
import { FlatList } from "react-native";
import { getUserEmail } from "services/utils";

import OneColumnGridTile from "components/oneColumnGridTile";
import api from "services/api";

const { width, height } = Dimensions.get("window");

const RecordListScreen = (props) => {
  const [data_, setData_] = React.useState([]);
  const [pageSize, setPageSize] = React.useState(15);

  useEffect(() => {
    let mounted = true;
    try {
      getUserEmail().then((email) =>
        api
          .get("/users/by-email?email=" + email) //users/by-email?email=lucas@tw.com URL PARA BUSCAR POR EMAIL
          .then((response) => {
            var userId = response.data.id;

            try {
              api
                .get("/tracking/by-id/" + userId + "/?page=0&size=" + pageSize)
                .then((response) => {
                  //response.data.content[0]
                  if (mounted) {
                    setData_(response.data.content);
                  }
                });
              return () => (mounted = false);
            } catch (e) {
              console.log(e);
            }
          })
      );
    } catch (e) {
      console.log(e);
    }
  }, []);

  const renderGridItem = (itemData) => {
    let altimetria = parseFloat(itemData.item.elevation)
      .toFixed(1)
      .toString()
      .replace(".", ",");

    let distancia = parseFloat(itemData.item.distance)
      .toFixed(2)
      .toString()
      .replace(".", ",");

    let avgSpeed = parseFloat(itemData.item.averageSpeed)
      .toFixed(2)
      .toString()
      .replace(".", ",");

    return (
      <OneColumnGridTile
        title={itemData.item.title}
        distance={distancia}
        elevation={itemData.item.elevation}
        route={itemData.item.route}
        time={itemData.item.timing}
        date={itemData.item.date}
        averageSpeed={avgSpeed}
        altimetria={altimetria}
        onSelect={() => {
          props.navigation.navigate("RecordDetail", {
            id: itemData.item.id,
            title: itemData.item.title,
            description: itemData.item.description,
            distance: distancia,
            ROUTE: itemData.item.route,
            time: itemData.item.timing,
            date: itemData.item.date,
            averageSpeed: avgSpeed,
            altimetria: altimetria,
          });
        }}
      />
    );
  };

  return (
    <View style={{ height: height }}>
      <FlatList
        data={data_}
        renderItem={renderGridItem}
        numColumns={1}
        keyExtractor={(item, index) => item.id.toString()}
      ></FlatList>
    </View>
  );
};

export default RecordListScreen;
