/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";

function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <header className="w-screen bg-slate-200 h-[12vh] shadow sticky z-50 top-0 flex justify-center">
        <div className="w-[60%] flex justify-end">
          <img src="" className="w-[25%] h-[90%]" />
        </div>

        <div className="w-[40%] flex justify-end">
          <div className="flex justify-center items-center mx-1">
            <img src="" className="h-[80%]" style={{ clipPath: "circle()" }} />
          </div>
          <div className="flex justify-center items-center mx-1 p-1">
            <p className="text-2xl font-semibold text-slate-700">username</p>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;

// function Navbar() {
//   const navigate = useNavigate();
//   return (
//     <header className="flex justify-between bg-[#1995AD] items-center text-white">
//       <div className="flex gap-60 p-4 h-[50%]">
//         <img src="" alt="LOGO" />
//         <ul className="flex gap-6 items-center">
//           <li>
//             <Link className="hover:border-b" to="/">
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link className="hover:border-b" to="/about">
//               About Us
//             </Link>
//           </li>
//           <li>Home</li>
//         </ul>
//       </div>
//       <div className="flex gap-2 items-center mr-4">
//         <Button onClick={() => navigate("/login")}>Login</Button>
//         <Button onClick={() => navigate("/signup")}>Sign Up</Button>
//       </div>
//     </header>
//   );
// }

// export default Navbar;
