import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const userData = sessionStorage.getItem("userData");
    if (userData) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Or any loading indicator
  }

  return authenticated ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
