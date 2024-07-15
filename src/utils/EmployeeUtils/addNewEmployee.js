import { toast } from "react-toastify";
import { baseUrl, endpoints } from "../../configs/ApiConfigs";
import handleAlerts from "../HandleAlerts";

const addNewEmployee = async (body) => {
  const url = `${baseUrl + endpoints.addEmployee()}`;
  let response = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
      'Content-Type': "application/json"
    },
    body: JSON.stringify(body)
  });
  handleAlerts(response);
  response = await response.json();
  console.log("adding a new employee!");
  console.log(response);
  return response;

}

export default addNewEmployee;