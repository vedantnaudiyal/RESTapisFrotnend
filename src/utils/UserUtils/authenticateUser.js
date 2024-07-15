import { baseUrl, endpoints } from "../../configs/ApiConfigs"
import handleAlerts from "../HandleAlerts";

const authenticateUser=async (body)=>{
    const url=`${baseUrl + endpoints.signIn}`;
    console.log(body);
    // try{
        let response=await fetch(url,{
                method: "POST",
                headers:  {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify(body)
            }
        )

        console.log("authenticate a user!");
        handleAlerts(response);
        response=await response.text();
        console.log(response);
        return response;
    // } catch(err){
    //     console.log(err.message);
    // }
}

export default authenticateUser;