import React, { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { Outlet, Navigate } from "react-router-dom";

const Private = () => {
  const { currentUser } = useContext(UserContext);
  if (!currentUser) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
};

export default Private;
