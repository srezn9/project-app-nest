import React from "react";

import { useLoaderData } from "react-router";
import AppCard from "./AppCard";

const Educational = () => {
  const apps = useLoaderData();
  
  const educationalApps = apps.filter(
    (app) => app.category === "Education"
  );
  

  return (
    <div className="my-20 max-w-7xl mx-auto p-10">
      <h2 className="text-2xl md:text-3xl text-blue-950 font-bold mb-4 ml-6">
        Educational
      </h2>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {educationalApps.map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </section>
    </div>
  );
};

export default Educational;
