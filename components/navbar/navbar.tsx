import React from "react";
import clsx from "clsx";
import { NavbarData } from "../../data/navbar.data";
import Typography from "../base/typography/typography";

const NavBar: React.FC = () => {
  return (
    <nav>
      <div className={clsx("h-16", "w-screen")}>
        {NavbarData.map((data) => {
          return (
            <a>
              <Typography variant={"body"}>
                <Typography variant={"link"} className={"uppercase"}>
                  {data.menu}
                </Typography>
              </Typography>
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default NavBar;
