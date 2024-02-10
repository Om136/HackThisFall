import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import LoginPage from "./Pages/Login";
import SignUpPage from "./Pages/SignUp";
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
  );
}

export default App;
