import React from "react";
import { useLoaderData } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OfferDetails = () => {
  const allApps = useLoaderData();
  const freeApps = allApps.filter((app) => app.paid === false);

  const handleInstall = (appName) => {
    toast.success(`${appName} installed successfully!`);
  };

  return (
    <div className="my-10 px-4">
      <h1 className="text-3xl font-bold text-center text-green-600 mb-8">
         Try Out Our Free Apps 
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {freeApps.map((app) => (
          <div
            key={app.id}
            className="rounded-2xl shadow-xl p-4 flex flex-col items-center text-center hover:shadow-2xl transition duration-600"
          >
            <img
              src={app.thumbnail}
              alt={app.name}
              className="w-full h-40 object-cover rounded-xl mb-4"
            />
            <h2 className="text-xl font-semibold text-blue-700 mb-2">
              {app.name}
            </h2>
            <p className="text-gray-600 mb-4">{app.description}</p>
            <button
              onClick={() => handleInstall(app.name)}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full transition"
            >
              Install
            </button>
          </div>
        ))}
      </div>

      
      <ToastContainer position="top-center" />
    </div>
  );
};

export default OfferDetails;
