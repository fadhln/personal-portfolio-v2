import Link from "next/link";
import React from "react";
import Typography from "../../../components/base/typography/typography";

interface AboutMeSectionProps {
  content: string;
}

const AboutMeSection: React.FC<AboutMeSectionProps> = ({ content }) => {
  return (
    <div className={"flex container mx-auto max-w-[90%]"}>
      <div className={"flex-1"}>
        <Link href={"/about"}>
          <a>
            <Typography Variant={"h1"} className={"font-extrabold"}>
              <Typography Variant={"link-arrow"}>about me</Typography>
            </Typography>
          </a>
        </Link>
      </div>
      <p className={"max-w-xl text-right"}>
        <Typography Variant={"body2"}>{content}</Typography>
      </p>
    </div>
  );
};

export default AboutMeSection;
