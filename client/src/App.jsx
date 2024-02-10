import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import LoginPage from "./Pages/Login";
import SignUpPage from "./Pages/SignUp";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
    <Navbar />
    <Outlet />
    <Footer></Footer>
    </div>
  );
}

export default App;
