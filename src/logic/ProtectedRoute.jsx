import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = (props) => {
    const isUserSignedIn = useSelector((state) => state.auth.isUserSignedIn);

    if (!isUserSignedIn) {
        return <Navigate to={props.redirectTo} replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;