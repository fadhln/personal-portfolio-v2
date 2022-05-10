import Typography from "components/base/typography/typography";
import Link from "next/link";
import React from "react";
import { SecondType } from "types/components/SecondType";

interface SecondTypeProps {
  content: SecondType;
}

const SecondTypeEntry: React.FC<SecondTypeProps> = ({ content }) => {
  return (
    <div>
      <div className={"flex justify-between w-full"}>
        <p>
          <a
            target="_blank"
            href={content.link ? content.link : "/"}
            rel="noopener noreferrer"
          >
            <Typography
              Variant={"body2"}
              Style={"underline"}
              className={"font-semibold"}
            >
              {content.title}
            </Typography>
          </a>
          <Typography
            Variant={"body2"}
          >{` at ${content.competition}`}</Typography>
        </p>
        <p className={"hidden lg:block"}>
          <Typography Variant={"body2"}>{content.date}</Typography>
        </p>
      </div>
      <div>
        <p>
          <Typography Variant={"body2"} Style={"italic"}>
            {content.issuer}
          </Typography>
        </p>
      </div>
      <div className={"block lg:hidden text-right"}>
        <p>
          <Typography Variant={"body2"}>{content.date}</Typography>
        </p>
      </div>
    </div>
  );
};

export default SecondTypeEntry;
