import { useContext } from "react";
import { baseUrl, endpoints } from "../../configs/ApiConfigs";
import EmployeeContext from "../../context/employee/EmployeeContext";
import { toast } from "react-toastify";
import handleAlerts from "../HandleAlerts";

const getAllEmployees = async (id) => {
    // const { employees, setEmployees } = useContext(EmployeeContext);
    console.log("getallemployees")
    const url = `${baseUrl + endpoints.getAllEmployees}`;
    console.log("getAllemployees running!");
    let response = await fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
            'Content-Type': "application/json"
        }
    });
    handleAlerts(response);
    response = await response.json();
    console.log(response);
    return response;

}

export default getAllEmployees;