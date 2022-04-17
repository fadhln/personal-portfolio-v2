import React from "react";
import type { Homepage } from "../../types/Homepage";
import AboutMeSection from "./sections/about-me.section";
import HerosSection from "./sections/heros.section";

interface HomeLayoutProps {
  data: Homepage;
}

const HomeLayout: React.FC<HomeLayoutProps> = ({ data }) => {
  return (
    <div className={"grid grid-cols-1 gap-52 my-20"}>
      <HerosSection
        overviewTitle={data.attributes.overviewTitle}
        overviewContent={data.attributes.overviewContent}
      />
      <AboutMeSection content={data.attributes.aboutmeContent} />
    </div>
  );
};

export default HomeLayout;
