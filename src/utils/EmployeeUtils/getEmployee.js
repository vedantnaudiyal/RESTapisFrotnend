import { useContext } from "react";
import { baseUrl, endpoints } from "../../configs/ApiConfigs";
import EmployeeContext from "../../context/employee/EmployeeContext";
import handleAlerts from "../HandleAlerts";

const getEmployee = async (id) => {
  const { setCurrEmployee } = useContext(EmployeeContext);
  const url = `${baseUrl + endpoints.getEmployee(id)}`;
  console.log("getEmployee running!");
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
  setCurrEmployee(response);
  return response;
}

export default getEmployee;