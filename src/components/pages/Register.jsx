import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../../Provider/AuthContext";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const { register, updateUserProfile, googleLogin} = useContext(AuthContext);
  const navigate = useNavigate();
  const [accepted, setAccepted] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoURL = e.target.photoURL.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const uppercase = /[A-Z]/.test(password);
    const lowercase = /[a-z]/.test(password);
    if (!uppercase || !lowercase || password.length < 6) {
      return toast.error(
        "Password must have uppercase, lowercase and at least 6 characters."
      );
    }

    register(email, password)
      .then(() => {
        updateUserProfile({
          displayName: name,
          photoURL: photoURL,
        });
        toast.success("Registered successfully!");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
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
        <title>Register - AppNest</title>
      </Helmet>
      <h2 className="text-center p-5 text-3xl font-bold text-blue-950">
        Register Now
      </h2>
      <form onSubmit={handleRegister} className="card-body">
        <fieldset className="fieldset">
          <label className="label text-blue-950">Name</label>
          <input
            type="text"
            name="name"
            className="input"
            placeholder="Your name"
            required
          />
          <label className="label text-blue-950">Photo URL</label>
          <input
            type="text"
            name="photoURL"
            className="input"
            placeholder="Photo URL"
            required
          />
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

          <div className="flex items-center gap-2 mt-4">
            <input
              type="checkbox"
              id="terms"
              onChange={(e) => setAccepted(e.target.checked)}
            />
            <label htmlFor="terms" className="text-sm text-blue-950">
              I accept the{" "}
              <Link to="/terms" className="text-blue-600 underline">
                Terms and Conditions
              </Link>
            </label>
          </div>

          <button
            className="btn bg-blue-600 text-white mt-4"
            type="submit"
            disabled={!accepted}
          >
            Register
          </button>
          <button onClick={handleGoogleLogin}
            type="button"
            className="btn border mt-3 flex items-center justify-center gap-2"
          >
            <FcGoogle className="w-5 h-5" />
            Continue with Google
          </button>

          <p className="pt-5 text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-red-500">
              Login
            </Link>{" "}
          </p>
        </fieldset>
      </form>
    </div>
  );
};

export default Register;
