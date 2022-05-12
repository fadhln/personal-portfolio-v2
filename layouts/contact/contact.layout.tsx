import Typography from "components/base/typography/typography";
import React from "react";
import { content } from "tailwind.config";
import { ContactMePage } from "types/ContactMePage";
import SocialMediaButton from "./components/socialmedia-button";

interface ContactLayoutProps {
  data: ContactMePage;
}

const ContactLayout: React.FC<ContactLayoutProps> = ({ data }) => {
  return (
    <div className={"grid grid-cols-1 gap-32 my-20 z-10"}>
      <div className={"flex flex-col mx-auto w-full md:max-w-[90%]"}>
        <h1>
          <Typography
            Variant={"display"}
            Style={"italic"}
            className={"font-extrabold"}
          >
            {data.attributes.mainTitle}
          </Typography>
        </h1>
        <p className="mt-4">
          <Typography Variant={"body2"}>{data.attributes.content}</Typography>
        </p>
      </div>
      <div
        className={
          "flex flex-wrap mx-auto justify-center md:justify-between gap-6 md:gap-9 md:max-w-[90%] "
        }
      >
        {data.attributes.channels.map((c) => (
          <div key={c.id}>
            <SocialMediaButton content={c} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactLayout;
