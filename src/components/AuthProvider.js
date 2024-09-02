import React, { createContext, useContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("Auth State Changed:", user);
      setCurrentUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={currentUser}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
