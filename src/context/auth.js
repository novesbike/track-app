import React, {createContext, useState} from 'react'

const AuthContext = createContext({})

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState({});
  const [isError, setIsError] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  /*** todo
   * implement sign in
   * implement logout
   * check logged user
   * */


  async function checkLoggedUser() {
  }

  const signIn = () => {
  }


  const logout = () => {
  }

  const useContext = {
    user,
    isLoggedIn,
    isError,
    signIn,
    logout
  }

  return <AuthContext.Provider value={useContext}>
    {children}
  </AuthContext.Provider>
}
