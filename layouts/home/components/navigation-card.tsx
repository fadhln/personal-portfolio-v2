import clsx from "clsx";
import Link from "next/link";
import React from "react";
import Typography from "components/base/typography/typography";

interface NavigationCardProps {
  data: {
    title: string;
    caption: string;
    href: string;
  };
  height: number;
  width: number;
  variant?: "default" | "transparent";
  titleSize: "default" | "huge";
}

const NavigationCard: React.FC<NavigationCardProps> = ({
  data,
  height,
  width,
  variant = "default",
  titleSize = "default",
}) => {
  return (
    <div
      className={clsx(
        "transition-all group",
        {
          "border-2 border-neutral-100 hover:bg-base-900":
            variant === "default",
          "bg-base-900 hover:bg-neutral-100": variant === "default",
        },
        "hover:-translate-y-1 hover:shadow",
        `h-[${height}rem] w-[${width}rem]`
      )}
    >
      <Link href={data.href}>
        <a>
          <div
            className={clsx("flex flex-col h-full w-full", {
              "justify-center items-center": variant === "default",
            })}
          >
            <div className={"p-3"}>
              <div>
                <Typography
                  Variant={titleSize === "huge" ? "display-small" : "h2"}
                >
                  <Typography
                    Variant={"link-arrow"}
                    className={clsx(
                      "text-neutral-100",
                      { "group-hover:text-base-900": variant === "default" },
                      "font-extrabold"
                    )}
                  >
                    {data.title}
                  </Typography>
                </Typography>
              </div>
              <p>
                <Typography
                  Variant={"caption"}
                  className={clsx(
                    "text-neutral-100",
                    { "group-hover:text-base-900": variant === "default" },
                    "font-extrabold"
                  )}
                >
                  {data.caption}{" "}
                </Typography>
              </p>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default NavigationCard;
