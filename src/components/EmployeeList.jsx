import React, { useContext, useEffect } from "react";
import EmployeeItem from "./EmployeeItem";
import EmployeeContext from "../context/employee/EmployeeContext";
import UserContext from "../context/user/UserContext";
import registerUser from "../utils/UserUtils/registerUser";

const EmployeeList =() =>{
    // const {getAllEmployees}=useContext(EmployeeContext);
    const {user, authenticateUser, logOut, registerUser }=useContext(UserContext);
    const {employees, setEmployees, getAllEmployees, addNewEmployee, deleteEmployee, getEmployee, updateEmployee }=useContext(EmployeeContext)
    useEffect(()=>{
        getAllEmployees();
      }, [user])

    return (
        <div className="container mt-5">
            <h2 className="text-center">List of employees currently registered in system :</h2>
            <div className="row justify-content-center">
                <div className="container fs-5 fw-bold">
                    {employees && employees.length === 0 && "No employees registered yet!! 🙂"}
                </div>
                {
                employees && employees.map((employee, ind) => {
                    return <EmployeeItem key={ind} employee={employee} />
                })
                // ? 
                // employees.map((employee, ind) => {
                //     return <EmployeeItem key={ind} employee={employee} />
                // }) :
                // <h3 className="m-5 p-5">No employee entries here!<h3/>
                }
            </div>
        </div>
    )
}
export default EmployeeList;