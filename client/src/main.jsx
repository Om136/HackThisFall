import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
<<<<<<< HEAD
import './index.css';
import LoginPage from './Pages/Login.jsx';
import SignUpPage from './Pages/SignUp.jsx';
import Home from './Pages/Home.jsx';
import { Route, Router, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} /> 
    </Route>
  )
)
=======
// import Timepass from "./Pages/Timepass.jsx"
import './index.css'
>>>>>>> 8c998f149eb31f3183013e1597db775678e1f39f




ReactDOM.createRoot(document.getElementById('root')).render(
<<<<<<< HEAD
  <RouterProvider router={router} />
=======
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
>>>>>>> 8c998f149eb31f3183013e1597db775678e1f39f
)
