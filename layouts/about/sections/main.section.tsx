import Button from "components/base/button/button";
import Typography, {
  customizableComponents,
} from "components/base/typography/typography";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import ReactMarkdown from "react-markdown";
import { Media } from "types/Media";

interface MainSectionProps {
  title: string;
  subTitle: string;
  image: Media;
  imageAltText: string;
  content: string;
}

const MainSection: React.FC<MainSectionProps> = ({
  title,
  subTitle,
  image,
  imageAltText,
  content,
}) => {
  const router = useRouter();

  const imageSizeMultiplier = 0.6;
  const imageSrc = image.data.attributes.url;
  const imageWidth = image.data.attributes.width * imageSizeMultiplier;
  const imageHeight = image.data.attributes.height * 0.8 * imageSizeMultiplier;

  return (
    <div>
      <div className={"flex justify-between mx-auto w-full md:max-w-[90%]"}>
        <div className={"md:pr-8"}>
          <p>
            <Typography Variant={"body2"} Style={"italic"}>
              {subTitle}
            </Typography>
          </p>
          <h1>
            <Typography
              Variant={"display"}
              Style={"italic"}
              className={"font-extrabold"}
            >
              {title}
            </Typography>
          </h1>
          <div className={"md:hidden mx-auto mt-8 flex flex-col items-center"}>
            <Image
              src={imageSrc}
              alt={imageAltText}
              height={imageHeight}
              width={imageWidth}
              objectFit={"cover"}
            />
            <div className={"mt-5"}>
              <Button onClick={() => router.push("/contact")}>
                Contact Me
              </Button>
            </div>
          </div>
          <div className={"grid mt-8 gap-4"}>
            <ReactMarkdown components={customizableComponents()}>
              {content}
            </ReactMarkdown>
          </div>
        </div>
        <div
          className={"w-[60rem] hidden md:flex flex-col h-full justify-center"}
        >
          <Image
            src={imageSrc}
            alt={imageAltText}
            height={imageHeight}
            width={imageWidth}
            objectFit={"cover"}
          />
          <div className={"mt-5"}>
            <Button onClick={() => router.push("/contact")}>Contact Me</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
