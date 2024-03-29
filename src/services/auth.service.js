import api from "./api";
import jwt_decode from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";

const PREFIX = "@NovesBike";

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
      api
        .post("auth/login", { email, password })
        .then(({ data }) => {
          const { user } = jwt_decode(data.token);

          const userWithToken = {
            ...user,
            token: data.token,
          };

          AsyncStorage.setItem(PREFIX, JSON.stringify(userWithToken));
          setHeaderAuthorization(data.token);
          resolve(userWithToken);
        })
        .catch(({ response }) => {
          console.log(response?.data);
          reject(response?.data?.message);
        });
    });
  },
  getLoggedUser: async () => {
    try {
      let user = await AsyncStorage.getItem(PREFIX);
      if (!user) return false;

      const parsed = JSON.parse(user);

      setHeaderAuthorization(parsed);
      return parsed;
    } catch (error) {
      return false;
    }
  },
  logout: async () => {
    await AsyncStorage.removeItem(PREFIX);
    setHeaderAuthorization(null);
  },

  createAccount: ({ name, email, password }) => {
    return new Promise((resolve, reject) => {
      api
        .post("v1/users/register", { name, email, password })
        .then(({ data }) => resolve(data))
        .catch(({ response }) => {
          console.log(response?.data);
          reject(response?.data?.message);
        });
    });
  },
};

function setHeaderAuthorization(token) {
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}
