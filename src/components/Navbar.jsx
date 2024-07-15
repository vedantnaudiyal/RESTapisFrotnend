import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../context/user/UserContext";

const Navbar=()=>{
    const {logOut}=useContext(UserContext);
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">EmpSys</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#">About</a></li>
                        <li><a className="dropdown-item" href="#">Help</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
                <form className="d-flex">
                    {
                        // TO DO !
                        localStorage.getItem("authToken")
                        ? 
                        <button className="btn btn-outline-primary mx-1" role='button' onClick={()=>{logOut()}}>Sign Out</button>
                        :
                        <div>
                            <button className="btn btn-outline-primary mx-1" role='button'><a className="nav-link" href="./signUp">Sign Up</a></button>
                            <button className="btn btn-outline-primary mx-1" role='button'><a className="nav-link" href="./signIn">Sign In</a></button>
                        </div>
                    }
                </form>
                </div>
            </div>
        </nav>
    </>
    )
}

export default Navbar