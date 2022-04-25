import React from "react";
import DividerSection from "../../components/section/divider-section";
import type { Homepage } from "../../types/Homepage";
import AboutMeSection from "./sections/about-me.section";
import CallToActionSection from "./sections/call-to-action.section";
import HerosSection from "./sections/heros.section";
import NavigationSection from "./sections/navigation.section";

interface HomeLayoutProps {
  data: Homepage;
}

const HomeLayout: React.FC<HomeLayoutProps> = ({ data }) => {
  return (
    <div className={"grid grid-cols-1 gap-40 my-20 z-10"}>
      <section>
        <HerosSection
          overviewTitle={data.attributes.overviewTitle}
          overviewContent={data.attributes.overviewContent}
        />
      </section>
      <section>
        <AboutMeSection content={data.attributes.aboutmeContent} />
      </section>
      <section>
        <NavigationSection navigationPhoto={data.attributes.navigationPhoto} />
      </section>
      <div className={"hidden md:block"}>
        <DividerSection />
      </div>
      <section>
        <CallToActionSection
          opportunitiesTitle={data.attributes.opportunitiesTitle}
          opportunitiesContent={data.attributes.opportunitiesContent}
        />
      </section>
    </div>
  );
};

export default HomeLayout;
