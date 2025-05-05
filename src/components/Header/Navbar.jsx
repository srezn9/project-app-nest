import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "underline text-blue-600 font-semibold" : "font-semibold"
          }
        >
          Apps
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? "underline text-blue-600 font-semibold" : "font-semibold"
          }
        >
          My Profile
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        
        <div className="flex justify-center items-center">
          <img
            className="w-20"
            src="https://i.postimg.cc/VNs1mQ60/blue-white-logo-with-symbol-that-says-e-1277164-16616.avif"
            alt=""
          />
          <h2 className="text-xl flex items-center font-bold text-blue-950">
            App<span className="text-blue-600">Nest</span>
          </h2>
        </div>
      </div>

      
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      
      <div className="navbar-end">
        
        <a className="btn bg-blue-600 text-white">Login</a>
      </div>
    </div>
  );
};

export default Navbar;
