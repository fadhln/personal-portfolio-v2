import { useRouter } from "next/router";
import React from "react";
import ReactMarkdown, { Components } from "react-markdown";
import Button from "../../../components/base/button/button";
import Typography from "../../../components/base/typography/typography";
import Elipse from "../../../components/svg-decoration/elipse";
import ExclamationIcon from "../../../components/svg-decoration/exclamation-icon";

const CTAComponents = (): Components => {
  return {
    p: ({ node, ...props }) => (
      <Typography
        Color={"dark"}
        Variant={"display-small"}
        className={"font-extrabold"}
        {...props}
      />
    ),
    strong: ({ node, ...props }) => (
      <Typography
        Color={"primary"}
        Variant={"display-small"}
        className={"font-extrabold"}
        {...props}
      />
    ),
  };
};

interface CallToActionSectionProps {
  opportunitiesTitle: string;
  opportunitiesContent: string;
}

const CallToActionSection: React.FC<CallToActionSectionProps> = ({
  opportunitiesTitle,
  opportunitiesContent,
}) => {
  const router = useRouter();

  return (
    <div className={"container mx-auto overflow-hidden"}>
      <div className={"relative bg-neutral-100 w-full"}>
        <div className={"p-16 text-center z-10"}>
          <h1>
            <ReactMarkdown components={CTAComponents()}>
              {opportunitiesTitle}
            </ReactMarkdown>
          </h1>
          <p className={"mt-12 mx-24"}>
            <Typography Variant={"caption"} Color={"dark"}>
              {opportunitiesContent}
            </Typography>
          </p>
          <div className={"mt-16"}>
            <Button type={"button"} onClick={() => router.push("/contact")}>
              Contact Me
            </Button>
          </div>
        </div>
        <div className={"absolute -bottom-44 -right-11 z-0"}>
          <ExclamationIcon />
        </div>
      </div>
    </div>
  );
};

export default CallToActionSection;
