import React from 'react';
import { Link } from 'react-router';

const AppCard = ({ app }) => {
    return (
           <Link to={`/app/${app.id}`}>
           <div className=" rounded-lg p-5 shadow-2xl hover:shadow-lg transition bg-white">
            <img src={app.thumbnail} alt={app.name} className="w-full h-40 object-cover rounded" />
            <h3 className="text-blue-950 font-bold mt-2">{app.name}</h3>
            <p className="text-sm text-blue-950">Rating: {app.rating}</p>
            <p className="text-sm text-blue-950">Downloads: {app.downloads.toLocaleString()}</p>
        </div></Link>
    );
};

export default AppCard;