import React, { useContext } from "react";
import UserForm from "../components/UserForm";
import { Link } from "react-router-dom";
import UserContext from "../context/user/UserContext";

const SignUpPage =() =>{
    const {registerUser}=useContext(UserContext);
    const onSubmit=async (body)=>{
        try{
            console.log("register a new user");
            console.log(body)
            await registerUser(body);
            window.location.replace("./");
        }
        catch(err){
            console.log(err.message);
        }
    }
    return (
        <>
            <div className="container mt-4">
                <h1>Pls Sign Up and be the part of this huge community!</h1>
                <br/>
                <UserForm onSubmit={onSubmit}/>
                <p className="mt-3 text-center">Already have an account! 🤝 <br /> Click on 👉 <Link to="/signIn">SignIn</Link></p>
                
            </div>
        </>
    )
}
export default SignUpPage;