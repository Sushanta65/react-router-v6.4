import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App'
import './index.css'

const route = createBrowserRouter([
  {
    path: '/',
    element: <App></App>
  },
  {
    path: '/about',
    element: <div>This is the about page</div>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route}></RouterProvider>
  </StrictMode>,
)
