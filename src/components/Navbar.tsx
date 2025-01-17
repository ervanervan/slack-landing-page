import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import SearchIcon from "../assets/icons/SearchIcon";
import SaleIcon from "../assets/icons/SaleIcon";

const Navbar = () => {
  return (
    <header className="bg-custom-white text-black border-b-2 border-black">
      <div className="container mx-auto flex justify-between items-center h-[4.5rem]">
        <div className="flex items-center gap-4">
          <div>
            <img src={logo} alt="" className="w-32" />
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link to="/" className="hover:underline">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:underline">
                  Solutions
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">
                  Enterprise
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">
                  Pricing
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center border-2 border-x-black h-full">
          <div className="border-2 border-r-black h-full flex items-center px-4">
            <SearchIcon />
          </div>
          <div className="flex items-center gap-2 px-4">
            <SaleIcon />
            <p>Talk To Sales</p>
          </div>
          <div className="flex items-center gap-2 px-4 border-2 border-l-black h-full bg-black text-custom-white">
            <p>Login / Register</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
