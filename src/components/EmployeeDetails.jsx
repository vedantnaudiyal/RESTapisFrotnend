import React, { useContext } from "react";
import EmployeeContext from "../context/employee/EmployeeContext";
import EmployeeForm from "./EmployeeForm";
import EditEmployee from "./EditEmployee";

const EmployeeDetails = () => {
    const { currEmployee, setCurrEmployee, updateEmployee, deleteEmployee } = useContext(EmployeeContext);
    const initialValue = currEmployee;
    const onSubmit = async (body) => {
        try {
            const response = await updateEmployee(currEmployee.id, body);
            if(response.name) setCurrEmployee(response);
        } catch (err) {
            console.log(err.message);
        }
        document.getElementById("closeButton").click();
    }
    return (
        <>
            <div className="container m-5">
                <h1 className="fw-bolder">Employee Detials!</h1>
                <div className="jumbotron p-3">
                    <h1 className="display-4 mb-3">{currEmployee.name}</h1>
                    <p className="lead">Empolyee_id : {currEmployee.id}</p>
                    {/* TO DO BE IMPLEMENTED! */}
                    <p className="lead">Empolyee's email : <div style={{ display: "inline-block" }}>{currEmployee.email}</div></p>
                    <hr className="my-4" />
                    <p>Employee's Date of joining : {currEmployee.dateOfJoining}</p>
                    <p>Employee's active status : {currEmployee.isActive}</p>
                    <p>Employee's age : {currEmployee.age}</p>
                    <div className="flex justify-content-right">
                        {/* edit button + edit employee modal */}
                        <button type="button" id="employeeEditModalButton" className="btn btn-success mx-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Edit Employee
                        </button>
                        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Edit employee</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <EmployeeForm onSubmit={onSubmit} initialValue={initialValue} />
                                    </div>
                                    <div class="modal-footer">
                                        <button id="closeButton" type="button" class="btn btn-secondary" data-bs-dismiss="modal" hidden={true}>Close</button>

                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* delete button + delete employee popup */}
                        <button type="button" id="employeeEditModalButton" className="btn btn-danger mx-2" data-bs-toggle="modal" data-bs-target="#deleteEmployeeModal">
                            Delete Employee
                        </button>
                        <div id="deleteEmployeeModal" className="modal fade" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Delete employee</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body fw-bold">
                                        Are You sure, you want to delete this employee detail 🥸?
                                    </div>
                                    <div class="modal-footer">
                                        <button id="closeDeleteButton" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-danger" onClick={()=>{
                                            try{
                                                deleteEmployee(currEmployee.id);
                                                document.getElementById("closeDeleteButton").click();
                                                window.location.replace("./");
                                            }
                                            catch(err){
                                                console.log(err.meassage);
                                            }
                                        }}>Yes, delete it!</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default EmployeeDetails;