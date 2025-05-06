import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl ">
            <h2 className='text-center p-5 text-3xl font-bold text-blue-950'>Login Now</h2>
        <form className="card-body">
        <fieldset className="fieldset">
          <label className="label text-blue-950">Email</label>
          <input type="email" name="email" className="input" placeholder="Email" />
          <label className="label text-blue-950">Password</label>
          <input type="password" name="password" className="input" placeholder="Password" />
          <div><a className="link link-hover text-blue-950">Forgot password?</a></div>
          <button className="btn bg-blue-600 text-white mt-4">Login</button>
          <p className='pt-5 text-center'>Don't have an account? <Link to="/register" className='text-red-500'>Register</Link> </p>
        </fieldset>
      </form>
    </div>
    );
};

export default Login;