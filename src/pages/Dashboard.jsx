import { useAppContext } from "../context/AppContext"


export default function Dashboard() {
    const {currentUser, logout} = useAppContext()

    if(!currentUser) {
    return <h1>Please login first</h1>
  }
  return (
    <div>
    <h1>Dashboard Page</h1>
    <p>Welcome {currentUser.name}</p>
    <p>Your role is {currentUser.role}</p>
    <button onClick={logout}>Logout</button>
    </div>
  ) 
}
  