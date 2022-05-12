import clsx from "clsx";
import DynamicFiIcon from "components/base/dynamic-icon/dynamic-fi-icon";
import Typography from "components/base/typography/typography";
import React from "react";
import { Channels } from "types/components/Channels";

interface SocialMediaButtonProps {
  content: Channels;
}

const SocialMediaButton: React.FC<SocialMediaButtonProps> = ({ content }) => {
  return (
    <a
      className={"group w-32"}
      target="_blank"
      href={content.link ? content.link : "/"}
      rel="noopener noreferrer"
    >
      <button
        className={clsx(
          "text-neutral-100 border-[2px] border-neutral-100 w-32 h-32",
          "group-hover:bg-neutral-100 group-hover:text-base-900 group-hover:shadow-xl transition-all"
        )}
      >
        <DynamicFiIcon
          name={content.logoName}
          className={"stroke-1 text-5xl mx-auto"}
        />
      </button>
      <p className={"mt-1 w-32 break-words text-[0.1rem]"}>
        <Typography Variant={"body2"} className={"group-hover:underline"}>
          {content.content}
        </Typography>
      </p>
    </a>
  );
};

export default SocialMediaButton;
