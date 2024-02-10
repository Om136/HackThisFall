import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import LoginPage from "./Pages/Login";
import SignUpPage from "./Pages/SignUp";
<<<<<<< HEAD
import Community from "./Pages/Community";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/mycommunuties" element={<Community />} />
      </Routes>
    </BrowserRouter>
=======
import Footer from "./components/Footer";


function App() {
  return (
    <div>
    <Navbar />
    <Outlet />
    <Footer></Footer>
    </div>
>>>>>>> d07e508ad20c6ed1771d3a38e312ae35e228cff9
  );
}

export default App;
