import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';

// Import your pages here
import RegisterPage from './pages/RegisterPage.jsx'
import ForgotPassword from './pages/ForgotPassword.jsx'
import Home from './pages/Home.jsx'
import Message from './components/Message.jsx'
import AuthLayouts from './Layout/AuthLayouts.jsx'

const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"register",
        element:<AuthLayouts><RegisterPage/></AuthLayouts>
      },
      {
        path:'forgot-password',
        element:<AuthLayouts><ForgotPassword/></AuthLayouts>
      },
      {
        path:"",
        element:<Home/>,
        children:[
          {
            path:':userId',
            element:<Message/>
          }
        ]
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
    <Toaster/>
  </>,
)

