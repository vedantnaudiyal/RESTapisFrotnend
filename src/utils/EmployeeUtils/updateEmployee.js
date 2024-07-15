import { baseUrl, endpoints } from "../../configs/ApiConfigs";
import handleAlerts from "../HandleAlerts";

const updateEmployee = async (id, body) => {
  const url = `${baseUrl + endpoints.updateEmployee(id)}`;
  let response = await fetch(url, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
      'Content-Type': "application/json"
    },
    body: JSON.stringify(body)
  });
  handleAlerts(response);
  response = await response.json();


  console.log("updating an existing employee!");
  console.log(response);
  return response;
}

export default updateEmployee;