import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const Public=()=>{
    const authToken=localStorage.getItem("authToken");

    return authToken ? <Navigate to="/" /> : <Outlet /> ;
};

export default Public;
