import React, { useContext, useEffect } from "react";
import UserForm from "../components/UserForm";
import { Link } from "react-router-dom";
import UserContext from "../context/user/UserContext";
import { toast } from "react-toastify";

const SignInPage =() =>{
    const {authenticateUser}=useContext(UserContext);
    const onSubmit=async (body)=>{
        try{
            console.log("authenticating user");
            console.log(body)
            await authenticateUser(body);
            window.location.replace("./");
            toast.info("you have logged in successfully");
        }
        catch(err){
            console.log(err.message);
        }
    }
    return (
        <>
            <div className="container mt-4">
                <h1>Pls Sign In with your credentials</h1>
                <br/>
                <UserForm onSubmit={onSubmit}/>
                <p className="mt-3 text-center">Don't have an account! Worry not, you can make one in a minute! 😁<br /> Click on 👉 <Link to="/signUp">SignUp</Link></p>
                
            </div>
        </>
    )
}
export default SignInPage;