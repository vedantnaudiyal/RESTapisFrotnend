import { RouterProvider, createRoutesFromChildren, createBrowserRouter, Outlet } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import EmployeePage from "../pages/EmployeePage";
import App from "../App";
import Protected from "../layouts/Protected";
import Public from "../layouts/Public";

const Index = () => {
    const employee={
        "name": "John Smith",
        "dateOfJoining": "1985-03-10",
        "isActive": true,
        "email": "john.smith@example.com",
        "age": 39
      };
    const router = createBrowserRouter([
        {
            path: "/",
            errorElement: <h1 className="m-5 text-center">Page not found! ☹️</h1>,
            children: [
                {
                    element: <Protected />,
                    children: [
                        {
                            index: true,
                            element: <HomePage />
                        },
                        {
                            path: "employee",
                            element: <EmployeePage employee={employee} />
                        },
                    ]
                },
                {
                    element: <Public />,
                    children: [
                        {
                            path: "signIn",
                            element: <SignInPage />,
                        },
                        {
                            path: "signUp",
                            element: <SignUpPage />
                        },
                    ]
                }
                
            ]
            
        },
        

    ]
    );

    return (
        <>
            <RouterProvider router={router}>
            </RouterProvider>
        </>
        // router
    )
}

export default Index;