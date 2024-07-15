import React from "react";
import EmployeeDetails from "../components/EmployeeDetails";

const EmployeePage =({employee}) =>{
    return (
        <>
            <EmployeeDetails employee={employee}/>
        </>
    )
}
export default EmployeePage;