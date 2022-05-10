import Button from "components/base/button/button";
import Typography from "components/base/typography/typography";
import DividerSection from "components/section/divider-section";
import { useRouter } from "next/router";
import React from "react";
import { ResumePage } from "types/ResumePage";
import CoursesSection from "./sections/courses.section";
import FirstTypeSection from "./sections/first-type.section";
import SecondTypeSection from "./sections/second-type.section";

interface ResumeLayoutProps {
  data: ResumePage;
}

const ResumeLayout: React.FC<ResumeLayoutProps> = ({ data }) => {
  return (
    <div className={"grid grid-cols-1 gap-32 my-20 z-10"}>
      <div
        className={
          "flex flex-col md:flex-row justify-between mx-auto w-full md:max-w-[90%] items-center md:items-end"
        }
      >
        <h1>
          <Typography
            Variant={"display"}
            Style={"italic"}
            className={"font-extrabold"}
          >
            {data.attributes.mainTitle}
          </Typography>
        </h1>
        <div className="mt-10 md:mt-0">
          <Button
            onClick={() => {
              if (typeof window !== "undefined") {
                window.open(
                  "https://1drv.ms/b/s!Au1afeg3bPYMi0uH_MBycsMbS4GQ",
                  "_blank"
                );
              }
            }}
          >
            Download Resume
          </Button>
        </div>
      </div>
      {data.attributes.academicSection && (
        <section>
          <FirstTypeSection
            title={"Academic"}
            content={data.attributes.academicSection}
          />
        </section>
      )}
      {data.attributes.proffesionalSection && (
        <section>
          <FirstTypeSection
            title={"Professional"}
            content={data.attributes.proffesionalSection}
          />
        </section>
      )}
      {data.attributes.activitiesSection && (
        <section>
          <FirstTypeSection
            title={"Activities"}
            content={data.attributes.activitiesSection}
          />
        </section>
      )}
      {data.attributes.achievementSection && (
        <section>
          <SecondTypeSection
            title={"Achievement"}
            content={data.attributes.achievementSection}
          />
        </section>
      )}
      <section>
        <DividerSection />
      </section>
      {data.attributes.certificatesSection && (
        <section>
          <CoursesSection content={data.attributes.certificatesSection} />
        </section>
      )}
    </div>
  );
};

export default ResumeLayout;
