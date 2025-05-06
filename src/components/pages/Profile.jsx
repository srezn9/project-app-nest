import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="max-w-md mx-auto p-5 mt-10 bg-base-100 shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold text-center text-blue-950 mb-5">My Profile</h2>

      {user ? (
        <div className="flex flex-col items-center space-y-4">
          <img
            src={user.photoURL}
            alt={user.displayName}
            className="w-24 h-24 rounded-full border-2 border-blue-600"
          />
          <h3 className="text-xl font-semibold text-blue-800">{user.displayName}</h3>
          <p className="text-gray-600">{user.email}</p>
        </div>
      ) : (
        <p className="text-center text-red-500">You are not logged in.</p>
      )}
    </div>
  );
};

export default Profile;
