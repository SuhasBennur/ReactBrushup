// AuthContext.jsx
import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // null = not logged in

  const login = (email, password) => {
    // TODO: Replace with real API call
    if (email && password) {
      setUser({ email }); // store user info
    }
  };

  const register = (name, email, password) => {
    // TODO: Replace with real API call
    console.log("Register:", { name, email, password });
    // after registration, auto-login
    setUser({ email });
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}