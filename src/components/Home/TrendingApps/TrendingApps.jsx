import React from "react";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router";

const TrendingApps = ({ app }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition transform hover:scale-105 p-4 w-70 ">
      <Link to={`/app-details/${app.id}`} className="block">
      <img
        src={app.thumbnail}
        alt={app.name}
        className="w-full h-40 object-cover rounded-xl mb-4"
      />
      <h3 className="text-blue-950 text-lg font-semibold mb-2">{app.name}</h3>
      <div className="flex items-center text-yellow-500 font-medium">
        <AiFillStar className="mr-1" />
        {app.rating}
      </div>
      </Link>
    </div>
  );
};

export default TrendingApps;
