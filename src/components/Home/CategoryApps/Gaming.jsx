import React from "react";

import { useLoaderData } from "react-router";
import AppCard from "./AppCard";

const Gaming = () => {
  const apps = useLoaderData();
  
  const gamingApps = apps.filter(
    (app) => app.category === "Gaming"
  );
  

  return (
    <div className="my-20 max-w-7xl mx-auto p-10">
      <h2 className="text-2xl md:text-3xl text-blue-950 font-bold mb-4 ml-6">
        Gaming
      </h2>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {gamingApps.map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </section>
    </div>
  );
};

export default Gaming;
