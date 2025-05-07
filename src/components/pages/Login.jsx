import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../../Provider/AuthContext";
import { Helmet } from "react-helmet";

const Login = () => {
    const {login, googleLogin} =useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        login(email, password)
        .then(()=>{
            toast.success('Logged in successfully!');
            navigate('/');
            ;
        })
        .catch((error)=>{
            toast.error(error.message);
        });
        

    };

    const handleGoogleLogin = () => {
        googleLogin()
          .then(() => {
            toast.success('Logged in with Google!');
            navigate('/');
          })
          .catch(error => {
            toast.error( error.message);
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
            <a className="link link-hover text-blue-950">Forgot password?</a>
          </div>
          <button className="btn bg-blue-600 text-white mt-4">Login</button>

          <button
          onClick={handleGoogleLogin}
            type="button"
            className="btn border mt-3 flex items-center justify-center gap-2">
            <FcGoogle
              src="https://i.ibb.co/yd7H0BB/google.png"
              alt="Google"
              className="w-5 h-5"/>
            Continue with Google
          </button>

          <p className="pt-5 text-center">
            Don't have an account? {" "}
            <Link to="/register" className="text-red-500">
              Register
            </Link> {" "}
          </p>
        </fieldset>
      </form>
    </div>
  );
};

export default Login;
