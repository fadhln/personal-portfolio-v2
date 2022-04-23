import clsx from "clsx";
import Link from "next/link";
import React, { useState } from "react";
import { NavbarData } from "../../data/navbar.data";
import Typography from "../base/typography/typography";

const MobileSidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-0.5 w-6 my-0.5 rounded-full bg-neutral-100 transition ease transform duration-300`;

  return (
    <>
      <button
        className="z-50 flex flex-col h-12 w-12 rounded justify-center items-center group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          className={`${genericHamburgerLine} ${
            isOpen
              ? "rotate-45 translate-y-1.5 opacity-50 group-hover:opacity-100"
              : "opacity-50 group-hover:opacity-100"
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isOpen
              ? "-rotate-45 -translate-y-1.5 opacity-50 group-hover:opacity-100"
              : "opacity-50 group-hover:opacity-100"
          }`}
        />
      </button>
      {!isOpen ? (
        <></>
      ) : (
        <div
          className={clsx(
            "fixed h-screen z-40 top-0 right-0 w-full bg-base-800 ease-in-out duration-300 transition-all"
          )}
        >
          <ul
            className={
              "flex flex-col gap-8 item-center justify-center h-full w-full"
            }
          >
            {NavbarData.map((data) => {
              return (
                <Link href={data.link} key={data.content}>
                  <a>
                    <li key={data.content} className={"text-center"}>
                      <Typography Variant={"body"}>
                        <Typography Variant={"link"} className={"uppercase"}>
                          {data.content}
                        </Typography>
                      </Typography>
                    </li>
                  </a>
                </Link>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
};

export default MobileSidebar;
