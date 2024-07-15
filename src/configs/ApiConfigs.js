const baseUrl="http://localhost:8080";

const endpoints={
    signIn: "/authenticate",
    signUp: "/register/user",
    getAllEmployees: "/employees",
    getEmployee: (id)=>`/employees/${id}`,
    addEmployee: ()=>`/employees`,
    deleteEmployee: (id)=>`/employees/${id}`,
    updateEmployee: (id)=>`/employees/${id}`,
}

export {
    baseUrl,
    endpoints
};