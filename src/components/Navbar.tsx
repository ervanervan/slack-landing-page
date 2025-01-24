import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import SearchIcon from "../assets/icons/SearchIcon";
import SaleIcon from "../assets/icons/SaleIcon";
import ChevronDownIcon from "../assets/icons/ChevronDownIcon";
import { navbarLinks } from "../data/navbarLinks";
import { useState } from "react";
import CloseIcon from "../assets/icons/CloseIcon";
import MenuIcon from "../assets/icons/MenuIcon";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-30 w-full bg-custom-white text-black border-b-2 border-black">
      <div className="mx-auto flex justify-between items-center h-[4.5rem]">
        {/* Logo & Navigation */}
        <div className="flex items-center h-full w-full">
          <div className="w-full lg:w-fit px-6 flex items-center justify-between h-full">
            <img src={logo} alt="Logo" className="w-32" />
            <button
              className="lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>

          {/* Navigation */}
          <div
            className={`absolute top-[4.5rem] left-0 w-full lg:h-full bg-custom-white border-t border-black flex flex-col items-start space-y-4 p-6 lg:static lg:flex lg:flex-row lg:items-center lg:space-x-4 lg:space-y-0 lg:p-0 lg:border-none gap-2 ${
              isOpen ? "flex" : "hidden"
            }`}
          >
            <nav className="lg:border-l-2 border-black h-full flex items-center lg:px-6">
              <ul className="flex flex-col gap-4 lg:flex-row lg:gap-6 lg:items-center">
                {navbarLinks.map(({ to, label, hasDropdown }) => (
                  <li key={label} className="flex items-center gap-1">
                    <Link
                      to={to}
                      className="font-medium text-base hover:underline"
                      onClick={() => setIsOpen(false)}
                    >
                      {label}
                    </Link>
                    {hasDropdown && <ChevronDownIcon />}
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex flex-col h-full gap-3 w-full lg:hidden">
              {/* <div className="flex items-center px-4 py-2.5 h-full">
                <SearchIcon />
              </div> */}
              <div className="flex items-center justify-center px-4 py-2.5 gap-2 border border-custom-gray/25">
                <SaleIcon />
                <p className="font-medium text-base whitespace-nowrap">
                  Talk To Sales
                </p>
              </div>
              <div className="flex items-center justify-center px-4 py-2.5 gap-2 bg-black text-custom-white">
                <p className="font-medium text-base whitespace-nowrap ">
                  Login / Register
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Search, Sales & Login */}
        <div className="lg:flex items-center border-l-2 border-black h-full hidden">
          <div className="border-r-2 border-black px-6 flex items-center h-full">
            <SearchIcon />
          </div>
          <div className="px-6 flex items-center gap-2">
            <SaleIcon />
            <p className="font-medium text-base whitespace-nowrap hover:underline">
              Talk To Sales
            </p>
          </div>
          <div className="px-6 flex items-center gap-2 border-l-2 border-black h-full bg-black text-custom-white">
            <p className="font-medium text-base whitespace-nowrap hover:underline">
              Login / Register
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
