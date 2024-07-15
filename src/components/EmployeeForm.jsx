import React, { useEffect, useState } from "react";

const EmployeeForm =({onSubmit, initialValue}) =>{
    useEffect(()=>{
        console.log("employee form was opened!");
    }, [])
    const [employee, setEmployee] = useState(initialValue);
    const onChange=(event)=>{
        const x=event.target.value;
        setEmployee({...employee,[event.target.name]: x})
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log("add new emoplyee form filled", employee);
        console.log(employee)
        onSubmit(employee);
        setEmployee(initialValue);
    }
    return (

        <>
            <form className="mx-5" action="#" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Username</label>
                    <input type="text" className="form-control" id="name" name="name" aria-describedby="nameHelp" required value={employee.name} onChange={onChange}/>
                    <div id="nameHelp" className="form-text"></div>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label" >Email</label>
                    <input type="email" className="form-control" id="email" name="email" required={true} value={employee.email} onChange={onChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="age" className="form-label" >Age</label>
                    <input type="number" className="form-control" min="18" max="60" id="age" name="age" required={true} value={employee.age} onChange={onChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="dateOfJoining" className="form-label" >Date of joining</label>
                    <input type="text" className="form-control" id="dateOfJoining" name="dateOfJoining" placeholder="Pls enter a valid date in 'YYYY-MM-DD' format" required={true} value={employee.dateOfJoining} onChange={onChange} />
                </div>
                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
        </>
    )
}
export default EmployeeForm;