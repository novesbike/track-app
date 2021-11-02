import React, { createContext, useState, useEffect } from "react";
import { AuthService } from "services/auth.service.js";
const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [isError, setIsError] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  async function checkLoggedUser() {
    const user = AuthService.getLoggedUser();
    const hasUserLoggedIn = !!user && user.token;

    if (hasUserLoggedIn) {
      setUser(user);
      setIsLogged(true);
    }
  }

  useEffect(() => checkLoggedUser(), []);

  const fakeLogin = () => {
    const user = {
      name: "João",
    };
    setUser(user);
    setIsLogged(true);
  };

  const login = async (email, password) => {
    return AuthService.login(email, password).then((data) => {
      setUser(data);
      setIsLogged(true);
    });
  };

  const logout = () => {
    AuthService.logout();
    setIsLogged(false);
  };

  const useContext = {
    user,
    isLogged,
    isError,
    setIsError,
    login,
    logout,
    fakeLogin,
  };

  return (
    <AuthContext.Provider value={useContext}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
