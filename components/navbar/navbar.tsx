import React, { useEffect } from "react";
import clsx from "clsx";
import { NavbarData } from "../../data/navbar.data";
import Typography from "../base/typography/typography";
import Link from "next/link";
import MainLogo from "../base/logo/main-logo";

const NavBar: React.FC = () => {
  let listener: any = null;
  const [scrollState, setScrollState] = React.useState("top");

  useEffect(() => {
    listener = document.addEventListener("scroll", (e) => {
      var scrolled = document.scrollingElement!.scrollTop;
      if (Boolean(scrolled)) {
        if (scrolled >= 50) {
          if (scrollState !== "amir") setScrollState("amir");
        } else {
          if (scrollState !== "top") setScrollState("top");
        }
      }
    });
    return () => {
      document.removeEventListener("scroll", listener);
    };
  }, [scrollState]);

  return (
    <nav className={"sticky top-0"}>
      {/* TODO Make responsive */}
      <div
        className={clsx(
          "flex w-full px-32 py-3 justify-between items-center transition-colors",
          {
            "bg-transparent": scrollState === "top",
            "bg-base-900": scrollState === "amir",
          }
        )}
      >
        {NavbarData.map((data) => {
          return (
            <Link href={data.link} key={data.content}>
              <a>
                {data.content.toLowerCase() === "logo" ? (
                  <MainLogo width={75} />
                ) : (
                  <Typography Variant={"body1"}>
                    <Typography Variant={"link"} className={"uppercase"}>
                      {data.content}
                    </Typography>
                  </Typography>
                )}
              </a>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default NavBar;
