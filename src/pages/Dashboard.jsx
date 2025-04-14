import { useAppContext } from "../context/AppContext"
import {api} from "../services/api"
import { useEffect, useState } from "react"
import { useLoading } from '../context/LoadingContext'



export default function Dashboard() {
    const {currentUser, logout} = useAppContext()
    const [posts, setPosts] = useState([])
    const { startLoading, stopLoading, isLoading } = useLoading()
    const [error, setError] = useState(null)


    useEffect(() => {
        startLoading()
        setError(null)
      
        api.get('/posts?_limit=5')
          .then((response) => {
            setPosts(response.data)
          })
          .catch((error) => {
            console.error('Error fetching posts:', error)
            setError('Failed to load posts. Please try again later.')
          })
          .finally(() => {
            stopLoading()
          })
      }, [currentUser])
      

    if(!currentUser) {
    return <h1>Please login first</h1>
  }
  return (
    <div>
    <h1>Dashboard Page</h1>
    <p>Welcome {currentUser.name}</p>
    <p>Your role is {currentUser.role}</p>
    <button onClick={logout}>Logout</button>

    {error && <p style={{ color: 'red' }}>{error}</p>}


    {isLoading && <p>Loading posts...</p>}

    <h2>Posts:</h2>
    <ul>
    {posts.map(post => (
    <li key={post.id}>{post.title}</li>
    ))}
    </ul>
    </div>
  ) 
}
  