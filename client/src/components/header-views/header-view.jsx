import "../../index.css";
import logo from "../../assets/logo/dtalk-high-resolution-logo-white-transparent.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <header className="flex items-center justify-between py-4 px-6 text-white bg-[#295de7]">
        <Link to={"/"}>
          <img src={logo} alt="d'talk" className="w-[6rem] object-contain" />
        </Link>
        <div className="hidden md:flex lg:flex space-x-4">
          <Link to={"/"} className="link">
            Home
          </Link>
          <Link to={"/"} className="link">
            Download
          </Link>
          <Link to={"/"} className="link">
            About
          </Link>
          <Link to={"/"} className="link">
            Nitro
          </Link>
          <Link to={"/"} className="link">
            Shop
          </Link>
        </div>
        <div className="flex space-x-4">
          <Link to={"/login"}>
            <button
              className="p-2 rounded-full text-xs md:text-sm px-4 
            focus:outline-none bg-white text-black hover:bg-blue-100 
            hover:rounded-full hover:underline transition duration-200 
            ease-in-out font-medium hover:shadow-md"
            >
              Login
            </button>
          </Link>
          <i
            className="fa-solid fa-bars fa-2xl mt-4 cursor-pointer md:hidden lg:hidden"
            style={{ color: "#fff" }}
          ></i>
        </div>
      </header>
    </div>
  );
}
