// src/pages/Home.tsx
import React, { useEffect, useState } from "react";
import type { HomeData } from "../types";
import data from "../data/data.json";
import BannerHome from "../modules/home/BannerHome";
import ChooseUs from "../modules/ChooseUs";
import Brand from "../modules/Brand";
import ServiceHome from "../modules/home/ServiceHome";

const Home: React.FC = () => {
  const [homeData, setHomeData] = useState<HomeData | null>(null);

  useEffect(() => {
    setHomeData(data.home);
  }, []);

  if (!homeData) return <div>Loading...</div>;

  return (
    <>
      <BannerHome />
      <ServiceHome />
      <ChooseUs />
      <Brand />
    </>
  );
};

export default Home;
