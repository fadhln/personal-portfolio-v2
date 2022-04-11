import React from "react";
import Typography from "../../../components/base/typography/typography";

const HerosSection = () => {
  return (
    <div>
      <div className={"absolute translate-y-0"}></div>
      <div className={"grid justify-items-stretch max-w-[80%] mx-auto"}>
        <div>
          <Typography
            Variant={"display-huge"}
            className={"font-extrabold tracking-tighter"}
          >
            <Typography Variant={"display-huge"} Color={"primary"}>
              creativity
            </Typography>{" "}
            is
          </Typography>
        </div>
        <div className={"justify-self-end -translate-y-5"}>
          <Typography
            Variant={"display-huge"}
            className={"font-extrabold tracking-tighter"}
          >
            intelligence
          </Typography>
        </div>
        <div className={"justify-self-center -translate-y-10"}>
          <Typography
            Variant={"display-huge"}
            Style={"italic"}
            className={"tracking-tight"}
          >
            having fun
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default HerosSection;
