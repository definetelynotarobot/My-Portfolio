import { useAppContext } from "../context/AppContext";
import { USER_ROLES } from "../constants/enums";

export default function Login() {
    const { login } = useAppContext()

    return(
        <div>
            <h1>Login Page</h1>
            <button onClick={() => login(USER_ROLES.ADMIN)}>Login as Admin</button>
            <button onClick={() => login(USER_ROLES.USER)}>Login as User</button>
            <button onClick={() => login(USER_ROLES.GUEST)}>Login as Guest</button> 
        </div>
    )
}