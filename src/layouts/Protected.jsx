import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const Protected=()=>{
    const authToken=localStorage.getItem("authToken");

    return (authToken && authToken.length) ? <Outlet /> : <Navigate to="/signIn" />;
};

export default Protected;
