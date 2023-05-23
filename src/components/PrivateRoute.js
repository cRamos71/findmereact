import { Navigate } from "react-router-dom";
import React from "react";


function PrivateRoute ({ children , redirectTo}){ 
    const isAuthenticated = sessionStorage.getItem("token") !== null;
    return isAuthenticated ? children : <Navigate  to={redirectTo} />
}

export default PrivateRoute;