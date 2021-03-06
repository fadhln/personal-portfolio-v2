import React from "react";
import clsx from "clsx";
import { TypographyVariant } from "./typography-variant";
import getVariantClassname from "./getVariantClassname";
import { Components } from "react-markdown";
import { RiArrowRightUpLine } from "@react-icons/all-files/ri/RiArrowRightUpLine";
import Link from "next/link";

type TypographyColor = "main" | "primary" | "dark";
type TypographyStyle = "regular" | "semibold" | "italic" | "underline";
export interface TypographyProps {
  className?: string;
  children?: any;
  Variant?: TypographyVariant;
  Style?: TypographyStyle;
  Color?: TypographyColor;
}

const Typography: React.FC<React.PropsWithChildren<TypographyProps>> = (
  { className, children, Variant, Style, Color },
  props
) => {
  const variantClassName = getVariantClassname(Variant);
  const TypographyClassName = clsx(
    className,
    variantClassName,
    {
      "font-semibold": Style === "semibold",
      italic: Style === "italic",
      underline: Style === "underline",
    },
    {
      "text-neutral-100": Color === "main",
      "text-primary-500": Color === "primary",
      "text-base-900": Color === "dark",
    }
  );

  return (
    <>
      <span className={TypographyClassName} {...props}>
        {children}
        {Variant === "link-arrow" ? (
          <RiArrowRightUpLine className={"align-baseline"} />
        ) : (
          ""
        )}
      </span>
    </>
  );
};

Typography.defaultProps = {
  Variant: "body",
  Style: "regular",
  Color: "main",
} as Partial<TypographyProps>;

export interface TypogaphyLinkProps {
  href?: string;
  Color?: TypographyColor;
  children: any;
}

const TypographyLink: React.FC<React.PropsWithChildren<TypogaphyLinkProps>> = (
  { href = "#", Color = "main", children },
  props
) => {
  return (
    <Link href={href}>
      <a>
        <Typography Color={Color} Variant={"link"} {...props}>
          {children}
        </Typography>
      </a>
    </Link>
  );
};

export const customizableComponents = (
  color: TypographyColor = "main"
): Components => {
  return {
    p: ({ node, ...props }) => (
      <p>
        <Typography Color={color} Variant={"body2"} {...props} />
      </p>
    ),
    em: ({ node, ...props }) => (
      <Typography Color={color} Variant={"body2"} Style={"italic"} {...props} />
    ),
    strong: ({ node, ...props }) => (
      <Typography
        Color={color}
        Variant={"body2"}
        Style={"semibold"}
        {...props}
      />
    ),
    li: ({ index, ordered, className, ...props }) => {
      const ordered_bool = ordered ? 1 : 0;
      return (
        <li className={"flex justify-between"}>
          {ordered_bool ? (
            <Typography Color={color} Variant={"body2"}>
              {index}
            </Typography>
          ) : (
            <Typography Color={color} Variant={"body2"}>{`??? `}</Typography>
          )}
          <Typography
            Color={color}
            Variant={"body2"}
            className={clsx(className, "leading-3 w-[98%]")}
            {...props}
          />
        </li>
      );
    },
    ul: ({ className, ...props }) => (
      <ul className={clsx(className, "flex flex-col gap-1")} {...props} />
    ),
    a: ({ node, ...props }) => (
      <TypographyLink Color={color} href={props.href} {...props} />
    ),
    br: ({ node, ...props }) => <br {...props} />,
  };
};

export default Typography;
