import Typography from "components/base/typography/typography";
import React from "react";
import { SecondType } from "types/components/SecondType";
import SecondTypeEntry from "../components/second-type";

interface SecondTypeSectionProps {
  title: string;
  content?: SecondType[];
}

const SecondTypeSection: React.FC<SecondTypeSectionProps> = ({
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
                  <SecondTypeEntry content={c} />
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
  return <></>;
};

export default SecondTypeSection;
