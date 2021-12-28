import * as React from "react";
import { StyleSheet, Text, View, Pressable, Alert } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import theme from "styles/theme.styles";
import { LocationContext } from "context/location.context";

export default function PanelScreen({ panel, finish = () => {} }) {
  const { timer, start, stop, clear, circuit } =
    React.useContext(LocationContext);

  const handlePlay = () => {
    if (timer.isPaused || !timer.isActive) {
      start();
    } else {
      stop();
    }
  };

  const handleFinish = () => {
    if (!timer.isActive) {
      return false;
    } else {
      stop();
    }

    Alert.alert(
      "Atividade Finalizada",
      "Deseja salvar o percurso percorrido?",
      [
        {
          text: "Não",
          onPress: clear,
          style: "cancel",
        },
        {
          text: "Sim",
          onPress: () => {
            return finish({ ...circuit, duration: timer.cronometro });
          },
        },
      ]
    );
  };

  return (
    <View style={[styles.controls]}>
      <View style={styles.buttonArea}>
        <Text style={styles.text}>FINALIZAR</Text>
        <Pressable
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
        </Pressable>
      </View>

      <View style={styles.buttonArea}>
        <Text style={styles.text}>
          {timer.isPaused || !timer.isActive ? "INICIAR" : "PAUSAR"}
        </Text>
        <Pressable
          style={[styles.button, { backgroundColor: theme.colors.primary }]}
          onPress={handlePlay}
        >
          <MaterialIcons
            name={timer.isPaused || !timer.isActive ? "play-arrow" : "pause"}
            size={45}
            color={theme.colors.white}
          />
        </Pressable>
      </View>

      <View style={styles.buttonArea}>
        <Text style={styles.text}>PAINEL</Text>
        <Pressable
          style={[styles.button, { borderColor: theme.colors.secondary }]}
          onPress={panel}
        >
          <MaterialIcons
            name={"map"}
            size={45}
            color={theme.colors.secondary}
          />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  controls: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
