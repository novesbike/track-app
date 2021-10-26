import api from './api'
import {AsyncStorage} from "react-native";

const PREFIX = 'userToken';

//{token:String,user:object}

export const AuthService = {
  signIn: (email, password) => {
  },
  getLoggedUser: async () => {
    let user = await AsyncStorage.getItem(PREFIX)

    if (!user) return false

    let parse = JSON.parse(user)

    if (!parse.token) return false

    setHeaderAuthorization(parse.token)

    return parse.user
  },
  logout: async () => {
    await AsyncStorage.removeItem(PREFIX)
    setHeaderAuthorization(null)
  }
}

function setHeaderAuthorization(token) {
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`
}
