import React, { createContext, useContext, useState, useEffect } from 'react';
import { TokenManager } from '../utils/tokenManager';

const AuthContext = createContext({
  isLoading: true,
  userToken: null,
  userType: null,
  signIn: () => {},
  signOut: () => {},
});

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);
  const [userType, setUserType] = useState(null);

  useEffect(() => {
    checkAuthState();
  }, []);

  const checkAuthState = async () => {
    try {
      const token = await TokenManager.getToken();
      const user = await TokenManager.getUser();
      
      setUserToken(token);
      setUserType(user?.userType || null);
    } catch (error) {
      console.error('Error checking auth state:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const signIn = async (token, user) => {
    try {
      await TokenManager.setToken(token);
      await TokenManager.setUser(user);
      setUserToken(token);
      setUserType(user?.userType || null);
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };

  const signOut = async () => {
    try {
      await TokenManager.clearAll();
      setUserToken(null);
      setUserType(null);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ isLoading, userToken, userType, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};