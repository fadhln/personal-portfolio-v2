import React from "react";
import Typography from "../../../components/base/typography/typography";
import Elipse from "../../../components/svg-decoration/elipse";
import screenSizes from "../../../utils/screenSizes";
import useWindowSize from "../../../utils/useWindowSize";
import QuotesIcon from "../components/quotes";

const QuotesSubSection: React.FC = () => {
  const { width } = useWindowSize();
  const displaySize =
    width! > screenSizes.md
      ? "display-huge"
      : width! > screenSizes.sm
      ? "display-large"
      : "display-medium";
  const iconWidth = width! > screenSizes.md ? 70 : 50;

  return (
    <div
      className={
        "grid justify-items-stretch max-w-md md:max-w-3xl mx-auto overflow-clip"
      }
    >
      <div className={"absolute -top-40 md:-top-48 -left-40 md:-left-60 z-0"}>
        <Elipse width={width! > screenSizes.md ? 600 : 400} />
      </div>
      <div
        className={"absolute translate-y-3 -translate-x-4 md:-translate-x-6"}
      >
        <QuotesIcon
          variant="opening"
          width={iconWidth}
          className={"stroke-neutral-100 stroke-2"}
        />
      </div>
      <div>
        <Typography
          Variant={displaySize}
          className={"font-extrabold tracking-tighter"}
        >
          <Typography Variant={displaySize} Color={"primary"}>
            creativity
          </Typography>{" "}
          is
        </Typography>
      </div>
      <div className={"justify-self-end -translate-y-5"}>
        <Typography
          Variant={displaySize}
          className={"font-extrabold tracking-tighter"}
        >
          intelligence
        </Typography>
      </div>
      <div className={"relative justify-self-center -translate-y-10"}>
        <Typography
          Variant={displaySize}
          Style={"italic"}
          className={"tracking-tight"}
        >
          having fun
        </Typography>
        <div className={"absolute -right-5 -bottom-4 md:-bottom-6"}>
          <QuotesIcon
            variant="closing"
            width={iconWidth}
            className={"stroke-neutral-100 stroke-2"}
          />
        </div>
      </div>
    </div>
  );
};

interface HerosSectionProps {
  overviewTitle: string;
  overviewContent: string;
}

const HerosSection: React.FC<HerosSectionProps> = ({
  overviewTitle,
  overviewContent,
}) => {
  return (
    <div>
      <QuotesSubSection />
      <div
        className={
          "flex flex-col-reverse md:flex-row md:mt-24 max-w-[90%] mx-auto"
        }
      >
        <div className={"mt-12 md:mt-0 md:flex-1"}>
          <h3>
            <Typography Variant={"body1"} Style={"semibold"}>
              {overviewTitle}
            </Typography>
          </h3>
          <p>
            <Typography Variant={"body1"}>-</Typography>
          </p>
          <p className={"max-w-md"}>
            <Typography Variant={"body2"}>{overviewContent}</Typography>
          </p>
        </div>
        <div className={"text-right"}>
          <a
            target="_blank"
            href={"https://quoteinvestigator.com/2017/03/02/fun/#r+15588+1+5"}
            rel="noreferrer"
          >
            <Typography Variant={"body1"} Style={"underline"}>
              <Typography Variant={"link-arrow"}>Joey Reiman(1992)</Typography>
            </Typography>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HerosSection;
