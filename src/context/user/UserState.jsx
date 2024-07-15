import { useState } from "react";
import UserContext from "./UserContext";
import authenticateUserUtil from "../../utils/UserUtils/authenticateUser";
import registerUserUtil from "../../utils/UserUtils/registerUser";
import { toast } from "react-toastify";

const UserState=(props)=>{
  const [user, setUser]=useState({
    username: "Varun",
    password: "1234",
    // roles: ["ROLE_USER", "ROLE_ADMIN"]
  });

  
// sign in 
  const authenticateUser=async (body)=>{
    try{
      const response=await authenticateUserUtil(body);
      console.log("token", response);
      localStorage.setItem("authToken", response);
      setUser(body);
      toast.success("signed in successfully!");
    }
    catch(err){
      toast.error("sign in fail!");
    }
  }

// sign up
  const registerUser=async (body)=>{
    try{
      const response=await registerUserUtil(body);
      console.log(response);
      localStorage.setItem("authToken", response);
      setUser(body);
    }
    catch(err){
      console.log(err.message);
    }
    
  }

  const logOut=()=>{
    try{
      console.log("logout executed!");
      localStorage.removeItem("authToken");
      setUser({
        username: "",
        password: ""
      });
    }
    catch(err){
      console.log(err.message);
    }

    console.log("logout executed!");
    localStorage.removeItem("authToken");
    window.location.replace("./signIn");
  }
  return (
      <UserContext.Provider value={{user, setUser, authenticateUser, registerUser, logOut}}>
          {props.children}
      </UserContext.Provider>
  )
}

export default UserState;