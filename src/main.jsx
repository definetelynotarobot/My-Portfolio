import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from './routes/router'
import { AppProvider } from './context/AppContext'
import { LoadingProvider } from './context/LoadingContext' 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <LoadingProvider>
        <AppRouter />
      </LoadingProvider>
    </AppProvider>
  </React.StrictMode>
)
