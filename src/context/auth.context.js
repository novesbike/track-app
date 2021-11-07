import React, { createContext, useState, useEffect } from "react";
import { Alert } from "react-native";
import { AuthService } from "services/auth.service.js";
import * as User from "services/profile/profile.service";
const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  async function checkLoggedUser() {
    const user = await AuthService.getLoggedUser();
    const hasUserLoggedIn = !!user;

    if (hasUserLoggedIn) {
      setUser(user);
      setIsLogged(true);
    }
  }

  useEffect(() => checkLoggedUser(), []);

  const login = (email, password) => {
    return AuthService.login(email, password)
      .then((response) => {
        setUser(response);
        setIsLogged(true);
      })
      .catch((err) => Alert.alert(err));
  };

  const logout = () => {
    AuthService.logout();
    setIsLogged(false);
  };

  const updateProfile = async (form) => {
    const result = await User.updateProfile(form);
    setUser((user) => ({ ...user, ...result }));
  };

  const register = ({ name, email, password }) => {
    return AuthService.createAccount({ name, email, password });
  };

  const useContext = {
    user,
    isLogged,
    isError,
    setIsError,
    login,
    logout,
    updateProfile,
    register,
  };

  return (
    <AuthContext.Provider value={useContext}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
