import * as React from "react";
import Constants from "expo-constants";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  StatusBar,
  Alert,
  TextInput,
} from "react-native";
import { Button } from "react-native-paper";
import theme from "styles/theme.styles";
import api from "services/api";
import Info from "components/cardActivity/info";
import Map from "components/cardActivity/map";

export default function FinishMapScreen(props) {
  const [loading, setLoading] = React.useState(false);
  const [title, setTitle] = React.useState(null);
  const [description, setDescription] = React.useState(null);

  const {
    circuit: { duration, distanceTravelled, averageSpeed, coordinates },
  } = props.route.params;

  const saveActivity = async () => {
    try {
      setLoading(true);

      if (coordinates.length === 0) {
        Alert.alert(
          "Aviso",
          "Necessário percorrer no mínimo 1 metro antes de salvar a atividade"
        );
        return false;
      }

      if (!title) {
        Alert.alert("Aviso", "O Titulo não pode estar em branco");
        return false;
      }

      const activity = {
        title,
        description,
        duration,
        distance: distanceTravelled,
        average_speed: averageSpeed,
        altimetry: 0,
        training_id: null,
        coordinates,
      };

      await api.post("v1/activities", activity);

      props.navigation.reset({
        index: 0,
        routes: [
          {
            name: "Home",
          },
        ],
      });
    } catch (err) {
      console.log(err.response);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <StatusBar
        animated={true}
        barStyle={Constants.platform.ios ? "dark-content" : "light-content"}
        backgroundColor={theme.colors.secondary}
      />
      <View style={styles.container}>
        <View style={styles.inputs}>
          <View style={styles.title}>
            <Text style={styles.labelInput}>Título</Text>
            <View style={styles.borderInput}>
              <TextInput
                value={title}
                onChangeText={setTitle}
                style={styles.textInput}
                placeholder="Insira um título"
              />
            </View>
          </View>
          <View>
            <Text style={styles.labelInput}>Descrição</Text>
            <View style={styles.borderInput}>
              <TextInput
                value={description}
                onChangeText={setDescription}
                style={styles.textInput}
                placeholder="Insira uma Descrição"
                multiline
              />
            </View>
          </View>
        </View>
        <ScrollView>
          <View style={styles.mapContainer}>
            <Map coordinates={coordinates} />
          </View>
          <View style={styles.moreInfo}>
            <Info
              duration={duration}
              distance={distanceTravelled}
              average_speed={averageSpeed}
              altimetria={0}
            />
          </View>
          <View style={styles.buttonArea}>
            <Button
              dark
              mode="contained"
              loading={loading}
              uppercase={false}
              style={styles.button}
              labelStyle={styles.label}
              color={theme.colors.primary}
              onPress={saveActivity}
            >
              salvar atividade
            </Button>
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
  inputs: {
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#ddd",
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  title: {
    paddingBottom: 16,
  },

  mapContainer: {
    height: 200,
  },

  moreInfo: {
    flex: 1,
  },

  labelInput: {
    fontFamily: theme.font.roboto.medium,
    fontSize: theme.font.size.medium,
    color: theme.colors.grey[30],
  },

  borderInput: {
    borderBottomWidth: 1,
    borderColor: theme.colors.grey[25],
    width: "100%",
  },

  textInput: {
    fontSize: theme.font.size.large,
    paddingVertical: 5,
    fontFamily: theme.font.roboto.light,
  },

  buttonArea: {
    padding: theme.spacing(3),
  },

  label: {
    fontFamily: theme.font.roboto.regular,
    fontSize: theme.font.size.medium,
    paddingVertical: 2,
  },
  button: {
    borderRadius: theme.spacing(4),
    borderColor: theme.colors.primary,
    borderWidth: 0.5,
  },
});
