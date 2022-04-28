import Button from "components/base/button/button";
import Typography from "components/base/typography/typography";
import React from "react";
import { ResumePage } from "types/ResumePage";

interface ResumeLayoutProps {
  data: ResumePage;
}

const ResumeLayout: React.FC<ResumeLayoutProps> = ({ data }) => {
  return (
    <div className={"grid grid-cols-1 gap-40 my-20 z-10"}>
      <title
        className={
          "flex justify-between mx-auto w-full md:max-w-[90%] items-end"
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
        <div>
          <Button>Download Resume</Button>
        </div>
      </title>
    </div>
  );
};

export default ResumeLayout;
