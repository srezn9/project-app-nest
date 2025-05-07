import React from "react";
import TrendingApps from "./TrendingApps/TrendingApps";
import { useLoaderData } from "react-router";
import Productivity from "./CategoryApps/Productivity";
import Gaming from "./CategoryApps/Gaming";
import Educational from "./CategoryApps/Educational";
import SpecialOffers from "../pages/Offers/SpecialOffers";
import { Helmet } from "react-helmet";

const Home = () => {
  const apps = useLoaderData();
  const topRatedApps = apps.sort((a, b) => b.rating - a.rating).slice(0, 4);
  return (
    <div className="my-10">
        <Helmet>
        <title>Home - AppStore</title>
      </Helmet>
      <h1 className="text-3xl md:text-4xl text-blue-950 font-bold text-center">
        Check Our Most Trending Apps
      </h1>
      <section className="max-w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 my-10">
        {topRatedApps.map((app) => (
          <TrendingApps key={app.id} app={app}></TrendingApps>
        ))}
      </section>
      <section>
        <h1 className="text-3xl md:text-4xl text-blue-950 font-bold text-center pt-10">
          App Gallery
        </h1>
        <Productivity></Productivity>
        <Gaming></Gaming>
        <Educational></Educational>
      </section>
      <section>
        <SpecialOffers></SpecialOffers>
      </section>
    </div>
  );
};

export default Home;
