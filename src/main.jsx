import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App'
import './index.css'
import About from './components/About/About'
import Contact from './components/Contact/Contact'

const route = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      }
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route}></RouterProvider>
  </StrictMode>,
)
