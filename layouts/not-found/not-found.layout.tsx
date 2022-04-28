import Button from "components/base/button/button";
import Typography, {
  customizableComponents,
} from "components/base/typography/typography";
import Elipse from "components/svg-decoration/elipse";
import { useRouter } from "next/router";
import React from "react";
import ReactMarkdown from "react-markdown";

const NotFoundLayout = () => {
  const router = useRouter();

  return (
    <div className={"relative grid grid-cols-1 gap-40 z-10"}>
      <div className={"absolute -z-30 -top-48 -left-96"}>
        <Elipse width={600} />
      </div>
      <section className={"h-[80vh]"}>
        <div className={"h-full flex flex-col justify-center items-center"}>
          <h1>
            <Typography Variant={"display-huge"} className={"font-extrabold"}>
              404
            </Typography>
          </h1>
          <div className={"max-w-[12rem] text-center mt-4"}>
            <ReactMarkdown components={customizableComponents()}>
              {"The page you requested *is not found*."}
            </ReactMarkdown>
          </div>
          <Button className={"mt-9"} onClick={() => router.push("/")}>
            <Typography Variant={"link-arrow"}>Back to Home</Typography>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default NotFoundLayout;
