import Typography from "components/base/typography/typography";
import React from "react";
import { Third } from "types/components/Third";

interface CoursesSectionProps {
  content: Third[];
}

const CoursesSection: React.FC<CoursesSectionProps> = ({ content }) => {
  return (
    <div className={"container mx-auto max-w-[90%]"}>
      <h2>
        <Typography Variant={"sub-h1"}>COURSES CERTIFICATES</Typography>
      </h2>
      <ul className={"grid gap-1 mt-6 text-right"}>
        {content &&
          content.map((c) => {
            return (
              <li key={c.id}>
                <div>
                  <p>
                    <a target="_blank" href={c.link} rel="noopener noreferrer">
                      <Typography Variant={"body2"}>
                        <Typography Variant={"link"}>{c.title}</Typography>
                      </Typography>
                    </a>
                    <Typography Variant={"body2"}>
                      {` - ${c.issuer}`}
                    </Typography>
                  </p>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default CoursesSection;
