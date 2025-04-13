import { createContext, useContext, useState } from 'react'
import { USER_ROLES } from '../constants/enums'

const AppContext = createContext()

export function AppProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null)

  const login = (role) => {
    setCurrentUser({ name: 'Test User', role })
  }

  const logout = () => {
    setCurrentUser(null)
  }

  return (
    <AppContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext)
}
