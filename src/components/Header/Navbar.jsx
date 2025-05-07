import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../../Provider/AuthContext";

const Navbar = () => {
  const {user, logout} = useContext(AuthContext);
  const handleLogout = ()=>{
    logout()
    .then(()=>{
      toast.success('Logged out successfully');
    })
    .catch((error)=>{
      toast.error('Error', error.message, 'error')
    });
  };
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
            src="https://i.postimg.cc/N0xS6bC2/Appnest.png"
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

      
      <div className="navbar-end  mr-5 space-x-2">
        
      {user ? (
          <>
            
            <div className="lg:flex items-center space-x-2 hidden">
              <img
                className="w-10 h-10 rounded-full"
                src={user.photoURL}
                alt={user.displayName}
                title={user.displayName}
              />
              <span className="font-semibold">{user.displayName}</span>
            </div>

            
            <button onClick={handleLogout} className="btn bg-blue-950 text-white">
              Logout
            </button>
          </>
        ) : (
          
          <Link to="/login" className="btn bg-blue-600 text-white">
            Login
          </Link>
        )}
        
      </div>
    </div>
  );
};

export default Navbar;
