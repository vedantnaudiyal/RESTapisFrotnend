import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import EmployeeContext from "../context/employee/EmployeeContext";

const EmployeeItem =({employee}) =>{
    const {currEmployee, setCurrEmployee} = useContext(EmployeeContext);
    return (
        <>
            <div className="card mx-2 my-2" style={{width : "18rem"}}>
                <div className="card-body">
                    <h5 className="card-title">{employee && employee.name}</h5>
                    <p className="card-text">Email handle: <span>{employee && employee.email}</span></p>
                    <Link to="/employee" className="btn btn-primary" onClick={()=>setCurrEmployee(employee)}>See details...</Link>
                </div>
            </div>
        </>
    )
}
export default EmployeeItem;