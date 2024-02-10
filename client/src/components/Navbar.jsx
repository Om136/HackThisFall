/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";

function Navbar() {
  const navigate = useNavigate();
  return (
    <header className="flex justify-between bg-[#1995AD] items-center text-white">
      <div className="flex gap-60 p-4">
        <img src="" alt="LOGO" />
        <ul className="flex gap-6 items-center">
          <li>
            <Link className="hover:border-b" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:border-b" to="/about">
              About Us
            </Link>
          </li>
          <li>Home</li>
        </ul>
      </div>
      <div className="flex gap-2 items-center mr-4">
        <Button onClick={() => navigate("/login")}>Login</Button>
        <Button onClick={() => navigate("/signup")}>Sign Up</Button>
      </div>
    </header>
  );
}

export default Navbar;
