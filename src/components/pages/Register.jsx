import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../../Provider/AuthContext";
import { Helmet } from "react-helmet";


const Register = () => {
    const {register, updateUserProfile } = useContext(AuthContext);
    const navigate =useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photoURL = e.target.photoURL.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        const uppercase = /[A-Z]/.test(password);
        const lowercase = /[a-z]/.test(password);
        if(!uppercase || !lowercase || password.length<6){
            return toast.error('Password must have uppercase, lowercase and at least 6 characters.')
        }

        register(email, password)
        .then(() => {
            updateUserProfile({
                displayName: name,
                photoURL: photoURL
            });
            toast.success('Registered successfully!');
            navigate('/');
        })
        .catch(error=>{
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

          <button className="btn bg-blue-600 text-white mt-4">Register</button>
          <button
            type="button"
            className="btn border mt-3 flex items-center justify-center gap-2"
          >
            <FcGoogle
              src="https://i.ibb.co/yd7H0BB/google.png"
              alt="Google"
              className="w-5 h-5"
            />
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
