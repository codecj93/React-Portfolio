import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AboutMe from './pages/AboutMe.jsx'
import ContactMe from './pages/ContactMe.jsx'
import MyWork from './pages/MyWork.jsx'
import Resume from './pages/Resume.jsx'


const router = createBrowserRouter([
  { 
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <AboutMe />
      },
      {
        path: '/contact-me',
        element: <ContactMe />
      },
      {
        path: '/my-work',
        element: <MyWork />
      },
      {
        path: '/resume',
        element: <Resume />
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

