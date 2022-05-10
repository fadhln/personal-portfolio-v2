import Typography from "components/base/typography/typography";
import React from "react";
import { FirstResumeType } from "types/components/FirstResumeType";
import FirstType from "../components/first-type";

interface FirstTypeSectionProps {
  title: string;
  content?: FirstResumeType[];
}

const FirstTypeSection: React.FC<FirstTypeSectionProps> = ({
  title,
  content,
}) => {
  if (content) {
    return (
      <div className={"container mx-auto max-w-[90%]"}>
        <h2>
          <Typography Variant={"h1"} className={"font-bold"}>
            {title}
          </Typography>
        </h2>
        <ul className={"grid gap-3 mt-6"}>
          {content &&
            content.map((c) => {
              return (
                <li key={c.id}>
                  <FirstType content={c} />
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
  return <></>;
};

export default FirstTypeSection;
