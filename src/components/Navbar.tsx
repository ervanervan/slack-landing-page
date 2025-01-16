import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";

const Navbar = () => {
  return (
    <header className="bg-custom-white text-black py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <img src={logo} alt="" />
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
