import React,{ createContext, useState, useEffect } from 'react';



export const AuthContext = createContext({user:undefined});
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);


  useEffect(() => {
    const isLogin = window.localStorage.getItem('isLogin');
    const token = window.localStorage.getItem('token');
    if (isLogin && token) {
      setUser({ isLogin, token});
    }
  }, []);

  return (
    <AuthContext.Provider value={{user,setUser}}>
    { children }
    </AuthContext.Provider>
  );
};
