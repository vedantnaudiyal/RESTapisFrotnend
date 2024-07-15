import React, { useState } from "react";
import { toast } from "react-toastify";

const UserForm =({onSubmit}) =>{
    const [user, setUser]=useState({
        username: "",
        password: ""
    });
    const onChange=(event)=>{
        const x=event.target.value;
        // console.log("my",user);
        setUser({...user,[event.target.name]: x})
    }
    const handleSubmit=async (event)=>{
        event.preventDefault();
        console.log("User form filled", user);
        
        await onSubmit(user);
        setUser({
            username: "",
            password: ""
        });
        
    }
    return (
        <>
            <form action="#" onSubmit={handleSubmit} className="m-5">
                <div className="mb-3">
                    <label for="username" className="form-label">Username</label>
                    <input type="text" className="form-control" id="username" name="username" aria-describedby="emailHelp" value={user.username} onChange={onChange} required/>
                    <div id="emailHelp" className="form-text">We'll never share your details with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label" >Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={user.password} onChange={onChange} required={true}/>
                </div>
                <button type="submit" className="btn btn-primary" disabled={user.username.length<4 || user.username.length>20 /*|| user.password.match(/^(?:(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*)$/)===null*/}>Submit</button>
            </form>
        </>
    )
}
export default UserForm;