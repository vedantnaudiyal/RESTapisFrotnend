import React, { useContext, useState } from "react";
import EmployeeForm from "./EmployeeForm";
import EmployeeContext from "../context/employee/EmployeeContext";

const RegisterNewEmployee = () => {
    const { addNewEmployee }=useContext(EmployeeContext);
    const initialValue={name: "", dateOfJoining: "", age: 18, isActive: true, email: ""};
    // const [newEmployee, setNewEmployee]=useState(initialValue);
    // const onChange =(e)=>{
    //     const x=e.target.value.trimStart();
    //     setNewEmployee({...newEmployee,[e.target.name]: x})
    // }
    // const handleClick =(event)=>{
    //     event.preventDefault();
    //     addNewEmployee({
    //         name: newEmployee.name,
    //         email: newEmployee.email,
    //         dateOfJoining : newEmployee.dateOfJoining,
    //         isActive: newEmployee.isActive,
    //         age : newEmployee.age
    //     });
    //     setNewEmployee(initialValue);
    // }
    const [openForm, setOpenForm] = useState(false);
    return (
        <>
            <div className="container my-1">
                <h2 className='my-3 text-center' >Register a new Employee</h2>
                <div className="container text-center">
                    <button className="btn btn-info px-4" onClick={()=>setOpenForm(!openForm)}>Click to toggle Employee Form!</button>
                </div>
                {
                    openForm && <EmployeeForm initialValue={initialValue} onSubmit={addNewEmployee}/>
                }

                {/* <button type="button" className="btn btn-info" data-toggle="collapse" data-target="#demo">Register a new employee</button> */}
                {/* <div id="demo" className="collapse"> */}
                {/* <EmployeeForm /> */}
                {/* </div> */}

                {/* <form>
                    <input type="submit" className="btn btn-primary" />
                </form> */}
            </div>
        </>
    )
}
export default RegisterNewEmployee;