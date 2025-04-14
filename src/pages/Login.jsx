import { useAppContext } from "../context/AppContext";
import { USER_ROLES } from "../constants/enums";
import { useNavigate } from 'react-router-dom'
import { useEffect } from "react";


export default function Login() {
    const { login } = useAppContext()
    const navigate = useNavigate() 
    
    const handleLogin = (role) => {
        login(role) //  update context
        navigate('/dashboard') 
      }
    
      const { currentUser } = useAppContext()


      useEffect(() => {
        if (currentUser) {
          navigate('/dashboard')
        }
      }, [currentUser, navigate]) // ✅ Dependency array 
      return (
        <div>
          <h1>Login Page</h1>
          <button onClick={() => handleLogin(USER_ROLES.ADMIN)}>Login as Admin</button>
          <button onClick={() => handleLogin(USER_ROLES.USER)}>Login as User</button>
          <button onClick={() => handleLogin(USER_ROLES.GUEST)}>Login as Guest</button>
        </div>
      )
}