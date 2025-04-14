import { createContext, useContext, useState, useEffect } from 'react'
import { USER_ROLES } from '../constants/enums'

const AppContext = createContext()

export function AppProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    // On mount, check localStorage
    const storedUser = localStorage.getItem('currentUser')
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser))
    }
  }, [])

  const login = (role) => {
    const user = { name: 'Test User', role }
    setCurrentUser(user)
    localStorage.setItem('currentUser', JSON.stringify(user)) // ✅ Save to localStorage
  }

  const logout = () => {
    setCurrentUser(null)
    localStorage.removeItem('currentUser') // ✅ Remove from localStorage
  }
  console.log('Current user state:', currentUser)
  return (
    <AppContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AppContext.Provider>
    
  )
}

export function useAppContext() {
    
  return useContext(AppContext)
}
