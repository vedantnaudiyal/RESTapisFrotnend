import React, { useContext, useEffect } from "react";
import RegisterNewEmployee from "../components/RegisterNewEmployee";
import EmployeeList from "../components/EmployeeList";
import EmployeeContext from "../context/employee/EmployeeContext";
import { toast } from "react-toastify";
import { baseUrl } from "../configs/ApiConfigs";
import UserContext from "../context/user/UserContext";

const HomePage=()=>{
    // const {user}=useContext(UserContext);
    // useEffect(()=>{
    //     const previousURL=document.referrer;
    //     switch(previousURL){
    //         case baseUrl+'./signIn':
    //             toast.success("Signed in successfully!");
    //             break;
    //         case baseUrl+'./signUp':
    //             toast.success("Signed up successfully!");
    //             break;
    //         default:
    //             break
    //     }
    //     console.log(previousURL);
    //     console.log("./signIn");
        
    // }, [user]);

    return (
        <div>
            <h1 className="my-3 text-center">Welcome to our Employee Mangememnt System 🤓.</h1>
            <RegisterNewEmployee />
            <EmployeeList/>
        </div>
    );
}
export default HomePage;