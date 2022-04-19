import clsx from "clsx";
import Link from "next/link";
import React from "react";
import Typography from "../../../components/base/typography/typography";

interface NavigationCardProps {
  data: {
    title: string;
    caption: string;
    href: string;
  };
}

const NavigationCard: React.FC<NavigationCardProps> = ({ data }) => {
  return (
    <div
      className={clsx(
        "border-2 transition-all group",
        "border-neutral-100 hover:bg-base-900",
        "bg-base-900 hover:bg-neutral-100",
        "hover:-translate-y-1 hover:shadow",
        "h-[10rem] w-[18rem]"
      )}
    >
      <Link href={data.href}>
        <a>
          <div
            className={
              "flex flex-col justify-center items-center h-full w-full"
            }
          >
            <div className={"p-3"}>
              <div>
                <Typography Variant={"h2"}>
                  <Typography
                    Variant={"link-arrow"}
                    className={clsx(
                      "text-neutral-100 group-hover:text-base-900",
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
                  className={clsx("text-neutral-100 group-hover:text-base-900")}
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
