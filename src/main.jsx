import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './router/App.jsx'
import './index.css'
import { createBrowserRouter } from 'react-router-dom'
import Courses from './router/Courses.jsx'
import Dashboard from './router/Dashboard.jsx'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/index.js'
import Details from './router/Details.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {path: "/", element: <Courses/>},
      {path: "/dashboard", element: <Dashboard/>},
      {path: "/details", element: <Details/>}
      
  ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>,
)
