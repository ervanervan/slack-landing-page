import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import SearchIcon from "../assets/icons/SearchIcon";
import SaleIcon from "../assets/icons/SaleIcon";
import ChevronDownIcon from "../assets/icons/ChevronDownIcon";
import { navbarLinks } from "../data/navbarLinks";

const Navbar = () => {
  return (
    <header className="bg-custom-white text-black border-b-2 border-black">
      <div className="mx-auto flex justify-between items-center h-[4.5rem]">
        {/* Logo & Navigation */}
        <div className="flex items-center h-full">
          <div className="px-6">
            <img src={logo} alt="Logo" className="w-32" />
          </div>
          <nav className="border-l-2 border-black h-full flex items-center px-6">
            <ul className="flex space-x-4">
              {navbarLinks.map(({ to, label, hasDropdown }) => (
                <li key={label} className="flex items-center gap-1">
                  <Link to={to} className="hover:underline">
                    {label}
                  </Link>
                  {hasDropdown && <ChevronDownIcon />}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Search, Sales & Login */}
        <div className="flex items-center border-l-2 border-black h-full">
          <div className="border-r-2 border-black px-6 flex items-center h-full">
            <SearchIcon />
          </div>
          <div className="px-6 flex items-center gap-2">
            <SaleIcon />
            <p className="font-medium text-base">Talk To Sales</p>
          </div>
          <div className="px-6 flex items-center gap-2 border-l-2 border-black h-full bg-black text-custom-white">
            <p>Login / Register</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
