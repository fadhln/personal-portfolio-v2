import React from "react";
import ReactMarkdown from "react-markdown";
import Typography, {
  customizableComponents,
} from "components/base/typography/typography";

interface TechStackSectionProps {
  data: string;
}

const TechStackSection: React.FC<TechStackSectionProps> = ({ data }) => {
  return (
    <div className={"container mx-auto max-w-[90%]"}>
      <p className={"flex flex-col items-center text-center gap-4 md:gap-0"}>
        <ReactMarkdown components={customizableComponents()}>
          {data}
        </ReactMarkdown>
      </p>
    </div>
  );
};

export default TechStackSection;
