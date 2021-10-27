import React, { createContext, useState, useEffect } from "react";
import { AuthService } from "services/auth.service.js";
const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [isError, setIsError] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  async function checkLoggedUser() {
    const user = AuthService.getLoggedUser();
    const hasUserLoggedIn = !!user && user.token;

    if (hasUserLoggedIn) {
      setUser(user);
      setIsLoggedIn(true);
    }
  }

  useEffect(() => checkLoggedUser(), []);

  const login = async (email, password) => {
    return AuthService.login(email, password).then((data) => {
      setUser(data);
      setIsLoggedIn(true);
    });
  };

  const logout = () => {
    AuthService.logout();
    setIsLoggedIn(false);
  };

  const useContext = {
    user,
    isLoggedIn,
    isError,
    setIsError,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={useContext}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
