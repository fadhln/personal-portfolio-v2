import Typography, {
  customizableComponents,
} from "components/base/typography/typography";
import React from "react";
import ReactMarkdown from "react-markdown";
import { FirstResumeType } from "types/components/FirstResumeType";

interface FirstTypeProps {
  content: FirstResumeType;
}

const FirstType: React.FC<FirstTypeProps> = ({ content }) => {
  return (
    <div>
      <div className={"flex justify-between w-full"}>
        <div>
          <p>
            <a target="_blank" href={content.link} rel="noopener noreferrer">
              <Typography
                Variant={"body2"}
                Style={"underline"}
                className={"font-bold"}
              >
                <Typography Variant={"link"}>{content.institution}</Typography>
              </Typography>
            </a>
            <Typography
              Variant={"body2"}
            >{` - ${content.location}`}</Typography>
          </p>
        </div>
        <div className={"hidden lg:block"}>
          <p>
            <Typography Variant={"body2"}>{content.duration}</Typography>
          </p>
        </div>
      </div>
      <div>
        <Typography Variant={"body2"}>{content.position}</Typography>
      </div>
      {content.description && (
        <div className={"mt-2"}>
          <ReactMarkdown components={customizableComponents()}>
            {content.description}
          </ReactMarkdown>
        </div>
      )}
      <div className={"block lg:hidden text-right"}>
        <p>
          <Typography Variant={"body2"}>{content.duration}</Typography>
        </p>
      </div>
    </div>
  );
};

export default FirstType;
