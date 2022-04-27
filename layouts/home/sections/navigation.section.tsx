import clsx from "clsx";
import Image from "next/image";
import React from "react";
import { MainImage } from "types/components/MainImage";
import screenSizes from "utils/screenSizes";
import useWindowSize from "utils/useWindowSize";
import NavigationCard from "layouts/home/components/navigation-card";

interface NavigationSectionProps {
  navigationPhoto: MainImage;
}

const NavigationSection: React.FC<NavigationSectionProps> = ({
  navigationPhoto,
}) => {
  const { width } = useWindowSize();

  const imageSizeMultiplier = width! > screenSizes.md ? 0.6 : 0.3;
  const imageData = navigationPhoto.image.data;
  const imageSrc = imageData.attributes.url;
  const imageWidth = imageData.attributes.width * imageSizeMultiplier;
  const imageHeight = imageData.attributes.height * 0.75 * imageSizeMultiplier;
  const imageAlt = navigationPhoto.altText;

  const navcardVariant = width! > screenSizes.md ? "default" : "transparent";
  const navcardTitleSize = width! > screenSizes.md ? "default" : "huge";

  return (
    <div
      className={"flex relative container mx-auto max-w-[90%] justify-center"}
    >
      <div className={"flex w-full justify-end md:justify-center"}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          height={imageHeight}
          width={imageWidth}
          objectFit={"cover"}
        />
      </div>
      <div
        className={clsx(
          "absolute left-0 md:inset-0",
          "justify-center flex flex-col md:flex-row",
          "h-full md:items-center"
        )}
      >
        <NavigationCard
          variant={navcardVariant}
          titleSize={navcardTitleSize}
          responsive
          data={{
            title: "resume",
            caption: "view my previous work",
            href: "/resume",
          }}
        />
        <div className={"w-[10rem]"} />
        <NavigationCard
          variant={navcardVariant}
          titleSize={navcardTitleSize}
          responsive
          data={{
            title: "blog",
            caption: "read my latest article",
            href: "/blog",
          }}
        />
      </div>
    </div>
  );
};

export default NavigationSection;
