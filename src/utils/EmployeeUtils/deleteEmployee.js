import { baseUrl, endpoints } from "../../configs/ApiConfigs";
import handleAlerts from "../HandleAlerts";

const deleteEmployee = async (id) => {
  const url = `${baseUrl + endpoints.deleteEmployee(id)}`;
  let response = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
      'Content-Type': "application/json"
    }
  });
  console.log("delete an employee!");
  handleAlerts(response);
  response = await response.json();

  console.log(response);
  return response;
}

export default deleteEmployee;