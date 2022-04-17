import React from "react";
import Typography from "../../../components/base/typography/typography";
import QuotesIcon from "../components/quotes";

const QuotesSubSection: React.FC = () => {
  return (
    <div className={"grid justify-items-stretch max-w-3xl mx-auto"}>
      <div className={"absolute translate-y-3 -translate-x-6"}>
        <QuotesIcon
          variant="opening"
          className={"stroke-neutral-100 stroke-2"}
        />
      </div>
      <div>
        <Typography
          Variant={"display-huge"}
          className={"font-extrabold tracking-tighter"}
        >
          <Typography Variant={"display-huge"} Color={"primary"}>
            creativity
          </Typography>{" "}
          is
        </Typography>
      </div>
      <div className={"justify-self-end -translate-y-5"}>
        <Typography
          Variant={"display-huge"}
          className={"font-extrabold tracking-tighter"}
        >
          intelligence
        </Typography>
      </div>
      <div className={"relative justify-self-center -translate-y-10"}>
        <Typography
          Variant={"display-huge"}
          Style={"italic"}
          className={"tracking-tight"}
        >
          having fun
        </Typography>
        <div className={"absolute -right-5 -bottom-6"}>
          <QuotesIcon
            variant="closing"
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
      <div className={"flex mt-24 max-w-[90%] mx-auto"}>
        <div className={"flex-1"}>
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
        <div>
          <a
            target="_blank"
            className="inline-flex align-text-bottom"
            href={"https://quoteinvestigator.com/2017/03/02/fun/#r+15588+1+5"}
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
