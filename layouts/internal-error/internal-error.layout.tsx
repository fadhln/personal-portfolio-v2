import Typography, {
  customizableComponents,
} from "components/base/typography/typography";
import Elipse from "components/svg-decoration/elipse";
import React from "react";
import ReactMarkdown from "react-markdown";

const InternalErrorLayout = () => {
  return (
    <div className={"relative grid grid-cols-1 gap-40 z-10"}>
      <div className={"absolute -z-30 -top-48 -left-96"}>
        <Elipse width={600} />
      </div>
      <section className={"h-[80vh]"}>
        <div className={"h-full flex flex-col justify-center items-center"}>
          <h1>
            <Typography Variant={"display-huge"} className={"font-extrabold"}>
              :(
            </Typography>
          </h1>
          <div className={"max-w-[14rem] text-center mt-8"}>
            <ReactMarkdown components={customizableComponents()}>
              {"*Unfortunately*, server-side error has occured. [_500_]"}
            </ReactMarkdown>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InternalErrorLayout;
