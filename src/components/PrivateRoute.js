import React from 'react';
import { Navigate } from "react-router-dom";

function PrivateRoute({ children , isAuthenticated }){
    alert(isAuthenticated);
    return isAuthenticated ? children : <Navigate to="/auth"/>
}

export default PrivateRoute;