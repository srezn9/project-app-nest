import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../Provider/AuthContext";
import { Helmet } from "react-helmet-async";

const Profile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

  const handleUpdate = (e) => {
    e.preventDefault();

    updateUserProfile({
      displayName: name,
      photoURL: photoURL,
    })
      .then(() => {
        toast.success("Profile updated successfully, reload to see the change");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="max-w-md mx-auto p-5 mt-10 bg-base-100 shadow-lg rounded-xl">
      <Helmet>
        <title>My-Profile - AppNest</title>
      </Helmet>
      <h2 className="text-2xl font-bold text-center text-blue-950 mb-5">
        My Profile
      </h2>

      {user ? (
        <div className="flex flex-col items-center space-y-4">
          <img
            src={user.photoURL}
            alt={user.displayName}
            className="w-24 h-24 rounded-full border-2 border-blue-600"
          />
          <h3 className="text-xl font-semibold text-blue-800">
            {user.displayName}
          </h3>
          <p className="text-gray-600">{user.email}</p>
        </div>
      ) : (
        <p className="text-center text-red-500">You are not logged in.</p>
      )}

      <form onSubmit={handleUpdate} className="space-y-4">
        <input
          type="text"
          className="input w-full"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          className="input w-full"
          placeholder="Photo URL"
          value={photoURL}
          onChange={(e) => setPhotoURL(e.target.value)}
        />
        <button type="submit" className="btn bg-blue-600 text-white w-full">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Profile;
