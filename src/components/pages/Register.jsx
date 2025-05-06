import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl ">
            <h2 className='text-center p-5 text-3xl font-bold text-blue-950'>Register Now</h2>
        <form className="card-body">
        <fieldset className="fieldset">
        <label className="label text-blue-950">Name</label>
        <input type="text" name="name" className="input" placeholder="Your name" />
        <label className="label text-blue-950">Photo URL</label>
          <input type="text" name="" className="input" placeholder="Photo URL" />
          <label className="label text-blue-950">Email</label>
          <input type="email" name="email" className="input" placeholder="Email" />
          <label className="label text-blue-950">Password</label>
          <input type="password" name="password" className="input" placeholder="Password" />
          
          <button className="btn bg-blue-600 text-white mt-4">Register</button>
          <p className='pt-5 text-center'>Already have an account? <Link to="/login" className='text-red-500'>Login</Link> </p>
        </fieldset>
      </form>
    </div>
    );
};

export default Register;