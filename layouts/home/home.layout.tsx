import React from "react";
import Typography from "../../components/base/typography/typography";
import type { Homepage } from "../../types/Homepage";
import AboutMeSection from "./sections/about-me.section";
import HerosSection from "./sections/heros.section";
import NavigationSection from "./sections/navigation.section";

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
      <NavigationSection navigationPhoto={data.attributes.navigationPhoto} />
    </div>
  );
};

export default HomeLayout;
