import DividerSection from "components/section/divider-section";
import React from "react";
import type { AboutPage } from "types/AboutPage";
import MainSection from "./sections/main.section";
import TechStackSection from "./sections/tech-stack.section";

interface AboutLayoutProps {
  data: AboutPage;
}

const AboutLayout: React.FC<AboutLayoutProps> = ({ data }) => {
  return (
    <div className={"grid grid-cols-1 gap-40 my-20 z-10"}>
      <section>
        <MainSection
          title={data.attributes.mainTitle}
          subTitle={data.attributes.subTitle}
          image={data.attributes.image.image}
          imageAltText={data.attributes.image.altText}
          content={data.attributes.content}
        />
      </section>
      <section>
        <DividerSection />
      </section>
      <section>
        <TechStackSection data={data.attributes.techStack} />
      </section>
    </div>
  );
};

export default AboutLayout;
