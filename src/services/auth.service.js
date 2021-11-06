import api from "./api";
import jwt_decode from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";

const PREFIX = "@NovesBike";

//{token:String,user:object}

export const AuthService = {
  /**
   * LOGIN: faz comunicação com a api e salva em um storage
   *
   * CASO DO SUCESSO: grava os dados da resposta em um storage
   * e retorna um Promise resolve com os dados do usuário
   *
   * CASO DE FALHA: irá retornar um Promise Reject com uma
   * mensagem amigável.
   */
  login: (email, password) => {
    return new Promise((resolve, reject) => {
      console.log(email, password);
      api
        .post("auth/login", { email, password })
        .then(({ data }) => {
          const { user } = jwt_decode(data.token);

          AsyncStorage.setItem(PREFIX, data.token);
          setHeaderAuthorization(data.token);
          resolve(user);
        })
        .catch((error) => {
          console.log(error);
          reject("Credenciais inválidas");
        });
    });
  },
  getLoggedUser: async () => {
    try {
      let user = await AsyncStorage.getItem(PREFIX);
      let parse = JSON.parse(user);

      if (!parse.token) return false;
      setHeaderAuthorization(parse.token);
      return parse.user;
    } catch (error) {
      return false;
    }
  },
  logout: async () => {
    await AsyncStorage.removeItem(PREFIX);
    setHeaderAuthorization(null);
  },

  createAccount: async ({ name, email, password }) => {
    return new Promise((resolve, reject) => {
      api
        .post("v1/users/register", { name, email, password })
        .then(({ data }) => resolve(data))
        .catch(({ response }) => reject(response.data.message));
    });
  },
};

function setHeaderAuthorization(token) {
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}
