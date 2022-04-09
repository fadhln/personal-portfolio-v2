import React from "react";
import clsx from "clsx";
import { NavbarData } from "../../data/navbar.data";
import Typography from "../base/typography/typography";
import Link from "next/link";
import MainLogo from "../base/logo/main-logo";

const NavBar: React.FC = () => {
  return (
    <nav className={"sticky top-0"}>
      {/* TODO Make navbar transparent when sticked on top */}
      {/* TODO Make responsive */}
      <div className={"flex h-20 w-screen px-32 justify-between items-center"}>
        {NavbarData.map((data) => {
          return (
            <Link href={data.link} key={data.content}>
              <a>
                {data.content.toLowerCase() === "logo" ? (
                  <MainLogo width={75} />
                ) : (
                  <Typography variant={"body1"}>
                    <Typography variant={"link"} className={"uppercase"}>
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
