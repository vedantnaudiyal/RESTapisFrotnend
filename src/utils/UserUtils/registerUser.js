import { baseUrl, endpoints } from "../../configs/ApiConfigs"
import handleAlerts from "../HandleAlerts";

const registerUser=async (body)=>{
    const url=`${baseUrl + endpoints.signUp}`;
    body.role="USER";
    console.log(url);
    // try{
        let response=await fetch(url,{
                method: "POST",
                headers:  {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify(body)
            }
        )

        console.log("register a new user with authority of 'ROLE_USER'!");
        console.log(response)
        handleAlerts(response);
        response=await response.text();
        return response;
        // response=await response.headers();
        // console.log(response)
        // return response.headers.authToken;
    // } catch(err){
    //     console.log(err.message);
    // }
}

export default registerUser;