import clsx from "clsx";
import Image from "next/image";
import React from "react";
import { MainImage } from "../../../types/components/MainImage";
import NavigationCard from "../components/navigation-card";

interface NavigationSectionProps {
  navigationPhoto: MainImage;
}

// TODO Make responsive

const NavigationSection: React.FC<NavigationSectionProps> = ({
  navigationPhoto,
}) => {
  const imageData = navigationPhoto.image.data;
  const imageSrc = imageData.attributes.url;
  const width = imageData.attributes.width;
  const height = imageData.attributes.height * 0.75;
  const imageAlt = navigationPhoto.altText;

  return (
    <div
      className={"flex relative container mx-auto max-w-[90%] justify-center"}
    >
      <div className={"max-w-xs"}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          height={height}
          width={width}
          objectFit={"cover"}
        />
      </div>
      <div className={clsx("absolute flex h-full items-center")}>
        <NavigationCard
          data={{
            title: "resume",
            caption: "view my previous work",
            href: "/resume",
          }}
        />
        <div className={"w-[15rem]"} />
        <NavigationCard
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
