import React, { useContext, useEffect, useState } from 'react';

export const AuthContext = React.createContext({});
export const UseAuthProvider = () => {
  const [state, setState] = useContext(AuthContext);
  console.log('auth provider', state);
  return [state, setState];
};
export const AuthProvider = ({ children }) => {
  const [state, setState] = useState({
    rehydrated: false,
  });
  console.log('auth', state);
  const rehydrateStorage = async () => {
    const data = localStorage.getItem('user');
    setState(prev => ({
      ...prev,
      ...(data && JSON.parse(data)),
      rehydrated: true,
    }));
  };
  useEffect(() => {
    rehydrateStorage();
  }, []);
  useEffect(() => {
    console.log('user local storage', state);
    localStorage.setItem('user', JSON.stringify(state));
  }, [state]);
  return (
    <AuthContext.Provider value={[state, setState]}>
      {children}
    </AuthContext.Provider>
  );
};
