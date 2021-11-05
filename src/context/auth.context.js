import React, { createContext, useState, useEffect } from "react";
import { AuthService } from "services/auth.service.js";
const AuthContext = createContext({});

const defaultUser = {
  name: "João Nobre",
  avatar:
    "https://img2.gratispng.com/20180625/req/kisspng-computer-icons-avatar-business-computer-software-user-avatar-5b3097fcae25c3.3909949015299112927133.jpg",
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(defaultUser);
  const [isError, setIsError] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  async function checkLoggedUser() {
    const user = AuthService.getLoggedUser();
    const hasUserLoggedIn = !!user && user.token;

    if (hasUserLoggedIn) {
      setIsLogged(true);
    }
  }

  useEffect(() => checkLoggedUser(), []);

  const fakeLogin = () => {
    setUser(defaultUser);
    setIsLogged(true);
  };

  const login = async (email, password) => {
    return AuthService.login(email, password).then((data) => {
      setUser(data);
      setIsLogged(true);
    });
  };

  const fakeLogout = () => {
    setUser(null);
    setIsLogged(false);
  };

  const logout = () => {
    AuthService.logout();
    setIsLogged(false);
  };

  const updateProfile = (user) => {
    setUser(user);
  };

  const useContext = {
    user,
    isLogged,
    isError,
    setIsError,
    login,
    logout,
    updateProfile,
    fakeLogin,
    fakeLogout,
  };

  return (
    <AuthContext.Provider value={useContext}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
