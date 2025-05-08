import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../../Provider/AuthContext";
import { Helmet } from "react-helmet-async";
import { updatePassword } from "firebase/auth";
import { auth } from "../../Firebase/firebase.config";

const Login = () => {
  const { login, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    login(email, password)
      .then(() => {
        toast.success("Logged in successfully!");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleForgotPassword = async () => {
    const email = prompt("Enter your email:");
    if (!email) return toast.error("Email is required!");

    const currentPassword = prompt("Enter your current password:");
    if (!currentPassword) return toast.error("Current password is required!");

    const newPassword = prompt("Enter your new password:");
    if (!newPassword) return toast.error("New password is required!");

    try {
      await login(email, currentPassword); 
      await updatePassword(auth.currentUser, newPassword);
      toast.success("Password updated successfully!");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        toast.success("Logged in with Google!");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl ">
      <Helmet>
        <title>Login - AppNest</title>
      </Helmet>

      <h2 className="text-center p-5 text-3xl font-bold text-blue-950">
        Login Now
      </h2>
      <form onSubmit={handleLogin} className="card-body">
        <fieldset className="fieldset">
          <label className="label text-blue-950">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
            required
          />
          <label className="label text-blue-950">Password</label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
            required
          />
          <div>
            <button
              type="button"
              onClick={handleForgotPassword}
              className="link link-hover text-blue-950"
            >
              Forgot password?
            </button>
          </div>
          <button className="btn bg-blue-600 text-white mt-4">Login</button>

          <button
            onClick={handleGoogleLogin}
            type="button"
            className="btn border mt-3 flex items-center justify-center gap-2"
          >
            <FcGoogle
              className="w-5 h-5"
            />
            Continue with Google
          </button>

          <p className="pt-5 text-center">
            Don't have an account?{" "}
            <Link to="/register" className="text-red-500">
              Register
            </Link>{" "}
          </p>
        </fieldset>
      </form>
    </div>
  );
};

export default Login;
