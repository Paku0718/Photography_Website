import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Camera } from "lucide-react";

function Navbar() {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("role");
    localStorage.removeItem("email");
    navigate("/login");
  };

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-lg border-b border-purple-500/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Camera className="h-8 w-8 text-purple-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              PhotoBooking
            </span>
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white focus:outline-none hover:text-purple-400 transition-colors"
            onClick={toggleNavbar}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Navigation Links */}
          <ul
            className={`flex flex-col md:flex-row md:items-center gap-4 md:gap-8 absolute md:static left-0 top-full w-full md:w-auto bg-black/95 md:bg-transparent backdrop-blur-lg md:backdrop-blur-none px-6 py-6 md:py-0 border-b border-purple-500/20 md:border-none transition-all duration-300 ${
              isOpen ? "block" : "hidden md:flex"
            }`}
          >
            {/* Static Links */}
            <li>
              <Link
                to="/"
                className="text-white hover:text-purple-400 transition-colors duration-300 block py-2 md:py-0"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-white hover:text-purple-400 transition-colors duration-300 block py-2 md:py-0"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-white hover:text-purple-400 transition-colors duration-300 block py-2 md:py-0"
              >
                Contact
              </Link>
            </li>

            {/* Admin Links */}
            {role === "Admin" && (
              <>
                <li>
                  <Link
                    to="/admin/dashboard"
                    className="text-white hover:text-purple-400 transition-colors duration-300 block py-2 md:py-0"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/add-package"
                    className="text-white hover:text-purple-400 transition-colors duration-300 block py-2 md:py-0"
                  >
                    Add Package
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/bookings"
                    className="text-white hover:text-purple-400 transition-colors duration-300 block py-2 md:py-0"
                  >
                    All Bookings
                  </Link>
                </li>
                

                {/* <li>
                  <Link
                    to="/admin/packages"
                    className="text-white hover:text-purple-400 transition-colors duration-300 block py-2 md:py-0"
                  >
                    Manage Packages
                  </Link>
                </li> */}
              </>
            )}

            {/* User Links */}
            {role === "User" && (
              <>
                <li>
                  <Link
                    to="/user/dashboard"
                    className="text-white hover:text-purple-400 transition-colors duration-300 block py-2 md:py-0"
                  >
                    Dashboard
                  </Link>
                </li>
                {/* <li>
                  <Link
                    to="/user/packages"
                    className="text-white hover:text-purple-400 transition-colors duration-300 block py-2 md:py-0"
                  >
                    Packages
                  </Link>
                </li> */}
                <li>
                  <Link
                    to="/user/bookings"
                    className="text-white hover:text-purple-400 transition-colors duration-300 block py-2 md:py-0"
                  >
                    My Bookings
                  </Link>
                </li>
              </>
            )}

            {/* Auth Links */}
            {role ? (
              <li>
                <button
                  onClick={handleLogout}
                  className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-all transform hover:scale-105 block w-full md:w-auto mt-2 md:mt-0"
                >
                  Logout
                </button>
              </li>
            ) : (
              <li>
                <Link
                  to="/login"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-2 rounded-full font-medium transition-all transform hover:scale-105 block text-center md:inline-block mt-2 md:mt-0"
                >
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
