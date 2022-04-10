import React from "react";
import ReactMarkdown from "react-markdown";

import { FooterData } from "../../data/footer.data";

import MainLogo from "../base/logo/main-logo";
import { customizableComponents } from "../base/typography/typography";
import Typography from "../base/typography/typography";
import Link from "next/link";

const Footer: React.FC = () => {
  // TODO Make Footer Responsive
  return (
    <footer>
      <div className={"flex w-full h-full px-16 py-16 bg-accent-400"}>
        <div className="flex-1">
          <MainLogo color={"#1C211E"} width={125} />
          <ReactMarkdown
            components={customizableComponents("dark")}
            className={"mt-2"}
          >
            {FooterData.subtitle}
          </ReactMarkdown>
          <ReactMarkdown
            components={customizableComponents("dark")}
            className={"mt-16"}
          >
            {FooterData.copyright}
          </ReactMarkdown>
        </div>
        <div className={"grid grid-cols-1 py-4 content-between text-right"}>
          {FooterData.menu.map((menu) => {
            return (
              <Link href={menu.link} key={menu.content}>
                <a>
                  <Typography Variant="body" Color="dark" Style="underline">
                    <Typography Variant="link" Color="dark">
                      {menu.content}
                    </Typography>
                  </Typography>
                </a>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="w-full h-3 bg-primary-500" />
    </footer>
  );
};

export default Footer;
