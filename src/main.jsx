import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router/router.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-screen-2xl mx-10 px-20'>
      <AuthProvider>
        <RouterProvider  router={router}></RouterProvider>
      </AuthProvider>
    
    </div>
  </React.StrictMode>,
)
