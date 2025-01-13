import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import LogoImg from "../assets/Logo.png";
const Navbar = () => {
  const location = useLocation();
  console.log(location.pathname);
  const getActiveClass = (path) => {
    if (location.pathname === path) {
      return "nav-link-active";
    } else {
      return "nav-link-inactive";
    }
  };
  return (
    <div className="px-6 mx-auto  sm:px-6 bg-primary">
      <div className="relative pt-6 pb-6">
        <nav
          className="relative flex items-center justify-between sm:h-10 md:justify-center"
          aria-label="Global"
        >
          <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-10">
            <div className="flex items-center justify-between w-full md:w-auto">
              <a href="/">
                <span className="sr-only">Company Name</span>
                <img
                  className="w-auto h-12 sm:h-14"
                  src={LogoImg}
                  loading="lazy"
                  width="200"
                  height="40"
                  alt="Logo"
                />
              </a>
              <div className="flex items-center -mr-2 md:hidden">
                <button
                  className="inline-flex items-center justify-center p-2 text-gray-400 bg-gray-50 rounded-md hover:text-black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-50"
                  type="button"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="hidden md:flex md:space-x-1 list-none">
            <li>
              <Link
                to="/"
                className={`text-lg font-semibold text-black px-3 py-2 list-none rounded-full ${getActiveClass(
                  "/"
                )}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/coursework"
                className={`text-lg font-semibold text-black px-3 py-2 list-none rounded-full ${getActiveClass(
                  "/coursework"
                )}`}
              >
                Coursework
              </Link>
            </li>
            <li>
              <Link
                to="/dissertation"
                className={`text-lg font-semibold text-black px-3 py-2 list-none rounded-full ${getActiveClass(
                  "/dissertation"
                )}`}
              >
                Dissertation
              </Link>
            </li>
            <li>
              <Link
                to="/essay"
                className={`text-lg font-semibold text-black px-3 py-2 list-none rounded-full ${getActiveClass(
                  "/essay"
                )}`}
              >
                Essay
              </Link>
            </li>
            <li>
              <Link
                to="/thesis"
                className={`text-lg font-semibold text-black px-3 py-2 list-none rounded-full ${getActiveClass(
                  "/thesis"
                )}`}
              >
                Thesis
              </Link>
            </li>
          </div>
          <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
            <div className="inline-flex rounded-full shadow">
              <button className="mr-2 inline-flex items-center px-4 py-2 text-sm text-primary bg-black border border-transparent font-bold cursor-pointer font-base hover:bg-white hover:text-black duration-300 ease-in-out focus:ring-2 focus:ring-black focus:ring-offset-2">
                <Link to="/contact" className="hover:text-primary">
                  Contact Us
                </Link>
              </button>
              <button className="inline-flex items-center px-4 py-2 text-sm text-black bg-white border border-transparent cursor-pointer font-bold hover:bg-black hover:text-primary duration-300 ease-in-out">
                <Link to="/order" className="hover:text-black">
                  Order Now
                </Link>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
export default Navbar;
