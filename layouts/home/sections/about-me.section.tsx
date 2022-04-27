import Link from "next/link";
import React from "react";
import Typography from "components/base/typography/typography";

interface AboutMeSectionProps {
  content: string;
}

const AboutMeSection: React.FC<AboutMeSectionProps> = ({ content }) => {
  return (
    <div className={"flex flex-col md:flex-row container mx-auto max-w-[90%]"}>
      <div className={"flex-1"}>
        <Link href={"/about"}>
          <a>
            <Typography Variant={"h1"} className={"font-extrabold"}>
              <Typography Variant={"link-arrow"}>about me</Typography>
            </Typography>
          </a>
        </Link>
      </div>
      <p className={"pl-8 md:pl-0 md:max-w-xl text-right mt-8 md:mt-0"}>
        <Typography Variant={"body2"} className={"max-w-md"}>
          {content}
        </Typography>
      </p>
    </div>
  );
};

export default AboutMeSection;
