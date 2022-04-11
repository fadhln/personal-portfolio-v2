import React from "react";
import type { Homepage } from "../../types/Homepage";
import HerosSection from "./sections/heros.section";

interface HomeLayoutProps {
  data: Homepage;
}

const HomeLayout: React.FC<HomeLayoutProps> = ({ data }) => {
  return (
    <div>
      <HerosSection />
    </div>
  );
};

export default HomeLayout;
