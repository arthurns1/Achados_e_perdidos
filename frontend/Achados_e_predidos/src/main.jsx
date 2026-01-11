//React
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

//React Router
import {createBrowserRouter, RouterProvider} from "react-router-dom"

//Routes
import { Home } from './routes/Home.jsx'
import { Login } from './routes/Login.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path:"/",
        element: <Home/>
      },
      {
        path:"login",
        element: <Login/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
