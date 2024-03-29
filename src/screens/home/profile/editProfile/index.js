import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  StatusBar,
} from "react-native";
import { openCamera, openLibrary } from "services/upload/images";
import { useNavigation } from "@react-navigation/native";
import { useActionSheet } from "@expo/react-native-action-sheet";
import { MaterialIcons } from "@expo/vector-icons";
import { Button } from "react-native-paper";
import { Avatar } from "react-native-elements";
import AuthContext from "context/auth.context";
import Constants from "expo-constants";
import theme from "styles/theme.styles";

function editProfile() {
  const navigation = useNavigation();
  const { showActionSheetWithOptions } = useActionSheet();
  const { user, updateProfile } = React.useContext(AuthContext);
  const [loading, setLoading] = React.useState(false);
  const [name, setName] = React.useState();
  const [avatar, setAvatar] = React.useState();
  const [attach, setAttach] = React.useState();

  React.useLayoutEffect(() => {
    setName(user.name);
    setAvatar(user.avatar);
  }, [user]);

  const updateAccountProfile = async () => {
    try {
      setLoading(true);
      await updateProfile({ avatar: attach, name: name, id: user.id });
      navigation.navigate("Profile");
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const camera = async () => {
    const result = await openCamera();

    if (result) {
      setAttach(result);
      setAvatar(result.uri);
    }
  };

  const library = async () => {
    const result = await openLibrary();

    if (result) {
      setAttach(result);
      setAvatar(result.uri);
    }
  };

  const openActionSheet = () => {
    const icon = (name, color) => (
      <MaterialIcons key={name} name={name} color={color && color} size={20} />
    );

    const options = ["Câmera", "Galeria", "Cancelar"];
    const icons = [
      icon("camera-alt"),
      icon("photo-library"),
      icon("cancel-presentation", "#d95050"),
    ];
    const destructiveButtonIndex = 2;
    const cancelButtonIndex = 2;
    const textStyle = {
      fontFamily: theme.font.roboto.medium,
    };

    showActionSheetWithOptions(
      {
        options,
        icons,
        textStyle,
        cancelButtonIndex,
        destructiveButtonIndex,
      },
      (index) => {
        switch (index) {
          case 0:
            camera();
            break;
          case 1:
            library();
            break;
          default:
            break;
        }
      }
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        barStyle={Constants.platform.ios ? "dark-content" : "light-content"}
        backgroundColor={theme.colors.secondary}
      />
      <View style={[styles.containerImage]}>
        <Avatar
          rounded
          size="xlarge"
          overlayContainerStyle={{
            backgroundColor: theme.colors.primary,
            borderColor: theme.colors.white,
          }}
          title={user.name.charAt(0)}
          onPress={openActionSheet}
          source={
            avatar && {
              uri: avatar,
              headers: {
                Authorization: `Bearer ${user.token}`,
              },
            }
          }
        />
        <TouchableOpacity style={{ marginTop: 10 }} onPress={openActionSheet}>
          <Text style={styles.text}>Trocar de foto</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.containerInputs}>
        <View>
          <View style={styles.borderInput}>
            <TextInput
              value={name}
              autoCorrect={false}
              style={styles.input}
              onChangeText={setName}
              underlineColorAndroid="transparent"
            />
          </View>
          <Text style={styles.text}>Pode ser seu nome ou apelido</Text>
        </View>
        <Button
          dark
          mode="outlined"
          color={theme.colors.primary}
          uppercase={false}
          labelStyle={styles.label}
          style={styles.button}
          onPress={updateAccountProfile}
          loading={loading}
        >
          {loading ? "atualizando" : "salvar"}
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.white,
    padding: theme.spacing(5),
  },

  containerImage: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },

  containerInputs: {
    flex: 1,
    width: "100%",
    justifyContent: "space-between",
    paddingTop: theme.spacing(3),
  },

  avatar: {
    width: 150,
    height: 150,
    borderWidth: 1,
    borderRadius: 75,
    borderColor: theme.colors.white,
    marginVertical: theme.spacing(3),
  },

  text: {
    fontFamily: theme.font.roboto.medium,
    color: theme.colors.grey[25],
    textAlign: "center",
  },

  borderInput: {
    height: 60,
    borderBottomWidth: 1,
    borderColor: theme.colors.grey[25],
    // backgroundColor: "red",
    marginBottom: theme.spacing(1),
    width: "100%",
  },

  input: {
    fontSize: 40,
    height: 60,
    fontFamily: theme.font.roboto.bold,
    textAlign: "center",
  },

  label: {
    fontFamily: "open-sans-bold",
    fontSize: theme.font.size.medium,
  },
  button: {
    marginTop: theme.spacing(5),
    borderRadius: theme.spacing(4),
    borderColor: theme.colors.primary,
    borderWidth: 0.5,
  },
});

export default editProfile;
