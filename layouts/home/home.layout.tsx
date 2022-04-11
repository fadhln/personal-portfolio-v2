import React from "react";
import type { Homepage } from "../../types/Homepage";
import HerosSection from "./sections/heros.section";

interface HomeLayoutProps {
  data: Homepage;
}

const HomeLayout: React.FC<HomeLayoutProps> = ({ data }) => {
  return (
    <div>
      <HerosSection
        overviewTitle={data.attributes.overviewTitle}
        overviewContent={data.attributes.overviewContent}
      />
    </div>
  );
};

export default HomeLayout;
