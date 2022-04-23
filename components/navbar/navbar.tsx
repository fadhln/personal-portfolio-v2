import React, { useEffect } from "react";
import clsx from "clsx";
import { NavbarData } from "../../data/navbar.data";
import Typography from "../base/typography/typography";
import Link from "next/link";
import MainLogo from "../base/logo/main-logo";
import MobileSidebar from "./mobile-sidebar";

const NavBar: React.FC = () => {
  let listener: any = null;
  const [scrollState, setScrollState] = React.useState("top");

  /* eslint-disable */
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
  /* eslint-enable */

  return (
    <nav className={"top-0 fixed w-full z-50"}>
      {/* TODO Make responsive */}
      <div
        className={clsx(" w-full px-3 md:px-32 py-3 transition-all", {
          "bg-transparent": scrollState === "top",
          "bg-base-900 shadow-lg shadow-base-900": scrollState === "amir",
        })}
      >
        <div className={clsx("flex md:hidden justify-between")}>
          <MainLogo width={65} />
          <MobileSidebar />
        </div>
        <div
          className={clsx(
            "hidden md:flex justify-between items-center",
            "container px-8 mx-auto"
          )}
        >
          {NavbarData.map((data) => {
            return (
              <Link href={data.link} key={data.content}>
                <a>
                  {data.content.toLowerCase() === "home" ? (
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
      </div>
    </nav>
  );
};

export default NavBar;
