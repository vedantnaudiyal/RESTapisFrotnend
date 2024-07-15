import { useEffect, useState } from "react";
import EmployeeContext from "./EmployeeContext";
import { baseUrl, endpoints } from "../../configs/ApiConfigs";
import getAllEmployeesUtil from "../../utils/EmployeeUtils/getAllEmployees";
import deleteEmployeeUtil from "../../utils/EmployeeUtils/deleteEmployee";
import addNewEmployeeUtil from "../../utils/EmployeeUtils/addNewEmployee";
import getEmployeeUtil from "../../utils/EmployeeUtils/getEmployee";
import updateEmployeeUtil from "../../utils/EmployeeUtils/updateEmployee";


const EmployeeState = (props) => {

  const [employees, setEmployees] = useState(null)

  const [currEmployee, setCurrEmployee] = useState({
    "name": "Daniel Clark",
    "dateOfJoining": "1984-01-15",
    "isActive": true,
    "email": "daniel.clark@example.com",
    "age": 40
  });

  const getAllEmployees = async () => {
    try {
      const response = await getAllEmployeesUtil();
      setEmployees(response);
      console.log(employees);
    }
    catch (err) {
      console.log(err.message ? err.message : err);
    }
  }
  const addNewEmployee = async (body) => {
    try {
      const response = await addNewEmployeeUtil(body);
      setEmployees([...employees, response]);
    }
    catch (err) {
      console.log(err.message ? err.message : err);
    }

  }

  const deleteEmployee = async (id) => {
    try {
      await deleteEmployeeUtil(id);
      setEmployees(employees.filter((employee) => employee.id != id));
      console.log(employees);
    }
    catch (err) {
      console.log(err.message ? err.message : err);
    }
  }

  const updateEmployee = async (id, body) => {
    try {
      const response = await updateEmployeeUtil(id, body);
      const empList = (employees.filter(employee => employee.id != id));
      console.log([...empList, response]);
      setEmployees([...empList, response]);
      return response;
    }
    catch (err) {
      console.log(err.message ? err.message : err);
    }
  }

  return (
    <EmployeeContext.Provider value={{ employees, setEmployees, currEmployee, setCurrEmployee, getAllEmployees, deleteEmployee, addNewEmployee, updateEmployee }}>
      {props.children}
    </EmployeeContext.Provider>
  )
}

export default EmployeeState;