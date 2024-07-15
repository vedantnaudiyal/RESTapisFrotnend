
import { useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import EmployeeState from './context/employee/EmployeeState'
import UserState from './context/user/UserState'
import Index from './routes/Index'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {

  return (
    <>
      <ToastContainer
          position="top-right"
          autoClose={5000}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          
        />
      <UserState>
        <EmployeeState>
        
          <Navbar />
          <Index />
        </EmployeeState>
      </UserState>
    </>

  )
}

export default App
