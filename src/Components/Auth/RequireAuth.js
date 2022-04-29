import { getAuth } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import app from "../../firebase.init";

const RequireAuth = ({ children }) => {
  const auth = getAuth(app);
  const [user, loading, error] = useAuthState(auth);
  const location = useLocation();

  if (user) {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
};

export default RequireAuth;
