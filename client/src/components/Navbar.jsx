import { useState, useEffect } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import { UserCircle, X } from "lucide-react";
import { Button } from "./ui/button.jsx";

const Navbar = () => {
  const { user, token } = useAuth();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleHomeClick = () => {
    if (location.pathname === "/" && location.hash !== "") {
      navigate("/");
    }
    scrollTo(0, 0);
  };

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const handleAboutUsClick = () => {
    if (location.pathname === "/") {
      navigate("#features");
    } else {
      navigate("/#features");
    }
    setIsMobileMenuOpen(false);
  };

  const handleScrollUp = () => {
    scrollTo(0, 0);
  };

  return (
    <nav className="shadow-sm bg-white text-black sticky top-0 z-50 border-b border-b-gray-400">
      <div className="flex justify-between items-center px-4 py-3">
        {/* Left Section */}
        <div>
        <Link to="/" onClick={()=>scrollTo(0,0)} className="text-2xl font-bold hover:opacity-75">
        <img src="/logo.png" alt="Logo" className="inline-block w-8 h-8 mr-2" />
        Skill<span className="text-blue-700">Link</span>
        </Link>
        </div>

        {/* Center Section */}
        <ul className="hidden md:flex items-start gap-5 font-[400]">
          <NavLink
            to="/"
            className="hover:opacity-75"
            onClick={handleHomeClick}
          >
            <li className="py-1">Home</li>
            <hr
              className={`border-none outline-none h-0.5 w-4/5 m-auto ${
                location.pathname === "/" && location.hash === ""
                  ? "bg-blue-700"
                  : "bg-transparent"
              }`}
            />
          </NavLink>
          <NavLink
            to="/#features"
            className="hover:opacity-75"
            onClick={handleAboutUsClick}
          >
            <li className="py-1">About Us</li>
            <hr
              className={`border-none outline-none h-0.5 w-4/5 m-auto ${
                location.hash === "#features" ? "bg-blue-700" : "bg-transparent"
              }`}
            />
          </NavLink>
          <NavLink
            to="/blogs"
            className="hover:opacity-75"
            onClick={handleScrollUp}
          >
            <li className="py-1">Blogs</li>
            <hr className="border-none outline-none h-0.5 bg-blue-700 w-4/5 m-auto hidden" />
          </NavLink>
          <NavLink
            to="/events"
            className="hover:opacity-75"
            onClick={handleScrollUp}
          >
            <li className="py-1">Events</li>
            <hr className="border-none outline-none h-0.5 bg-blue-700 w-4/5 m-auto hidden" />
          </NavLink>
          <NavLink
            to="/users"
            className="hover:opacity-75"
            onClick={handleScrollUp}
          >
            <li className="py-1">Users</li>
            <hr className="border-none outline-none h-0.5 bg-blue-700 w-4/5 m-auto hidden" />
          </NavLink>
        </ul>

        {/* Right Section */}
        <div
          className="hidden md:flex items-center space-x-4"
          onClick={handleScrollUp}
        >
          {token ? (
            <Link
              to="/userDashboard"
              className="flex items-center space-x-2 hover:opacity-75"
              onClick={handleScrollUp}
            >
              <UserCircle size={24} />
              <span>{user?.username || "Profile"}</span>
            </Link>
          ) : (
            <Link to="/login" onClick={handleScrollUp}>
              <Button className="bg-blue-700 text-white hover:bg-blue-800">
                Login/SignUp
              </Button>
            </Link>
          )}
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            className="text-black focus:outline-none"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMobileMenuOpen ? "fixed w-full" : "h-0 w-0"
        } md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}
      >
        <div className="flex items-center justify-between px-5 py-6">
          <div>
            <Link to="/" className="text-2xl font-bold  hover:opacity-75">
              Skill<span className="text-blue-700">Link</span>
            </Link>
          </div>
          <X
            className="size-7 hover:bg-gray-200 p-2 rounded-full"
            onClick={() => {
              setIsMobileMenuOpen(false);
              handleScrollUp();
            }}
          />
        </div>
        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium w-full">
          <NavLink
            className={({ isActive }) =>
              `w-full text-center py-2 rounded-full hover:bg-gray-200 ${
                isActive && location.hash === "" ? "bg-blue-100" : ""
              }`
            }
            onClick={() => {
              setIsMobileMenuOpen(false);
              handleScrollUp();
            }}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `w-full text-center py-2 rounded-full hover:bg-gray-200 ${
                isActive && location.hash === "#features" ? "bg-blue-100" : ""
              }`
            }
            onClick={() => {
              setIsMobileMenuOpen(false);
              handleScrollUp();
              handleAboutUsClick();
            }}
            to="/#features"
          >
            About Us
          </NavLink>
          <NavLink
            className="w-full text-center py-2 rounded-full hover:bg-gray-200"
            onClick={() => {
              setIsMobileMenuOpen(false);
              handleScrollUp();
            }}
            to="/blogs"
          >
            Blogs
          </NavLink>
          <NavLink
            className="w-full text-center py-2 rounded-full hover:bg-gray-200"
            onClick={() => {
              setIsMobileMenuOpen(false);
              handleScrollUp();
            }}
            to="/events"
          >
            Events
          </NavLink>
          <NavLink
            className="w-full text-center py-2 rounded-full hover:bg-gray-200"
            onClick={() => {
              setIsMobileMenuOpen(false);
              handleScrollUp();
            }}
            to="/users"
          >
            Users
          </NavLink>
          {!token ? (
            <NavLink
              className="w-full text-center py-2 rounded-full hover:bg-gray-200"
              onClick={() => {
                setIsMobileMenuOpen(false);
                handleScrollUp();
              }}
              to="/login"
            >
              Login/SignUp
            </NavLink>
          ) : (
            <NavLink
              className="w-full text-center py-2 rounded-full hover:bg-gray-200"
              onClick={() => {
                setIsMobileMenuOpen(false);
                handleScrollUp();
              }}
              to="/userDashboard"
            >
              My Profile
            </NavLink>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
