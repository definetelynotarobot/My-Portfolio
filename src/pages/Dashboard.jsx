import { useAppContext } from "../context/AppContext"
import {api} from "../services/api"
import { useEffect, useState } from "react"


export default function Dashboard() {
    const {currentUser, logout} = useAppContext()
    const [posts, setPosts] = useState([])

    useEffect(() => {
        api.get('/posts?_limit=5')
          .then((response) => {
            setPosts(response.data)
          })
          .catch((error) => {
            console.error('Error fetching posts:', error)
          })
      }, [])

    if(!currentUser) {
    return <h1>Please login first</h1>
  }
  return (
    <div>
    <h1>Dashboard Page</h1>
    <p>Welcome {currentUser.name}</p>
    <p>Your role is {currentUser.role}</p>
    <button onClick={logout}>Logout</button>

    <h2>Posts:</h2>
    <ul>
    {posts.map(post => (
    <li key={post.id}>{post.title}</li>
    ))}
    </ul>
    </div>
  ) 
}
  