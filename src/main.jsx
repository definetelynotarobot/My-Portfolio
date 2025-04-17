import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from './routes/router'
import { AppProvider } from './context/AppContext'
import { LoadingProvider } from './context/LoadingContext' 
import './index.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init()



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <LoadingProvider>
        <AppRouter />
      </LoadingProvider>
    </AppProvider>
  </React.StrictMode>
)
