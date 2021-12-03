import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import theme from "styles/theme.styles";
import { LocationContext } from "context/location.context";

export default function PanelScreen({ route }) {
  const { timer, start, stop, clear } = React.useContext(LocationContext);
  const navigation = useNavigation();

  const handlePlay = () => {
    if (timer.isPaused || !timer.isActive) {
      start();
    } else {
      stop();
    }
  };

  const handleFinish = () => {
    return clear();
  };

  const handleNavigate = () => {
    if (route?.name === "MapScreen") {
      return navigation.navigate("PanelScreen");
    } else {
      return navigation.navigate("MapScreen");
    }
  };

  return (
    <View style={[styles.controls]}>
      <View style={styles.buttonArea}>
        <Text style={styles.text}>FINALIZAR</Text>
        <TouchableOpacity
          style={[
            styles.button,
            timer.isActive && { borderColor: theme.colors.primary },
          ]}
          onPress={handleFinish}
        >
          <MaterialIcons
            name="stop"
            size={45}
            color={
              timer.isActive ? theme.colors.primary : theme.colors.grey[20]
            }
          />
        </TouchableOpacity>
      </View>

      <View style={styles.buttonArea}>
        <Text style={styles.text}>
          {timer.isPaused || !timer.isActive ? "INICIAR" : "PAUSAR"}
        </Text>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: theme.colors.primary }]}
          onPress={handlePlay}
        >
          <MaterialIcons
            name={timer.isPaused || !timer.isActive ? "play-arrow" : "pause"}
            size={45}
            color={theme.colors.white}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.buttonArea}>
        <Text style={styles.text}>PAINEL</Text>
        <TouchableOpacity
          style={[styles.button, { borderColor: theme.colors.secondary }]}
          onPress={handleNavigate}
        >
          <MaterialIcons
            name={"map"}
            size={45}
            color={theme.colors.secondary}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  controls: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  buttonArea: {
    alignItems: "center",
  },
  button: {
    padding: 10,
    marginHorizontal: 10,
    height: 80,
    width: 80,
    borderColor: theme.colors.grey[20],
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 100,
  },
  text: {
    marginBottom: 10,
    fontFamily: theme.font.roboto.regular,
    fontSize: theme.font.size.small,
  },
});
