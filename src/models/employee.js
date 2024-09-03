import React, { createContext, useState, useEffect } from "react";

// Create the UserContext
export const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
  const [emp, setUser] = useState(null);

  useEffect(() => {
    // Example: Fetch emp data from sessionStorage or API
    const storedUserData = JSON.parse(sessionStorage.getItem("userData"));
    if (storedUserData) {
      setUser(storedUserData);
    }
  }, []);

  return (
    <EmployeeContext.Provider value={{ emp, setUser }}>
      {children}
    </EmployeeContext.Provider>
  );
};
