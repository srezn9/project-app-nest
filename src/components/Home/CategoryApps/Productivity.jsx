import React from "react";

import { useLoaderData } from "react-router";
import AppCard from "./AppCard";

const Productivity = () => {
  const apps = useLoaderData();
  const productivityApps = apps.filter(
    (app) => app.category === "Productivity"
  );

  return (
    <div className="my-10 max-w-7xl mx-auto p-10">
      <h2 className="text-2xl md:text-3xl text-blue-950 font-bold mb-4 ml-6">
        Productivity
      </h2>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {productivityApps.map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </section>
    </div>
  );
};

export default Productivity;
