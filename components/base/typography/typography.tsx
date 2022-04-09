import React from "react";
import clsx from "clsx";
import { TypographyVariant } from "./typography-variant";
import getVariantClassname from "./getVariantClassname";

interface TypographyProps {
  children?: any;
  className?: string;
  variant?: TypographyVariant;
  style?: "regular" | "semibold" | "italic" | "underline";
  color?: "main" | "primary";
}

const defaultProps: TypographyProps = {
  variant: "body",
  style: "regular",
  color: "main",
};

const Typography: React.FC<TypographyProps> = ({
  children,
  className,
  variant,
  style,
  color,
}) => {
  const variantClassName = getVariantClassname(variant);
  const TypographyClassName = clsx(
    variantClassName,
    {
      "font-semibold": style === "semibold",
      italic: style === "italic",
      underline: style === "underline",
    },
    {
      "text-neutral-100": color === "main",
      "text-primary-500": color === "primary",
    },
    className
  );

  return <span className={TypographyClassName}>{children}</span>;
};

Typography.defaultProps = {
  variant: "body",
  style: "regular",
  color: "main",
} as Partial<TypographyProps>;

export default Typography;
